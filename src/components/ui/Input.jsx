import React from "react";

export default function Input({
  label,
  error,
  className = "",
  id,
  type = "text",
  ...props
}) {
  const describedBy = error && id ? `${id}-error` : undefined;

  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label
          htmlFor={id}
          className="type-caption block uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`type-body w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48a848]/30 focus:border-[#48a848] transition-colors duration-200 ${
          error ? "border-red-500 focus:border-red-500" : ""
        } ${className}`}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
        {...props}
      />
      {error && (
        <p
          id={describedBy}
          className="type-caption text-red-600 dark:text-red-400 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
