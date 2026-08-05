import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Achievement } from "../constants/data";
import MonoLabel from "./primitives/MonoLabel";

interface LightboxProps {
  item: Achievement | null;
  onClose: () => void;
}

const Lightbox = ({ item, onClose }: LightboxProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!item) return;

    const focusFirst = () => {
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      focusables?.[0]?.focus();
    };

    // Wait for the animated panel to mount before focusing it.
    const raf = requestAnimationFrame(focusFirst);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-body/90 p-gutter"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-full w-full max-w-3xl overflow-y-auto bg-surface"
          >
            <img
              src={item.image}
              alt={`${item.title} certificate`}
              className="w-full object-contain"
            />
            <div className="border-t border-rule p-6">
              <h3 className="font-display text-step-2 font-bold uppercase leading-none text-body">
                {item.title}
              </h3>
              <MonoLabel as="p" className="mt-3 block">
                {item.issuer} — {item.date}
              </MonoLabel>
              <p className="measure mt-4 text-step-0 text-muted">
                {item.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="fixed right-gutter top-gutter flex h-11 w-11 items-center justify-center text-surface"
          >
            <X size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
