import React from "react";

interface ShieldIconProps {
  className?: string;
}

const ShieldIcon: React.FC<ShieldIconProps> = ({ className }) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // ✅ apply className here
    >
      <rect x="0.959839" width="32" height="32" rx="4" fill="#DBECFA" />
      <path
        d="M24.9598 17C24.9598 22 21.4598 24.5 17.2998 25.95C17.082 26.0238 16.8454 26.0203 16.6298 25.94C12.4598 24.5 8.95984 22 8.95984 17V10C8.95984 9.73481 9.0652 9.48045 9.25273 9.29292C9.44027 9.10538 9.69462 9.00002 9.95984 9.00002C11.9598 9.00002 14.4598 7.80002 16.1998 6.28002C16.4117 6.09902 16.6812 5.99957 16.9598 5.99957C17.2385 5.99957 17.508 6.09902 17.7198 6.28002C19.4698 7.81002 21.9598 9.00002 23.9598 9.00002C24.2251 9.00002 24.4794 9.10538 24.6669 9.29292C24.8545 9.48045 24.9598 9.73481 24.9598 10V17Z"
        stroke="#1679CA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldIcon;
