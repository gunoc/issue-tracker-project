type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const UserImageLarge: React.FC<Props> = ({}: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#EFF0F6" />
    </svg>
  );
};
