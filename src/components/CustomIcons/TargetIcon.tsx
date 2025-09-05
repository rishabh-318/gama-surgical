import React from "react";

interface TargetIconProps {
  className?: string;
  size?: number;
}

const TargetIcon: React.FC<TargetIconProps> = ({
  className = "",
  size = 48,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.299805"
        width="48"
        height="48"
        rx="12"
        fill="url(#paint0_linear_23_1406)"
      />
      <rect
        x="0.299805"
        width="48"
        height="48"
        rx="12"
        fill="url(#paint1_linear_23_1406)"
      />
      <path
        d="M24.2998 34C29.8227 34 34.2998 29.5228 34.2998 24C34.2998 18.4772 29.8227 14 24.2998 14C18.777 14 14.2998 18.4772 14.2998 24C14.2998 29.5228 18.777 34 24.2998 34Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.2998 30C27.6135 30 30.2998 27.3137 30.2998 24C30.2998 20.6863 27.6135 18 24.2998 18C20.9861 18 18.2998 20.6863 18.2998 24C18.2998 27.3137 20.9861 30 24.2998 30Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.2998 26C25.4044 26 26.2998 25.1046 26.2998 24C26.2998 22.8954 25.4044 22 24.2998 22C23.1952 22 22.2998 22.8954 22.2998 24C22.2998 25.1046 23.1952 26 24.2998 26Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_23_1406"
          x1="0.299805"
          y1="0"
          x2="48.2998"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#15ADC1" />
          <stop offset="1" stopColor="#0697E0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_23_1406"
          x1="10.3818"
          y1="-63.0764"
          x2="64.6671"
          y2="-54.3995"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0553AE" />
          <stop offset="1" stopColor="#0697E0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TargetIcon;
