// components/Button.tsx
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light"
    | "gradient-primary"
    | "gradient-success"
    | "gradient-danger"
    | "gradient-sunset"
    | "gradient-ocean"
    | "gradient-fire"
    | "gradient-purple"
    | "gradient-green"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "ghost"
    | "no-color";
  size?: "sm" | "md" | "lg" | "xl";
  iconPosition?: "left" | "right" | "only";
  icon?: React.ReactNode;
  animation?: "pulse" | "bounce" | "shake" | "none";
  bgColor?: string;
  textColor?: string;
  gradient?: string;
  children?: React.ReactNode;
  loading?: boolean;
  customClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      iconPosition = "left",
      icon,
      animation = "none",
      bgColor,
      textColor,
      gradient,
      children,
      loading = false,
      customClassName = "",
      className,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    // Base button classes
    const baseClasses = `
    inline-flex items-center justify-center
    border-0 rounded-lg font-medium cursor-pointer
    transition-all duration-300 ease-in-out
    relative overflow-hidden whitespace-nowrap
    disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
    
    active:transform active:translate-y-0
  `;

    // Size variants
    const sizeClasses = {
      sm: "px-3 py-2 text-sm min-h-[36px] gap-1.5",
      md: "px-6 py-2 text-base min-h-[44px] gap-2",
      lg: "px-8 py-2 text-lg min-h-[52px] gap-2.5",
      xl: "px-10 py-2 text-xl min-h-[60px] gap-3",
    };

    // Icon only padding adjustments
    const iconOnlyPadding = {
      sm: "p-2 min-w-[36px]",
      md: "p-3 min-w-[44px]",
      lg: "p-4 min-w-[52px]",
      xl: "p-5 min-w-[60px]",
    };

    // Variant classes
    const variantClasses = {
      primary: "bg-blue-600 text-white  ",
      secondary: "bg-[#FE5E0E] text-white bg-[#fe5e0e]/95 ",
      success: "bg-green-600 text-white  ",
      danger: "bg-red-600 text-white  ",
      warning: "bg-yellow-600 text-white  ",
      info: "bg-cyan-600 text-white  ",
      dark: "bg-gray-900 text-white  ",
      light: "bg-gray-100 text-gray-900  ",

      // Gradient variants
      "gradient-primary":
        "bg-gradient-to-br from-purple-600 to-blue-600 text-white  ",
      "gradient-success":
        "bg-gradient-to-br from-blue-500 to-cyan-400 text-white  ",
      "gradient-danger":
        "bg-gradient-to-br from-pink-500 to-yellow-400 text-white  ",
      "gradient-sunset":
        "bg-gradient-to-br from-pink-400 via-purple-300 to-purple-300 text-white  ",
      "gradient-ocean":
        "bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-600 text-white  ",
      "gradient-fire":
        "bg-gradient-to-br from-purple-500 to-pink-600 text-white  ",
      "gradient-purple":
        "bg-gradient-to-br from-purple-500 to-pink-500 text-white  ",
      "gradient-green":
        "bg-gradient-to-br from-teal-500 to-green-500 text-white ",

      // Outline variants
      "outline-primary":
        "bg-transparent text-blue-600 border-2 border-blue-600 outline-[#000]",
      "outline-secondary":
        "bg-transparent text-gray-600 border-2 border-gray-600  outline-[#000]",
      "outline-success":
        "bg-transparent text-green-600 border-2 border-green-600 outline-[#000]",
      "outline-danger":
        "bg-transparent text-red-600 border-2 border-red-600  outline-[#000]",

      // Special variants
      ghost: "bg-transparent text-gray-600 100 ",
      "no-color": "bg-transparent border-0 ",
    };

    // Animation classes
    const animationClasses = {
      pulse: "",
      bounce: "",
      shake: "",
      none: "",
    };

    // Icon size based on button size
    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7",
    };

    // Direction classes based on icon position
    const directionClasses = {
      left: "flex-row",
      right: "flex-row-reverse",
      only: "justify-center",
    };

    // Build custom styles
    const customStyles: React.CSSProperties = {
      ...style,
      ...(bgColor && !gradient && { backgroundColor: bgColor }),
      ...(textColor && { color: textColor }),
      ...(gradient && { background: gradient }),
    };

    // Combine all classes
    const buttonClasses = cn(
      baseClasses,
      iconPosition === "only" ? iconOnlyPadding[size] : sizeClasses[size],
      !bgColor && !gradient ? variantClasses[variant] : "",
      directionClasses[iconPosition],
      animationClasses[animation],
      customClassName,
      className
    );

    // Loading spinner
    const LoadingSpinner = () => (
      <svg
        className={cn("animate-spin", iconSizes[size])}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        style={customStyles}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <LoadingSpinner />
            {iconPosition !== "only" && <span>Loading...</span>}
          </>
        ) : (
          <>
            {icon && iconPosition !== "right" && icon}
            {iconPosition !== "only" && children}
            {icon && iconPosition === "right" && icon}
          </>
        )}
      </button>
    );
  }
);

export default Button;
