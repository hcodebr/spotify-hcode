import * as React from "react";

function Repeat(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.667 4.667h6.666v2L14 4l-2.667-2.667v2h-8v4h1.334V4.667zm6.666 6.666H4.667v-2L2 12l2.667 2.667v-2h8v-4h-1.334v2.666z"
        fill="#707070"
      />
    </svg>
  );
}

export default Repeat;