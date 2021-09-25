import * as React from "react";

function MultiScreen(props) {
  return (
    <svg
      width={16}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={0.5} y={0.5} width={15} height={11} rx={0.5} stroke="#C4C4C4" />
      <path fill="#C4C4C4" d="M10 6h4v3h-4z" />
      <path stroke="#B3B3B3" d="M1 10.5h14" />
    </svg>
  );
}

export default MultiScreen;