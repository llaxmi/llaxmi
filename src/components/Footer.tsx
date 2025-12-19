import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 py-4 px-4 border-t border-gray-200 dark:border-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="font-marcellus text-base md:text-lg text-gray-700 dark:text-gray-300">
          © {currentYear} . All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
