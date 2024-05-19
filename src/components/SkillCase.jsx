/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const SkillCase = ({ items }) => {
  const fadeinSkills = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };
  return (
    <div className="h-max w-full">
      <div className="mx-auto grid max-w-lg lg:grid-cols-5 grid-cols-4 md:grid-cols-5 items-center gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-8 lg:mx-0 lg:max-w-none ">
        {items.map((item, index) => (
          <ul key={index}>
            <motion.li
              key={index}
              variants={fadeinSkills}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.3 }}
            >
              <img
                key={index}
                className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
                src={item.src}
                alt={item.alt}
              />
            </motion.li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SkillCase;
