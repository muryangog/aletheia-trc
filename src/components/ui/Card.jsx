import React from "react";

export default function Card({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200 ${
        hover ? "hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200" : ""
      } ${className}`}
      {...props}>
      {children}
    </div>
  );
}
