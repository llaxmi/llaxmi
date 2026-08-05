import { motion, useReducedMotion } from "framer-motion";

interface RevealTextProps {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "p";
  delay?: number;
}

const RevealText = ({
  lines,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: RevealTextProps) => {
  const reduce = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduce ? { opacity: 0 } : { y: "100%" }}
            whileInView={reduce ? { opacity: 1 } : { y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={
              reduce
                ? { duration: 0.2, delay: 0 }
                : {
                    duration: 0.9,
                    delay: delay + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default RevealText;
