import { Comment } from '@components/common/comment/Comment';

type Props = {
  issueId: number;
  issueAuthor: User;
  userId: number;
  onAddComment: (comment: any) => void;
};

export const AddNewComment: React.FC<Props> = ({
  issueId,
  issueAuthor,
  userId,
  onAddComment,
}) => {
  // console.log('issueId', issueId);
  // console.log('issueAuthor', issueAuthor);
  // console.log('userId', userId);

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '24px',
      }}
    >
      <Comment
        issueId={issueId}
        issueAuthor={issueAuthor}
        defaultValue=""
        typeVariant="add"
        onAddComment={onAddComment}
      />
    </div>
  );
};
