import React from "react";

interface BadgeIconProps {
  className?: string;
  bgcolr?: string;
  textColor?: string;
}

const BadgeIcon: React.FC<BadgeIconProps> = ({
  className,
  bgcolr,
  textColor,
}) => {
  const bgColor = bgcolr ? bgcolr : "#DBECFA";
  const textcolr = textColor ? textColor : "#1679CA";
  return (
    <svg
      width="34"
      height="33"
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}+text-${textcolr}`}
    >
      <rect x="0.569855" width="34" height="33" rx="4" fill={bgColor} />
      <path
        d="M20.0469 16.89L21.5619 25.416C21.5788 25.5164 21.5647 25.6196 21.5215 25.7118C21.4782 25.8039 21.4078 25.8807 21.3198 25.9318C21.2317 25.9829 21.1301 26.0059 21.0287 25.9977C20.9272 25.9895 20.8306 25.9506 20.7518 25.886L17.1719 23.199C16.999 23.0699 16.7891 23.0001 16.5734 23.0001C16.3576 23.0001 16.1477 23.0699 15.9749 23.199L12.3889 25.885C12.3102 25.9494 12.2137 25.9884 12.1123 25.9966C12.011 26.0048 11.9095 25.9818 11.8215 25.9309C11.7335 25.8799 11.6631 25.8033 11.6198 25.7113C11.5764 25.6194 11.5621 25.5163 11.5789 25.416L13.0929 16.89"
        // stroke="#1679CA"
        stroke={textcolr}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5699 18C19.8836 18 22.5699 15.3137 22.5699 12C22.5699 8.68629 19.8836 6 16.5699 6C13.2561 6 10.5699 8.68629 10.5699 12C10.5699 15.3137 13.2561 18 16.5699 18Z"
        stroke={textcolr}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BadgeIcon;
