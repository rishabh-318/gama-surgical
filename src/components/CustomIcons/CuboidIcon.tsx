import React from "react";

const CuboidIcon = (props: { textColor?: string }) => {
  const txtclr = props.textColor ? props.textColor : "white";
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${txtclr}`}
    >
      <path
        d="M7.38398 14.4867C7.58667 14.6037 7.8166 14.6653 8.05064 14.6653C8.28469 14.6653 8.51462 14.6037 8.71731 14.4867L13.384 11.82C13.5865 11.7031 13.7547 11.535 13.8717 11.3326C13.9887 11.1301 14.0504 10.9005 14.0506 10.6667V5.33335C14.0504 5.09953 13.9887 4.86989 13.8717 4.66746C13.7547 4.46503 13.5865 4.29692 13.384 4.18002L8.71731 1.51335C8.51462 1.39633 8.28469 1.33472 8.05064 1.33472C7.8166 1.33472 7.58667 1.39633 7.38398 1.51335L2.71731 4.18002C2.51482 4.29692 2.34663 4.46503 2.22962 4.66746C2.11261 4.86989 2.05088 5.09953 2.05064 5.33335V10.6667C2.05088 10.9005 2.11261 11.1301 2.22962 11.3326C2.34663 11.535 2.51482 11.7031 2.71731 11.82L7.38398 14.4867Z"
        stroke={txtclr}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.05064 14.6667V8"
        stroke={txtclr}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25064 4.66669L7.38597 7.82269C7.58819 7.93897 7.81737 8.00017 8.05064 8.00017C8.28391 8.00017 8.51309 7.93897 8.71531 7.82269L13.8506 4.66669"
        stroke={txtclr}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.05064 2.84668L11.0506 6.28001"
        stroke={txtclr}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CuboidIcon;
