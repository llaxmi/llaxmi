import { motion } from "framer-motion";
import Skills from "./skills";

const AboutMe = () => {
  return (
    <section id="skills" className="flex flex-col items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="w-full"
      >
        <Skills />
      </motion.div>
    </section>
  );
};

export default AboutMe;
