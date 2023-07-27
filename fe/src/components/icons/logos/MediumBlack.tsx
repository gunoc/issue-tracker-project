type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const MediumBlack: React.FC<Props> = ({}: Props) => {
  return (
    <svg
      width="200"
      height="40"
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.664 31L6.144 8.6H9.344L4.864 31H1.664ZM15.2183 31.192C13.7889 31.192 12.4343 31.0107 11.1543 30.648C9.89558 30.264 8.92492 29.7947 8.24225 29.24L9.61825 26.808C10.2796 27.32 11.1329 27.736 12.1783 28.056C13.2449 28.376 14.3543 28.536 15.5063 28.536C16.9783 28.536 18.0876 28.312 18.8343 27.864C19.5809 27.416 19.9543 26.808 19.9543 26.04C19.9543 25.4853 19.7303 25.0693 19.2823 24.792C18.8343 24.4933 18.2476 24.2693 17.5223 24.12C16.8183 23.9493 16.0609 23.7893 15.2503 23.64C14.4396 23.4693 13.6823 23.2347 12.9783 22.936C12.2743 22.6373 11.6876 22.2107 11.2183 21.656C10.7703 21.08 10.5463 20.3227 10.5463 19.384C10.5463 18.2533 10.8663 17.2827 11.5063 16.472C12.1463 15.64 13.0423 15 14.1943 14.552C15.3463 14.104 16.6903 13.88 18.2263 13.88C19.3356 13.88 20.4236 14.0187 21.4903 14.296C22.5783 14.552 23.4636 14.9253 24.1463 15.416L22.9303 17.848C22.2263 17.3573 21.4369 17.016 20.5623 16.824C19.6876 16.6107 18.8129 16.504 17.9383 16.504C16.5089 16.504 15.4316 16.7493 14.7063 17.24C13.9809 17.7093 13.6183 18.3067 13.6183 19.032C13.6183 19.5867 13.8423 20.024 14.2903 20.344C14.7383 20.6427 15.3143 20.8773 16.0183 21.048C16.7436 21.2187 17.5009 21.3893 18.2903 21.56C19.1009 21.7093 19.8583 21.9333 20.5623 22.232C21.2876 22.5093 21.8743 22.9253 22.3223 23.48C22.7703 24.0133 22.9943 24.7493 22.9943 25.688C22.9943 26.8613 22.6636 27.864 22.0023 28.696C21.3623 29.5067 20.4556 30.1253 19.2823 30.552C18.1089 30.9787 16.7543 31.192 15.2183 31.192ZM29.9695 31.192C28.5402 31.192 27.1855 31.0107 25.9055 30.648C24.6468 30.264 23.6762 29.7947 22.9935 29.24L24.3695 26.808C25.0308 27.32 25.8842 27.736 26.9295 28.056C27.9962 28.376 29.1055 28.536 30.2575 28.536C31.7295 28.536 32.8388 28.312 33.5855 27.864C34.3322 27.416 34.7055 26.808 34.7055 26.04C34.7055 25.4853 34.4815 25.0693 34.0335 24.792C33.5855 24.4933 32.9988 24.2693 32.2735 24.12C31.5695 23.9493 30.8122 23.7893 30.0015 23.64C29.1908 23.4693 28.4335 23.2347 27.7295 22.936C27.0255 22.6373 26.4388 22.2107 25.9695 21.656C25.5215 21.08 25.2975 20.3227 25.2975 19.384C25.2975 18.2533 25.6175 17.2827 26.2575 16.472C26.8975 15.64 27.7935 15 28.9455 14.552C30.0975 14.104 31.4415 13.88 32.9775 13.88C34.0868 13.88 35.1748 14.0187 36.2415 14.296C37.3295 14.552 38.2148 14.9253 38.8975 15.416L37.6815 17.848C36.9775 17.3573 36.1882 17.016 35.3135 16.824C34.4388 16.6107 33.5642 16.504 32.6895 16.504C31.2602 16.504 30.1828 16.7493 29.4575 17.24C28.7322 17.7093 28.3695 18.3067 28.3695 19.032C28.3695 19.5867 28.5935 20.024 29.0415 20.344C29.4895 20.6427 30.0655 20.8773 30.7695 21.048C31.4948 21.2187 32.2522 21.3893 33.0415 21.56C33.8522 21.7093 34.6095 21.9333 35.3135 22.232C36.0388 22.5093 36.6255 22.9253 37.0735 23.48C37.5215 24.0133 37.7455 24.7493 37.7455 25.688C37.7455 26.8613 37.4148 27.864 36.7535 28.696C36.1135 29.5067 35.2068 30.1253 34.0335 30.552C32.8602 30.9787 31.5055 31.192 29.9695 31.192ZM46.5767 31.192C45.1261 31.192 43.8994 30.8933 42.8967 30.296C41.9154 29.6987 41.2221 28.8347 40.8168 27.704C40.4114 26.552 40.3688 25.1653 40.6888 23.544L42.5768 14.04H45.6488L43.7608 23.576C43.4621 25.0907 43.6114 26.2853 44.2088 27.16C44.8274 28.0133 45.9154 28.44 47.4728 28.44C49.0728 28.44 50.4168 27.992 51.5048 27.096C52.5928 26.2 53.3181 24.8453 53.6808 23.032L55.4728 14.04H58.5448L55.1848 31H52.2408L53.2008 26.136L53.7448 27.448C52.9554 28.728 51.9314 29.6773 50.6728 30.296C49.4354 30.8933 48.0701 31.192 46.5767 31.192ZM67.849 31.192C66.185 31.192 64.745 30.8933 63.529 30.296C62.313 29.6773 61.3743 28.824 60.713 27.736C60.0517 26.6267 59.721 25.3253 59.721 23.832C59.721 21.912 60.137 20.2053 60.969 18.712C61.801 17.2187 62.9317 16.0453 64.361 15.192C65.8117 14.3173 67.4543 13.88 69.289 13.88C70.825 13.88 72.1583 14.1787 73.289 14.776C74.4197 15.352 75.2943 16.184 75.913 17.272C76.553 18.36 76.873 19.672 76.873 21.208C76.873 21.592 76.8517 21.9867 76.809 22.392C76.7663 22.776 76.713 23.1387 76.649 23.48H61.961L62.345 21.24H75.177L73.929 22.008C74.121 20.8133 74.0357 19.8107 73.673 19C73.3103 18.168 72.7343 17.5387 71.945 17.112C71.177 16.664 70.249 16.44 69.161 16.44C67.881 16.44 66.7503 16.7493 65.769 17.368C64.809 17.9653 64.0623 18.808 63.529 19.896C62.9957 20.9627 62.729 22.2213 62.729 23.672C62.729 25.208 63.1663 26.4027 64.041 27.256C64.937 28.088 66.2917 28.504 68.105 28.504C69.1717 28.504 70.1637 28.3333 71.081 27.992C71.9983 27.6293 72.7557 27.1493 73.353 26.552L74.665 28.76C73.8543 29.5493 72.841 30.1573 71.625 30.584C70.409 30.9893 69.1503 31.192 67.849 31.192ZM90.2133 31L94.1173 11.384H86.4692L87.0132 8.6H105.541L104.965 11.384H97.3173L93.3813 31H90.2133ZM102.444 31L105.804 14.04H108.748L107.788 18.968L107.468 17.752C108.258 16.3227 109.26 15.32 110.476 14.744C111.692 14.168 113.196 13.88 114.988 13.88L114.412 16.856C114.284 16.8347 114.156 16.824 114.028 16.824C113.9 16.824 113.762 16.824 113.612 16.824C111.927 16.824 110.53 17.2827 109.42 18.2C108.332 19.1173 107.596 20.5573 107.212 22.52L105.516 31H102.444ZM121.37 31.192C119.941 31.192 118.661 30.904 117.53 30.328C116.4 29.7307 115.504 28.888 114.842 27.8C114.202 26.712 113.882 25.4 113.882 23.864C113.882 22.4133 114.117 21.08 114.586 19.864C115.077 18.648 115.749 17.592 116.602 16.696C117.477 15.8 118.501 15.1067 119.674 14.616C120.848 14.1253 122.117 13.88 123.482 13.88C124.954 13.88 126.202 14.136 127.226 14.648C128.25 15.16 129.04 15.9173 129.594 16.92C130.149 17.9013 130.426 19.1067 130.426 20.536C130.426 22.6267 130.064 24.4827 129.338 26.104C128.613 27.704 127.568 28.952 126.202 29.848C124.858 30.744 123.248 31.192 121.37 31.192ZM122.042 28.504C123.322 28.504 124.464 28.1947 125.466 27.576C126.469 26.9573 127.248 26.1147 127.802 25.048C128.378 23.96 128.666 22.7227 128.666 21.336C128.666 19.8427 128.229 18.68 127.354 17.848C126.48 16.9947 125.232 16.568 123.61 16.568C122.352 16.568 121.221 16.8773 120.218 17.496C119.216 18.0933 118.426 18.936 117.85 20.024C117.274 21.0907 116.986 22.328 116.986 23.736C116.986 25.208 117.424 26.3707 118.298 27.224C119.173 28.0773 120.421 28.504 122.042 28.504ZM126.938 31L127.834 26.616L128.858 22.68L129.274 18.648L130.17 14.04H133.242L129.882 31H126.938ZM142.479 31.192C140.836 31.192 139.407 30.8933 138.191 30.296C136.996 29.6773 136.068 28.824 135.407 27.736C134.745 26.6267 134.415 25.336 134.415 23.864C134.415 21.944 134.841 20.2373 135.695 18.744C136.548 17.2293 137.732 16.0453 139.247 15.192C140.761 14.3173 142.479 13.88 144.399 13.88C146.041 13.88 147.449 14.1893 148.623 14.808C149.796 15.4053 150.713 16.3227 151.375 17.56L148.783 19C148.356 18.168 147.748 17.56 146.959 17.176C146.191 16.7707 145.263 16.568 144.175 16.568C142.895 16.568 141.753 16.8773 140.751 17.496C139.748 18.0933 138.959 18.936 138.383 20.024C137.807 21.0907 137.519 22.328 137.519 23.736C137.519 25.208 137.956 26.3707 138.831 27.224C139.727 28.0773 140.985 28.504 142.607 28.504C143.609 28.504 144.548 28.3013 145.423 27.896C146.319 27.4907 147.065 26.8933 147.663 26.104L149.903 27.704C149.135 28.792 148.089 29.6453 146.767 30.264C145.444 30.8827 144.015 31.192 142.479 31.192ZM154.621 26.712L155.261 22.968L166.557 14.04H170.877L161.405 21.496L159.773 22.712L154.621 26.712ZM151.229 31L155.965 7.256H159.037L154.301 31H151.229ZM164.317 31L159.261 22.744L161.341 20.408L167.869 31H164.317ZM176.733 31.192C175.069 31.192 173.629 30.8933 172.413 30.296C171.197 29.6773 170.258 28.824 169.597 27.736C168.935 26.6267 168.605 25.3253 168.605 23.832C168.605 21.912 169.021 20.2053 169.853 18.712C170.685 17.2187 171.815 16.0453 173.245 15.192C174.695 14.3173 176.338 13.88 178.173 13.88C179.709 13.88 181.042 14.1787 182.173 14.776C183.303 15.352 184.178 16.184 184.797 17.272C185.437 18.36 185.757 19.672 185.757 21.208C185.757 21.592 185.735 21.9867 185.693 22.392C185.65 22.776 185.597 23.1387 185.533 23.48H170.845L171.229 21.24H184.061L182.813 22.008C183.005 20.8133 182.919 19.8107 182.557 19C182.194 18.168 181.618 17.5387 180.829 17.112C180.061 16.664 179.133 16.44 178.045 16.44C176.765 16.44 175.634 16.7493 174.653 17.368C173.693 17.9653 172.946 18.808 172.413 19.896C171.879 20.9627 171.613 22.2213 171.613 23.672C171.613 25.208 172.05 26.4027 172.925 27.256C173.821 28.088 175.175 28.504 176.989 28.504C178.055 28.504 179.047 28.3333 179.965 27.992C180.882 27.6293 181.639 27.1493 182.237 26.552L183.549 28.76C182.738 29.5493 181.725 30.1573 180.509 30.584C179.293 30.9893 178.034 31.192 176.733 31.192ZM186.919 31L190.279 14.04H193.223L192.263 18.968L191.943 17.752C192.733 16.3227 193.735 15.32 194.951 14.744C196.167 14.168 197.671 13.88 199.463 13.88L198.887 16.856C198.759 16.8347 198.631 16.824 198.503 16.824C198.375 16.824 198.237 16.824 198.087 16.824C196.402 16.824 195.005 17.2827 193.895 18.2C192.807 19.1173 192.071 20.5573 191.687 22.52L189.991 31H186.919Z"
        fill="#14142B"
      />
    </svg>
  );
};
