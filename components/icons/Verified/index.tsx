import React from 'react';

function Verified({ color = '#2E77D0' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 26 26"
    >
      <path
        fill={color}
        d="M13 0l2.784 3.52 4.244-1.456.439 4.466 4.358 1.07-2.046 3.994 3.089 3.256-3.88 2.254.837 4.41-4.483-.202-1.68 4.161L13 22.88l-3.663 2.593-1.679-4.161-4.483.201.838-4.409-3.88-2.254 3.088-3.256L1.175 7.6l4.358-1.07.439-4.466 4.244 1.456L13 0z"
      ></path>
      <path
        fill="#fff"
        stroke="#fff"
        d="M11 15l-3-1.5 3 3.5 6.5-8-6.5 6z"
      ></path>
    </svg>
  );
}

export default Verified;
