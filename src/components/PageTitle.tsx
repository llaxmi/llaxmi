import { motion } from "framer-motion";

const PageTitle = ({ title }: { title: string }) => {
  const titleVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      <h1 className="text-left text-3xl font-lexend font-semibold opacity-5 mt-8">
        {title}
      </h1>
      <motion.h1
        className="text-center text-2xl font-lexend font-semibold text-pri -mt-8"
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
