import React from "react";

export default function Spinner({ size = "md", className = "" }) {
  const sizeMap = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
  };

  return (
    <div
      className={`rounded-full border-[#48a848] border-t-transparent animate-spin ${
        sizeMap[size] || sizeMap.md
      } ${className}`}
      role="status"
      aria-label="Chargement..."
    />
  );
}
