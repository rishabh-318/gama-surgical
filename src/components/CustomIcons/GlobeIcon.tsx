import React from "react";

interface GlobeIconProps {
  className?: string;
  size?: number;
}

const GlobeIcon: React.FC<GlobeIconProps> = ({ className = "", size = 48 }) => {
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
        fill="url(#paint0_linear_23_1414)"
      />
      <path
        d="M24.2998 34C29.8227 34 34.2998 29.5228 34.2998 24C34.2998 18.4772 29.8227 14 24.2998 14C18.777 14 14.2998 18.4772 14.2998 24C14.2998 29.5228 18.777 34 24.2998 34Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.2998 14C21.732 16.6962 20.2998 20.2767 20.2998 24C20.2998 27.7233 21.732 31.3038 24.2998 34C26.8676 31.3038 28.2998 27.7233 28.2998 24C28.2998 20.2767 26.8676 16.6962 24.2998 14Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2998 24H34.2998"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_23_1414"
          x1="10.3818"
          y1="-63.0764"
          x2="64.6671"
          y2="-54.3995"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16A249" />
          <stop offset="1" stopColor="#06E04F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GlobeIcon;
