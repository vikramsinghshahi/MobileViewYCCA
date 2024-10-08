export default function SendChat(props) {
  const { width, height } = props;
  return (
    <svg
      width={width || '30'}
      height={height || '30'}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="send" clip-path="url(#clip0_99_5621)">
        <path
          id="Vector"
          d="M4.25 25.4999L26.0625 16.1499C27.075 15.7124 27.075 14.2874 26.0625 13.8499L4.25 4.4999C3.425 4.1374 2.5125 4.7499 2.5125 5.6374L2.5 11.3999C2.5 12.0249 2.9625 12.5624 3.5875 12.6374L21.25 14.9999L3.5875 17.3499C2.9625 17.4374 2.5 17.9749 2.5 18.5999L2.5125 24.3624C2.5125 25.2499 3.425 25.8624 4.25 25.4999Z"
          fill="#EB261E"
        />
      </g>
      <defs>
        <clipPath id="clip0_99_5621">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
