import { motion } from "framer-motion";

const PageTitle = ({ title }: { title: string }) => {
  const titleVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="text-5xl font-marcellus font-semibold opacity-10 mt-8">
        {title}
      </h1>

      {/* Animated main title */}
      <motion.h1
        className="text-3xl font-marcellus text-orange-600 -mt-8"
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
