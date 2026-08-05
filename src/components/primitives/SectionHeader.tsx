import { motion, useReducedMotion } from "framer-motion";

interface SectionHeaderProps {
  id: string;
  index: string;
  title: string;
  description?: string;
}

// The section number is decorative, so screen readers use only the heading.
const SectionHeader = ({ id, index, title, description }: SectionHeaderProps) => {
  const reduce = useReducedMotion();

  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-end gap-4 md:gap-6">
        <span
          aria-hidden="true"
          className="font-display text-step-4 font-bold leading-none text-accent-text"
        >
          {index}
        </span>
        <h2
          id={id}
          className="font-display text-step-2 font-bold uppercase leading-none tracking-[-0.02em] text-body md:text-step-3"
        >
          {title}
        </h2>
      </div>

      <motion.div
        className="mt-6 h-[2px] w-full origin-left bg-accent"
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={reduce ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {description && (
        <p className="measure mt-6 text-step-1 text-muted">{description}</p>
      )}
    </header>
  );
};

export default SectionHeader;
