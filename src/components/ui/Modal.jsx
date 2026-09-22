"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = "max-w-3xl",
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    dialogRef.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#071324]/90 flex items-center justify-center p-3 sm:p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Boîte de dialogue"}
        tabIndex={-1}
        className={`bg-(--color-surface) border border-(--color-border) w-full ${maxWidth} rounded-xl overflow-hidden shadow-lg relative flex flex-col max-h-[90vh]`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-slate-100 dark:bg-[#12305a] hover:bg-slate-200 dark:hover:bg-[#294466] rounded-lg text-slate-700 dark:text-white transition-colors duration-150 z-20 outline-none"
          aria-label="Fermer la boîte de dialogue">
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
