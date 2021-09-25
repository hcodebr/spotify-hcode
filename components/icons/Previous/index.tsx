import * as React from "react";

function Previous(props) {
  return (
    <svg
      width={10}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h1.667v10H0V0zm2.917 5L10 10V0L2.917 5z" fill="#535353" />
    </svg>
  );
}

export default Previous;