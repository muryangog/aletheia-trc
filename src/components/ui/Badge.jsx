import React from "react";

export default function Badge({
  children,
  variant = "green",
  className = "",
  ...props
}) {
  const variantStyles = {
    green:
      "bg-[#48a848]/15 border-[#48a848]/30 text-[#48a848] dark:text-[#6dcc6d]",
    blue: "bg-[#0c2448]/10 dark:bg-white/10 border-[#0c2448]/20 dark:border-white/20 text-[#0c2448] dark:text-white",
    red: "bg-red-500/15 border-red-500/30 text-red-600 dark:text-red-400",
    amber:
      "bg-amber-500/15 border-amber-500/30 text-amber-600 dark:text-amber-400",
  };

  return (
    <span
      className={`type-caption inline-flex items-center gap-1.5 px-3 py-1 rounded-full uppercase tracking-wider border ${
        variantStyles[variant] || variantStyles.green
      } ${className}`}
      {...props}>
      {children}
    </span>
  );
}
