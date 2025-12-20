import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  description?: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return (
    minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  );
}

export const CircularTestimonials = ({
  testimonials,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isPaused, setIsPaused] = useState(false);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayIntervalRef = useRef<number | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isPaused || testimonialsLength <= 1) return;

    autoPlayIntervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    }, 4000); // Change slide every 4 seconds

    return () => {
      if (autoPlayIntervalRef.current) {
        window.clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isPaused, testimonialsLength]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset =
      (index - activeIndex + testimonialsLength) % testimonialsLength;
    const isActive = index === activeIndex;
    const isLeft =
      (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div
      className="testimonial-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-grid">
        {/* Images */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="testimonial-image"
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>
        {/* Content */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="certificate-header">
                <h3
                  className="name"
                  style={{ color: colorName, fontSize: fontSizeName }}
                >
                  {activeTestimonial.quote}
                </h3>
                <p
                  className="designation"
                  style={{
                    color: colorDesignation,
                    fontSize: fontSizeDesignation,
                  }}
                >
                  {activeTestimonial.name} • {activeTestimonial.designation}
                </p>
              </div>
              {activeTestimonial.description && (
                <div className="description-wrapper">
                  <motion.p
                    className="description"
                    style={{ color: colorTestimony }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {activeTestimonial.description}
                  </motion.p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        .testimonial-container {
          width: 100%;
          max-width: 72rem;
          padding: 2rem;
        }
        .testimonial-grid {
          display: grid;
          gap: 3rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 28rem;
          perspective: 1000px;
        }
        .testimonial-image {
          position: absolute;
          width: 200%;
          height: 100%;
          object-fit: contain;
    
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 1rem;
        }
        .certificate-header {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }
        .name {
          font-weight: 700;
          font-size: 1.75rem;
          letter-spacing: -0.01em;
          margin: 0;
          line-height: 1.3;
        }
        .designation {
          font-weight: 400;
          font-size: 1rem;
          letter-spacing: 0.01em;
          margin: 0;
          opacity: 0.85;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .designation::before {
          content: "•";
          opacity: 0.5;
        }
        .description-wrapper {
          padding: 1.5rem 0;
          flex: 1;
        }
        .description {
          line-height: 1.8;
          font-weight: 400;
          letter-spacing: 0.01em;
          margin: 0;
          font-size: 1rem;
          opacity: 0.9;
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
          }
          .certificate-header {
            padding-bottom: 2rem;
          }
          .description-wrapper {
            padding: 2rem 0;
          }
          .name {
            font-size: 2rem;
          }
          .description {
            font-size: 1.125rem;
            line-height: 1.9;
          }
        }
        @media (max-width: 767px) {
          .certificate-header {
            padding-bottom: 1.25rem;
          }
          .name {
            font-size: 1.5rem;
          }
          .designation {
            font-size: 0.9rem;
          }
          .description {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;
