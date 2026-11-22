import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import RevealText from "../components/primitives/RevealText";
import ResumeButton from "../components/ResumeButton";
import PortraitStack from "../components/PortraitStack";

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
            className="relative mt-8 max-w-[40ch] text-step-1 leading-snug text-muted"
          >
            I&apos;m a software engineering graduate from Pokhara, Nepal, interested
            in how we evaluate language-model systems, and how sure we can really be
            about the results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Link
              to="research"
              href="#research"
              smooth={!reduce}
              duration={reduce ? 0 : 600}
              offset={-84}
              className="group inline-flex min-h-[48px] cursor-pointer items-center gap-3 rounded-full bg-body px-6 py-3 text-step-0 font-semibold text-surface transition-colors hover:bg-flag-blue"
            >
              See my research
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden
              />
            </Link>

            <ResumeButton align="left" className="min-h-[48px] px-5" />

           
          </motion.div>
        </div>

        <div className="relative mx-auto mb-16 w-[62%] max-w-[14rem] pr-6 md:col-span-5 md:mb-0 md:mr-8 md:w-full md:max-w-[17rem] lg:mr-16">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -40, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 90, damping: 12 }}
          >
            <PortraitStack />
          </motion.div>
        </div>
      </div>

      <Ridge />
    </section>
  );
};

export default Home;
