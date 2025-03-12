import { motion } from "framer-motion";

interface AboutMeProps {
  aiName?: string;
  userName?: string;
  paperTopic?: string;
  doctorName?: string;
  earnings?: string;
  weekTotal?: string;
}

export default function Card({ aiName = "AI name" }: AboutMeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      }}
      className="relative max-w-6xl overflow-hidden rounded-lg bg-[gray-200/95] shadow-md text-blue-950/95 my-10"
      role="alert"
      aria-live="polite"
    >
      <div className="p-4">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.3,
          }}
          className="relative mb-4 flex items-center"
        >
          <div className="relative mr-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-950/95 text-xl font-bold text-white">
              L
            </div>
          </div>

          <span className="text-2xl md:text-3xl font-semibold text-muted-foreground font-pixel">
            {aiName}
          </span>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "calc(100% - 20px)" }}
            transition={{
              delay: 1.0,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="absolute left-[19px] top-0 mt-3 w-1 bg-gray-200"
          />

          {/* Animated Content Wrapper */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{
              delay: 1.0,
              duration: 0.8,
              type: "tween",
            }}
            style={{ overflow: "hidden" }}
          >
            {/* Animated Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2,
                duration: 0.6,
              }}
              className="mb-4 pl-12 text-gray-700 dark:text-gray-300"
            >
              <p className="text-blue-950/95 font-marcellus md:text-xl text-lg">
                I’m Laxmi Lamichhane, a Software Engineeirng student at Gandaki
                College of Engineering and Science.
                <span className="inline-flex pt-4">
                  With a passion for both app and web development, I love
                  exploring AI and creating innovative solutions that push the
                  boundaries of technology and open up endless possibilities in
                  the digital world.
                </span>
              </p>
            </motion.div>

            {/* Earnings Notification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.4,
                duration: 0.6,
              }}
              className="ml-12 rounded-md p-3 "
              style={{ backgroundColor: "#EB5B00" }}
            >
              <div className="flex items-start">
                <p className="text-sm text-white font-mono">
                  Always curious and eager to learn, I love turning ideas into
                  reality through code. 🚀
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
