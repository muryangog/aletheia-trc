import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles =
    "type-button inline-flex items-center justify-center rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#48a848] dark:focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "px-3 py-1.5",
    md: "px-5 py-2.5",
    lg: "px-8 py-3.5",
  };

  const variantStyles = {
    primary:
      "bg-[#48a848] hover:bg-[#3d913d] text-white shadow-md hover:shadow-lg focus:ring-[#48a848]",
    secondary:
      "bg-[#0c2448] hover:bg-[#07162b] text-white shadow-md hover:shadow-lg focus:ring-[#0c2448]",
    outline:
      "border border-(--color-border) text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800",
    ghost:
      "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variantStyles[variant] || variantStyles.primary
      } ${className}`}
      {...props}>
      {children}
    </button>
  );
}
