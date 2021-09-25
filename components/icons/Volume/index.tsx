import * as React from "react";

function Volume(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 5.263v5.474h3.556L8 15.297V.703L3.556 5.263H0zm6.222-.155v5.784l-1.929-1.98H1.778V7.088h2.515l1.93-1.98zM12 8a4.117 4.117 0 00-2.222-3.676v7.343A4.092 4.092 0 0012 8zM9.778 0v1.88c2.569.784 4.444 3.228 4.444 6.12s-1.875 5.336-4.444 6.12V16C13.342 15.17 16 11.904 16 8S13.342.83 9.778 0z"
        fill="#535353"
      />
    </svg>
  );
}

export default Volume;