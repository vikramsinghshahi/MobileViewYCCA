export default function Plus(props) {
  const { width, height } = props;
  return (
    <svg
      width={width || '15'}
      height={height || '15'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1597883482">
        <line
          id="Line 69"
          x1="11"
          y1="4.37115e-08"
          x2="11"
          y2="20"
          stroke="black"
          stroke-width="2"
        />
        <line
          id="Line 70"
          x1="20"
          y1="10"
          x2="-8.74228e-08"
          y2="10"
          stroke="black"
          stroke-width="2"
        />
      </g>
    </svg>
  );
}
