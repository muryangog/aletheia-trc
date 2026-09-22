import React from "react";
import Badge from "./Badge";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}) {
  return (
    <div
      className={`space-y-3 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-xl"
      } ${className}`}>
      {badge && <Badge>{badge}</Badge>}
      {title && <h2 className="type-section-title">{title}</h2>}
      {subtitle && (
        <p className="type-body text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
