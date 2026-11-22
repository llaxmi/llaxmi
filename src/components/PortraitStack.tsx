import { motion } from "framer-motion";
import { useState } from "react";
import illustration from "../assets/laxmi_cartoon.jpg";
import photo from "../assets/laxmi.jpg";
import SketchFrame from "./SketchFrame";

const PORTRAITS = [
  { src: photo, alt: "Laxmi Lamichhane", caption: "hi, that's me!" },
  { src: illustration, alt: "An illustrated portrait of Laxmi", caption: "also me, drawn!" },
] as const;

// Where each print rests: the front one nearly straight, the back one tucked
// up and to the right so a corner of it shows.
const FRONT = { x: "0%", y: "0%", rotate: -2, scale: 1 };
const BACK = { x: "14%", y: "-6%", rotate: 7, scale: 0.94 };

// A shuffle: the front print slides out to the side and is tucked behind,
// while the back one comes forward. The swap in stacking order happens at the
// midpoint, while the prints are apart, so it never shows.
const TIMES = [0, 0.5, 0.5, 1];
const toBack = {
  x: [FRONT.x, "55%", "55%", BACK.x],
  y: [FRONT.y, "-2%", "-2%", BACK.y],
  rotate: [FRONT.rotate, 12, 12, BACK.rotate],
  scale: [FRONT.scale, 0.97, 0.97, BACK.scale],
  zIndex: [2, 2, 1, 1],
};
const toFront = {
  x: [BACK.x, "-16%", "-16%", FRONT.x],
  y: [BACK.y, "-3%", "-3%", FRONT.y],
  rotate: [BACK.rotate, -7, -7, FRONT.rotate],
  scale: [BACK.scale, 0.97, 0.97, FRONT.scale],
  zIndex: [1, 1, 2, 2],
};

interface PortraitStackProps {
  className?: string;
}

/** The photo with an illustrated version tucked behind it; clicking shuffles them. */
const PortraitStack = ({ className = "" }: PortraitStackProps) => {
  const [front, setFront] = useState(0);
  const back = 1 - front;

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setFront(back)}
        aria-label={`Show the ${back === 0 ? "photo" : "illustrated portrait"} instead`}
        className="group relative block aspect-[4/5] w-full cursor-pointer rounded-sm focus-visible:outline-offset-8"
      >
        {PORTRAITS.map((portrait, i) => {
          const isFront = i === front;
          return (
            <motion.div
              key={portrait.alt}
              initial={false}
              animate={isFront ? toFront : toBack}
              transition={{ duration: 0.7, times: TIMES, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* The print behind lifts a little on hover, hinting it can be pulled out. */}
              <div
                className={`h-full transition-transform duration-300 ease-out ${
                  isFront ? "" : "group-hover:-translate-y-2 group-hover:translate-x-2"
                }`}
              >
                <SketchFrame className="h-full text-body">
                  <div className="h-full bg-white p-2.5">
                    <img
                      src={portrait.src}
                      alt={isFront ? portrait.alt : ""}
                      width={700}
                      height={875}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </SketchFrame>
              </div>
            </motion.div>
          );
        })}
      </button>

      <p
        aria-live="polite"
        className="absolute -bottom-[4.75rem] -left-4 flex items-end gap-1 font-hand text-step-1 leading-none text-accent-text md:-left-16"
      >
        <span className="-rotate-3">
          {PORTRAITS[front].caption}
          <span className="mt-1 block text-step-0 text-muted">tap to swap</span>
        </span>
        <svg viewBox="0 0 60 40" className="mb-6 h-8 w-12" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden>
          <path d="M4 34 C 18 30, 36 22, 52 8" />
          <path d="M40 8 L52 8 L50 20" />
        </svg>
      </p>
    </div>
  );
};

export default PortraitStack;
