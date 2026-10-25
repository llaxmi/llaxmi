import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import meImage from "../assets/me.jpeg";
import RevealText from "../components/primitives/RevealText";
import SketchFrame from "../components/SketchFrame";

// The skyline north of Pokhara. Drawn once in a 1200×120 box and stretched to the page width.
const RIDGE =
  "M0 110 L60 98 L120 104 L190 86 L250 94 L320 72 L380 82 L450 60 L510 70 L580 48 L640 58 L700 34 L745 46 L790 6 L812 24 L828 10 L870 52 L920 44 L980 66 L1040 58 L1100 80 L1150 74 L1200 90";

const Ridge = () => (
  <div className="text-body" aria-hidden>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="block h-[clamp(56px,9vw,120px)] w-full"
    >
      <path d={`${RIDGE} L1200 120 L0 120 Z`} fill="rgb(var(--flag-blue-rgb) / 0.07)" />
      <path
        d={RIDGE}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </div>
);

const Home = () => {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-[100dvh] flex-col overflow-hidden pt-[84px]">
      <div className="mx-auto grid w-full max-w-shell flex-1 grid-cols-1 items-center gap-x-8 gap-y-14 px-gutter py-12 md:grid-cols-12 md:py-16">
        <div className="relative md:col-span-7">
          <span
            aria-hidden
            lang="ne"
            className="pointer-events-none absolute -top-[0.35em] left-[-0.05em] select-none whitespace-nowrap font-deva text-[clamp(7rem,20vw,19rem)] leading-none text-flag-blue/[0.09]"
          >
            लक्ष्मी
          </span>

          <RevealText
            as="h1"
            lines={["Laxmi", "Lamichhane"]}
            delay={0.15}
            className="relative font-display text-display font-extrabold leading-[0.82] tracking-[-0.02em] text-body [font-stretch:75%]"
          />

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative mt-8 max-w-[34ch] text-step-1 leading-snug text-muted"
          >
            I&apos;m a full-stack engineer from Pokhara, Nepal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Link
              to="work"
              href="#work"
              smooth={!reduce}
              duration={reduce ? 0 : 600}
              offset={-84}
              className="group inline-flex min-h-[48px] cursor-pointer items-center gap-3 rounded-full bg-body px-6 py-3 text-step-0 font-semibold text-surface transition-colors hover:bg-flag-blue"
            >
              See my work
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden
              />
            </Link>

            <p className="inline-flex items-center gap-2 text-step-0 font-medium text-body">
              <span aria-hidden className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-flag-green/60 motion-reduce:hidden" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-flag-green" />
              </span>
              Available for work
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto w-[85%] max-w-[20rem] md:col-span-5 md:w-full md:mr-0 md:max-w-[24rem]">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -40, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: 2.5 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 90, damping: 12 }}
          >
            <SketchFrame className="text-body">
              <div className="bg-white p-3">
                <img
                  src={meImage}
                  alt="Laxmi Lamichhane"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </SketchFrame>
          </motion.div>

          <motion.p
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute -bottom-12 -left-4 flex items-end gap-1 font-hand text-step-2 leading-none text-accent-text md:-left-20"
          >
            <span className="-rotate-3">hi, that&apos;s me!</span>
            <svg viewBox="0 0 60 40" className="mb-3 h-8 w-12" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              <path d="M4 34 C 18 30, 36 22, 52 8" />
              <path d="M40 8 L52 8 L50 20" />
            </svg>
          </motion.p>
        </div>
      </div>

      <Ridge />
    </section>
  );
};

export default Home;
