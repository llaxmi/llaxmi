import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { navigation } from "../constants/data";
import ResumeButton from "./ResumeButton";

interface NavOverlayProps {
  open: boolean;
  onClose: () => void;
}

const NavOverlay = ({ open, onClose }: NavOverlayProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Close the mobile menu when the desktop layout becomes active.
  useEffect(() => {
    if (!open) return;

    const mql = window.matchMedia("(min-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) onClose();
    };

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

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
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-surface px-gutter py-6 md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-step--1 uppercase tracking-[0.18em] text-muted">
              Menu
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="flex h-11 w-11 items-center justify-center text-body"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-1">
            {navigation.map((item, i) => (
              <motion.div
                key={item.target}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={item.target}
                  // The href keeps this link keyboard accessible.
                  href={`#${item.target}`}
                  smooth={!reduce}
                  duration={reduce ? 0 : 500}
                  offset={-72}
                  onClick={onClose}
                  className="block cursor-pointer py-3 font-display text-step-4 leading-none text-body"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <ResumeButton label="Download CV" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavOverlay;
