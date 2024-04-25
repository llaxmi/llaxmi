import { motion } from "framer-motion";

const PageTitle = ({ title }) => {
  const titleVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      <h1 className="text-center text-6xl font-lexend font-semibold opacity-5 mt-6 ssm:text-5xl">
        {title}
      </h1>
      <motion.h1
        className="text-center text-3xl font-lexend font-semibold text-pri -mt-10"
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default PageTitle;
