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
      {title && <h2 className="type-section-title text-slate-900 dark:text-slate-100 transition-colors duration-200">{title}</h2>}
      {subtitle && (
        <p className="type-body text-slate-600 dark:text-slate-400 transition-colors duration-200">
          {subtitle}
        </p>
      )}
    </div>
  );
}
