import { ChevronDown, Download } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import academicCv from "../assets/LaxmiLamichhane_Academic_CV.pdf";
import resume from "../assets/LaxmiLamichhane.pdf";

const DOCUMENTS = [
  {
    label: "Academic CV",
    note: "Research, education, teaching",
    href: academicCv,
    filename: "LaxmiLamichhane_Academic_CV.pdf",
  },
  {
    label: "Resume",
    note: "Industry experience and projects",
    href: resume,
    filename: "LaxmiLamichhane_Resume.pdf",
  },
];

const BUTTON =
  "inline-flex min-h-[44px] items-center gap-2 rounded-full border-[1.5px] border-body px-4 text-step--1 font-semibold text-body transition-colors duration-200 hover:bg-body hover:text-surface";

interface ResumeButtonProps {
  label?: string;
  className?: string;
  // Which edge of the button the menu lines up with.
  align?: "left" | "right";
  // Show both downloads side by side instead of behind a menu.
  inline?: boolean;
}

const ResumeButton = ({ label = "Download CV", className = "", align = "right", inline = false }: ResumeButtonProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    // Close when focus moves out of the menu, e.g. tabbing past the last link.
    const onFocusIn = (e: FocusEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [open]);

  if (inline) {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {DOCUMENTS.map((doc) => (
          <a key={doc.label} href={doc.href} download={doc.filename} className={BUTTON}>
            <Download size={14} aria-hidden />
            {doc.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className={`${BUTTON} ${open ? "bg-body text-surface" : ""} ${className}`}
      >
        <Download size={14} aria-hidden />
        {label}
        <ChevronDown
          size={14}
          aria-hidden
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          id={menuId}
          data-surface="paper"
          className={`absolute top-full z-50 mt-2 w-64 rounded-2xl border-[1.5px] border-body bg-white p-1.5 shadow-[4px_4px_0_rgb(var(--body-rgb))] ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {DOCUMENTS.map((doc) => (
            <li key={doc.label}>
              <a
                href={doc.href}
                download={doc.filename}
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-2 focus-visible:bg-surface-2"
              >
                <Download size={16} aria-hidden className="mt-0.5 shrink-0 text-body" />
                <span>
                  <span className="block text-step-0 font-semibold leading-tight text-body">{doc.label}</span>
                  <span className="block text-step--1 leading-snug text-muted">{doc.note}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeButton;
