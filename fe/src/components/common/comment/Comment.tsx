import { useTheme } from '@emotion/react';
import { Box } from '../box/Box';
import { useState, useEffect, useRef } from 'react';
import { TextArea } from '../textArea/TextArea';
import { TextAreaInput } from '../textArea/TextAreaInput';
import { CommentHeader } from './CommentHeader';
import { Caption } from '../textArea/Caption';
import { AddButtons } from '../textArea/AddButtons';
import { Button } from '../Button';
import { ReactComponent as PaperClip } from '@assets/icons/paperclip.svg';
import { ReactComponent as XSquare } from '@assets/icons/xSquare.svg';
import { uploadFile } from 'apis/fileUpload';
import { ReactComponent as Plus } from '@assets/icons/plus.svg';
import { editComment, patchIssueContents, postNewComment } from 'apis/api';
import { getLocalStorageUserId } from 'apis/localStorage';

type DefaultFileStatusType = {
  typeError: boolean;
  sizeError: boolean;
  isUploading: boolean;
  uploadFailed: boolean;
};
type Props = {
  issueDetailPageData: IssueDetailPageData;
  typeVariant: 'issue' | 'default' | 'edit' | 'add';
  createdAt?: string;
  comment?: CommentType;
  isDisabled?: boolean;
  defaultValue: string;
  onAddComment?: (comment: CommentType) => void;
  onDeleteComment?: (id?: number) => void;
};

export const Comment: React.FC<Props> = ({
  issueDetailPageData,
  createdAt,
  comment,
  typeVariant = 'default',
  isDisabled = false,
  defaultValue,
  onAddComment,
  onDeleteComment,
}) => {
  const theme = useTheme() as any;

  //코멘트랑 textArea비슷한거 어케줄일지 생각하기..
  const [textAreaValue, setTextAreaValue] = useState<string>(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [isDisplayingCount, setIsDisplayingCount] = useState(false);
  const placeholderValueRef = useRef<string>(defaultValue);
  const storagedUserId = getLocalStorageUserId();

  useEffect(() => {
    if (textAreaValue) {
      setIsDisplayingCount(true);
      const timer = setTimeout(() => setIsDisplayingCount(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [textAreaValue]);

  const [fileStatus, setFileStatus] =
    useState<DefaultFileStatusType>(initialStatus);

  const initFileStatus = () => {
    setFileStatus(initialStatus);
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    initFileStatus();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (!file) {
        setFileStatus((prev) => ({ ...prev, uploadFailed: true }));
        return;
      }

      const fileName = file.name;

      if (file.size > AVAILABLE_FILE_SIZE) {
        setFileStatus((prev) => ({ ...prev, sizeError: true }));
        return;
      }

      if (!file.type.startsWith('image/')) {
        setFileStatus((prev) => ({ ...prev, typeError: true }));
        return;
      }

      try {
        setFileStatus((prev) => ({ ...prev, isUploading: true }));

        const fileUrl = await uploadFile(file);
        onAppendMarkdownFileUrl(fileName, fileUrl.fileUrl);
      } catch {
        setFileStatus((prev) => ({ ...prev, uploadFailed: true }));
      } finally {
        setFileStatus((prev) => ({ ...prev, isUploading: false }));
      }
    }
  };

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const onAppendMarkdownFileUrl = (fileName: string, fileUrl: string) => {
    setTextAreaValue((prevValue) => `${prevValue}![${fileName}](${fileUrl})`);
  };

  const onAddSubmit = async () => {
    try {
      const newComment = await postNewComment(
        issueDetailPageData.id,
        storagedUserId,
        textAreaValue,
      );

      if (onAddComment) {
        onAddComment(newComment);
        setTextAreaValue('');
      }
    } catch (error) {
      console.error('이슈 추가 에러:', error);
      // 에러처리
    }
  };

  const onEditSubmit = async () => {
    try {
      typeVariant === 'issue'
        ? await patchIssueContents(issueDetailPageData.id, textAreaValue)
        : await editComment(comment?.id, textAreaValue);

      setIsEditing(false);
    } catch (error) {
      console.error('이슈 편집 에러:', error);
      // 에러처리
    }
  };

  const onClickEdit = () => {
    placeholderValueRef.current = textAreaValue;
    setIsEditing(true);
  };

  const onEditCancel = () => {
    setIsEditing(false);
    setTextAreaValue(placeholderValueRef.current);
  };

  const wrapperStyle = {
    background: theme.neutral.surface.strong,
    '&:focus-within': {
      border: `${theme.border.default} ${theme.neutral.border.defaultActive}`,
    },
  };

  const isAuthor =
    storagedUserId === comment?.author?.userId ||
    storagedUserId === issueDetailPageData.author.userId;

  const basicImage = '/basic-profile.jpeg';
  return (
    <>
      {typeVariant === 'add' && (
        <>
          <TextArea
            size="S"
            typeVariant="add"
            letterCount={textAreaValue.length}
            textAreaValue={textAreaValue}
            onAppendMarkdownFileUrl={onAppendMarkdownFileUrl}
            onChangeTextArea={onChangeTextArea}
          />

          <Button
            typeVariant="contained"
            size="S"
            disabled={textAreaValue === ''}
            onClick={onAddSubmit}
          >
            <Plus stroke={theme.brand.text.default} />
            코멘트 작성
          </Button>
        </>
      )}
      {(typeVariant === 'default' || typeVariant === 'issue') && (
        <>
          <Box
            header={
              <CommentHeader
                typeVariant={typeVariant}
                commentId={comment?.id}
                onClickEdit={onClickEdit}
                onClickDelete={onDeleteComment}
                image={
                  typeVariant === 'issue'
                    ? issueDetailPageData.author.image || basicImage
                    : comment?.author?.image || basicImage
                }
                loginId={
                  typeVariant === 'issue'
                    ? issueDetailPageData.author.loginId
                    : comment?.author?.loginId
                }
                createdAt={createdAt}
                isAuthor={isAuthor}
              />
            }
            customStyle={wrapperStyle}
          >
            <div css={{ paddingTop: '16px' }}>
              <TextAreaInput
                typeVariant={isEditing ? 'add' : 'default'}
                textAreaValue={textAreaValue}
                placeholder={defaultValue}
                isDisabled={isDisabled}
                onChangeTextArea={onChangeTextArea}
              />
            </div>
            {isEditing && (
              <>
                <div
                  css={{
                    background: theme.neutral.surface.strong,
                    paddingTop: '16px',
                    borderRadius: `0 0 ${theme.radius.l} ${theme.radius.l}`,
                  }}
                >
                  <Caption
                    isDisplayingCount={isDisplayingCount}
                    letterCount={textAreaValue.length}
                  />
                  <AddButtons
                    onFileChange={onFileChange}
                    fileStatus={fileStatus}
                  >
                    <Button
                      typeVariant="ghost"
                      size="S"
                      css={{
                        pointerEvents: 'none',
                      }}
                    >
                      <PaperClip stroke={theme.neutral.text.weak} />
                      파일 첨부하기
                    </Button>
                  </AddButtons>
                </div>
              </>
            )}
          </Box>
          {isEditing && (
            <div
              css={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <Button typeVariant="outline" size="S" onClick={onEditCancel}>
                <XSquare stroke={theme.brand.border.default} />
                편집 취소
              </Button>
              <Button
                typeVariant="contained"
                size="S"
                disabled={textAreaValue === placeholderValueRef.current}
                onClick={onEditSubmit}
              >
                편집 완료
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};
const initialStatus = {
  typeError: false,
  sizeError: false,
  isUploading: false,
  uploadFailed: false,
};

const AVAILABLE_FILE_SIZE = 1048576; //1MB
