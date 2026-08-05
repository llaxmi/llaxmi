import { useReducedMotion } from "framer-motion";
import { Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { navigation } from "../constants/data";
import NavOverlay from "./NavOverlay";
import ResumeButton from "./ResumeButton";
import ScrollProgress from "./ScrollProgress";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-rule bg-surface/90 backdrop-blur-sm" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-shell items-center justify-end px-gutter">
          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                // The href keeps this link keyboard accessible.
                href={`#${item.target}`}
                spy
                smooth={!reduce}
                duration={reduce ? 0 : 500}
                offset={-72}
                activeClass="!text-body"
                className="inline-flex min-h-[44px] font-semibold cursor-pointer items-center font-mono text-step--1 uppercase tracking-[0.18em] text-muted transition-colors hover:text-body"
              >
                {item.title}
              </Link>
            ))}
            <ResumeButton />
          </nav>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center text-body md:hidden"
          >
            <Menu size={22} />
          </button>
        </div>

        {scrolled && <ScrollProgress />}
      </header>

      <NavOverlay open={open} onClose={handleClose} />
    </>
  );
};

export default Nav;
