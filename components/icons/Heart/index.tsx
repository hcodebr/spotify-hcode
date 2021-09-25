import * as React from "react";

function Heart(props) {
  return (
    <svg
      width={14}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 13l-1.015-.935C2.38 8.756 0 6.575 0 3.896 0 1.714 1.694 0 3.85 0 5.068 0 6.237.574 7 1.48A4.172 4.172 0 0110.15 0C12.306 0 14 1.714 14 3.896c0 2.678-2.38 4.86-5.985 8.176L7 13z"
        fill="#1DB954"
      />
    </svg>
  );
}

export default Heart;