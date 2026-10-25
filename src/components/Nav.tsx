import { useReducedMotion } from "framer-motion";
import { Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { navigation } from "../constants/data";
import { FRAYED, flagStyles } from "./primitives/Flag";
import NavOverlay from "./NavOverlay";
import ResumeButton from "./ResumeButton";
import ScrollProgress from "./ScrollProgress";

// The string sags by this many px at its middle. The same curve places each
// flag, so the flags hang from the string rather than floating near it.
const STRING_TOP = 4;
const SAG = 8;
const stringY = (t: number) => STRING_TOP + 4 * SAG * t * (1 - t);

// A small tilt per flag so the string reads as cloth, not a button row.
const TILTS = [-3, 2, -1.5, 2.5, -2, 1.5];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // The flag under the pointer. It and its neighbours flutter, as if a gust
  // caught that part of the string.
  const [gust, setGust] = useState<number | null>(null);
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
        <div className="mx-auto flex h-[84px] max-w-shell items-center justify-between gap-6 px-gutter">
          <Link
            to="home"
            href="#home"
            smooth={!reduce}
            duration={reduce ? 0 : 500}
            className="cursor-pointer font-display text-step-1 font-extrabold tracking-[-0.03em] text-body [font-stretch:80%]"
          >
            laxmi<span className="text-accent">.</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <nav aria-label="Sections" className="relative flex gap-2 self-start pt-[14px] lg:gap-3">
              <svg
                aria-hidden
                viewBox="0 0 100 24"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -inset-x-3 top-[14px] h-6 w-[calc(100%+1.5rem)] text-body"
              >
                <path
                  d={`M0 ${STRING_TOP} Q50 ${STRING_TOP + 4 * SAG} 100 ${STRING_TOP}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {navigation.map((item, i) => {
                const t = (i + 0.5) / navigation.length;
                const distance = gust === null ? Infinity : Math.abs(i - gust);
                return (
                  <span
                    key={item.target}
                    onMouseEnter={() => setGust(i)}
                    onMouseLeave={() => setGust(null)}
                    className={`relative ${distance <= 1 ? "animate-flutter" : ""}`}
                    style={{
                      marginTop: stringY(t) - 3,
                      ["--gust" as string]: distance === 0 ? 1 : 0.45,
                      ["--gust-delay" as string]: `${distance * 90}ms`,
                    }}
                  >
                    <Link
                      to={item.target}
                      // The href keeps this link keyboard accessible.
                      href={`#${item.target}`}
                      spy
                      smooth={!reduce}
                      duration={reduce ? 0 : 500}
                      offset={-84}
                      activeClass="is-active"
                      className={`block origin-top cursor-pointer px-3 pb-4 pt-2 text-[0.8rem] font-semibold leading-none transition-transform duration-300 ease-out hover:translate-y-0.5 [&.is-active]:translate-y-1.5 [&.is-active]:scale-110 ${flagStyles[item.flag]}`}
                      style={{ clipPath: FRAYED, rotate: `${TILTS[i % TILTS.length]}deg` }}
                    >
                      {item.title}
                    </Link>
                  </span>
                );
              })}
            </nav>

            <ResumeButton />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* The same string in miniature, without labels. */}
            <span aria-hidden className="flex gap-1 border-t-[1.5px] border-body pt-0">
              {navigation.slice(0, 5).map((item, i) => (
                <span
                  key={item.target}
                  className={`h-5 w-4 ${flagStyles[item.flag]}`}
                  style={{ clipPath: FRAYED, rotate: `${TILTS[i]}deg` }}
                />
              ))}
            </span>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center text-body"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {scrolled && <ScrollProgress />}
      </header>

      <NavOverlay open={open} onClose={handleClose} />
    </>
  );
};

export default Nav;
