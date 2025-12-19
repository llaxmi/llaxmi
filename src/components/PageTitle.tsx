import { motion } from "framer-motion";

interface PageTitleProps {
  title: string;
  description?: string;
}

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mt-16 mb-8"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-marcellus">
        <span className="bg-yellow-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="text-gray-300 font-marcellus text-lg md:text-xl mb-4">
        {description}
      </p>
      <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full" />
    </motion.div>
  );
};

export default PageTitle;
