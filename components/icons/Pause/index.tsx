import * as React from "react";

function Pause(props) {
  return (
    <svg
      width={12}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 14h4V0H0v14zM8 0v14h4V0H8z" fill="#000" />
    </svg>
  );
}

export default Pause;