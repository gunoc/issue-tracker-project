import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Button } from '@components/common/Button';
import { ReactComponent as Edit } from '@assets/icons/edit.svg';
import { ReactComponent as Archive } from '@assets/icons/archive.svg';
import { ReactComponent as XSquare } from '@assets/icons/xSquare.svg';
import { TextInput } from '@components/common/textInput/TextInput';
import { editIssueStatus, patchIssueTitle } from 'apis/api';

type Props = {
  title: string;
  id: number;
  status: string;
};

export const PostInformationHeader: React.FC<Props> = ({
  title,
  id,
  status,
}: Props) => {
  const theme = useTheme() as any;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [titleInput, setTitleInput] = useState<string>(title);
  const [placeholderValue, setPlaceholderValue] = useState<string>(title); //편집 취소시 돌아갈 값
  // 이렇게 말고 이전 값을 알고있을 방법 찾기
  //todo 길이제한 0이나 n0자 이상일때 버튼 비활성화

  const isDisabled = title.length === 0;

  const onEditTitleOpen = () => {
    setIsEditing(true);
  };

  const onEditTitleCancel = () => {
    setIsEditing(false);
    setTitleInput(placeholderValue);
  };

  const onChangeTitle = (value: string) => {
    setTitleInput(value);
    //x버튼 호환 생각하기
  };

  const onClearInput = () => {
    setTitleInput('');
    setPlaceholderValue('');
  };

  const onSubmitTitle = async () => {
    try {
      await patchIssueTitle(id, titleInput);
      setPlaceholderValue(titleInput);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onToggleIssueStatus = () => {
    const newStatus = status === 'open' ? 'closed' : 'open';
    editIssueStatus([id], newStatus);
  };

  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '16px',
        boxSizing: 'border-box',
      }}
    >
      {isEditing ? (
        <TextInput
          height={40}
          value={titleInput ? titleInput : title}
          label="제목"
          inputType="text"
          disabled={false}
          onChange={onChangeTitle}
          onClearInput={onClearInput}
        />
      ) : (
        <div
          css={{
            display: 'flex',
            gap: '8px',
          }}
        >
          <h2
            css={{
              color: theme.neutral.text.strong,
              font: theme.fonts.displayBold32,
            }}
          >
            {titleInput ? titleInput : title}
          </h2>

          <span
            css={{
              color: theme.neutral.text.weak,
              font: theme.fonts.displayBold32,
            }}
          >
            #{id}
          </span>
        </div>
      )}

      <div
        css={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        {isEditing ? (
          <>
            <Button typeVariant="outline" size="S" onClick={onEditTitleCancel}>
              <XSquare stroke={theme.brand.text.weak} />
              편집 취소
            </Button>
            <Button
              typeVariant="contained"
              size="S"
              disabled={isDisabled}
              onClick={onSubmitTitle}
            >
              <Edit stroke={theme.brand.text.default} />
              편집 완료
            </Button>
          </>
        ) : (
          <>
            <Button typeVariant="outline" size="S" onClick={onEditTitleOpen}>
              <Edit stroke={theme.brand.text.weak} />
              제목 편집
            </Button>
            <Button
              typeVariant="outline"
              size="S"
              onClick={onToggleIssueStatus}
            >
              <Archive stroke={theme.brand.text.weak} />
              {status === 'open' ? '이슈 닫기' : '이슈 열기'}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
