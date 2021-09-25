import * as React from "react";

function Devices(props) {
  return (
    <svg
      width={21}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 1.625h15.75V0H3.5c-.962 0-1.75.731-1.75 1.625v8.938H0V13h12.25v-2.438H3.5V1.626zM20.125 3.25h-5.25c-.481 0-.875.366-.875.813v8.125c0 .446.394.812.875.812h5.25c.481 0 .875-.366.875-.813V4.063c0-.447-.394-.813-.875-.813zm-.875 7.313h-3.5V4.875h3.5v5.688z"
        fill="#535353"
      />
    </svg>
  );
}

export default Devices;