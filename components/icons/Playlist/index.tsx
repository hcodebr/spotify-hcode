import * as React from "react";

function Playlist(props) {
  return (
    <svg
      width={19}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 4H0v2h11V4zM11 0H0v2h11V0zM7 8H0v2h7V8zM13 7v8l6-4-6-4z"
        fill="#535353"
      />
    </svg>
  );
}

export default Playlist;