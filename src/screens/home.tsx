import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import meImage from "../assets/me.jpeg";
import RevealText from "../components/primitives/RevealText";

const Home = () => {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative border-b border-rule">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(260px,34%)_1fr] md:min-h-[100dvh]">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group relative order-2 aspect-[4/5] w-full overflow-hidden bg-surface-2 md:order-1 md:aspect-auto md:h-full"
        >
          <img
            src={meImage}
            alt="Laxmi Lamichhane"
            width={800}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-body/90 px-4 py-3 md:px-6">
            <span className="font-mono text-step--1 uppercase tracking-[0.18em] text-surface">
              Fig. 01 — the author
            </span>
            <span className="font-mono text-step--1 uppercase tracking-[0.18em] text-surface">
              Pokhara, Nepal
            </span>
          </div>
        </motion.div>

        <div className="order-1 flex flex-col justify-center gap-8 px-gutter pb-16 pt-28 md:order-2 md:px-12 md:py-0 lg:px-16">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span aria-hidden className="h-px w-8 bg-accent" />
            <span className="font-mono text-step--1 uppercase tracking-[0.18em] text-accent-text">
              Software Engineer
            </span>
          </motion.div>

          <RevealText
            as="h1"
            lines={["Laxmi", "Lamichhane"]}
            delay={0.2}
            className="font-display text-display font-extrabold leading-[0.85] tracking-[-0.03em] text-body"
          />

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="measure text-step-1 text-muted"
          >
            I build interfaces that feel considered — fast, accessible, and
            thought through down to the last hairline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="work"
              smooth={!reduce}
              duration={reduce ? 0 : 600}
              offset={-72}
              className="group inline-flex min-h-[44px] cursor-pointer items-center gap-3 bg-body px-6 py-3 font-mono text-step--1 uppercase tracking-[0.18em] text-surface transition-opacity hover:opacity-80"
            >
              See the work
              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-1"
                aria-hidden
              />
            </Link>

            <p className="inline-flex items-center gap-2 border-2 border-accent px-3 py-2 font-mono text-step--1 uppercase tracking-[0.18em] text-accent-text">
              <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
              Available for work
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
