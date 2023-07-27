type Props = {
  width?: number;
  height?: number;
  stroke?: string;
};

export const Label: React.FC<Props> = ({}: Props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66683 4.66671H4.6735M13.7268 8.94004L8.94683 13.72C8.823 13.844 8.67595 13.9424 8.51408 14.0095C8.35222 14.0766 8.17872 14.1111 8.0035 14.1111C7.82828 14.1111 7.65477 14.0766 7.49291 14.0095C7.33105 13.9424 7.18399 13.844 7.06016 13.72L1.3335 8.00004V1.33337H8.00016L13.7268 7.06004C13.9752 7.30986 14.1146 7.64779 14.1146 8.00004C14.1146 8.35229 13.9752 8.69022 13.7268 8.94004Z"
        stroke="#4E4B66"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};