import * as React from "react";

function Random(props) {
  return (
    <svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.942 3.877L1.058 0 0 1.058l3.877 3.877 1.066-1.057zM7.875 0l1.53 1.53L0 10.943 1.058 12l9.412-9.405L12 4.125V0H7.875zm.248 7.058L7.065 8.114l2.347 2.348L7.875 12H12V7.875l-1.53 1.53-2.348-2.347z"
        fill="#535353"
      />
    </svg>
  );
}

export default Random;