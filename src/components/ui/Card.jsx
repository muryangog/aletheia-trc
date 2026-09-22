import React from "react";

export default function Card({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <div
      className={`bg-(--color-surface) rounded-4xl border border-(--color-border) shadow-sm ${
        hover ? "hover:shadow-lg transition-shadow duration-150" : ""
      } ${className}`}
      {...props}>
      {children}
    </div>
  );
}
