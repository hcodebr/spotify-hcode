import * as React from "react";

function Forward(props) {
  return (
    <svg
      width={10}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 10l7.083-5L0 0v10zM8.333 0v10H10V0H8.333z" fill="#535353" />
    </svg>
  );
}

export default Forward;