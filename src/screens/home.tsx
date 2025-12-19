import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import meImage from "../assets/me.jpeg";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <div
      id="home"
      className="relative flex p-3 flex-col items-center justify-center min-h-screen w-full overflow-hidden"
    >
      {/* Floating Orbs - adjust for mobile */}
      <div className="absolute top-10 left-2 w-40 h-40 sm:top-20 sm:left-10 sm:w-72 sm:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div
        className="absolute top-28 right-2 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-8 left-1/2 w-40 h-40 sm:bottom-20 sm:left-1/2 sm:w-72 sm:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "4s", transform: "translateX(-50%)" }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 pt-20 sm:gap-10 lg:gap-20 px-2 sm:px-4 max-w-7xl w-full">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 w-full lg:w-3/5"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-base xs:text-lg md:text-xl font-marcellus text-gray-300 font-semibold">
              Hii, I'm
            </p>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-marcellus bg-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
              Laxmi Lamichhane
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-8 md:h-10"
          >
            <p className="text-lg xs:text-xl md:text-2xl lg:text-3xl font-marcellus text-gray-100 font-semibold">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Software Engineering Student",
                  "AI Enthusiast",
                  "Creative Problem Solver",
                  "Tech Explorer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm xs:text-base md:text-lg font-marcellus text-gray-200 max-w-lg xs:max-w-xl text-left sm:max-w-2xl leading-relaxed px-1 sm:px-0"
          >
            A passionate software engineering student and Full Stack Developer
            at SyncGTM, driven by a love for learning and building cool things.
            I enjoy turning ideas into reality through code and continuously
            exploring the vast possibilities that technology offers.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-4 w-full"
          >
            <SocialLinks />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
          >
            <a
              href="#projects"
              className="px-6 py-2 xs:px-8 xs:py-3 bg-blue-950 text-white rounded-full font-marcellus font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-950/50 transform hover:scale-105 transition-all duration-300 text-sm xs:text-base"
              aria-label="Navigate to projects section"
            >
              View My Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Animated Image/GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="relative mt-8 lg:mt-0 w-full flex justify-center lg:justify-end lg:w-2/5"
        >
          <div className="relative w-40 h-40 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
              <img
                src={meImage}
                alt="Laxmi Lamichhane"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-3 -right-3 xs:-top-4 xs:-right-4 bg-gray-600 rounded-full p-2 xs:p-3 shadow-lg"
            >
              <span className="text-xl xs:text-2xl">🇳🇵</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 bg-gray-600 rounded-full p-2 xs:p-3 shadow-lg"
            >
              <span className="text-xl xs:text-2xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
