import React from "react";

export default function Drawer({
  open,
  title,
  onClose,
  children,
  footer = null,
  wide = false,
}) {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />
      <aside
        className={`fixed z-50 flex flex-col inset-0 sm:inset-y-0 sm:right-0 ${
          wide ? "sm:w-[720px]" : "sm:w-[520px]"
        }`}
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <div
          className="px-4 py-3 border-b flex items-center justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="font-semibold">{title}</div>
          <button className="btn-ghost text-sm" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">{children}</div>
        {footer && (
          <div
            className="px-4 py-3 border-t flex gap-2 justify-end"
            style={{ borderColor: "var(--border)" }}
          >
            {footer}
          </div>
        )}
      </aside>
    </>
  );
}
