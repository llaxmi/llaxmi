import { motion } from "framer-motion";
import { Certificate } from "../components/Certificate";
import PageTitle from "../components/PageTitle";
import { certificates } from "../constants/data";

export function Achievement() {
  return (
    <div
      id="achievements"
      className="flex flex-col items-center justify-center mt-2"
    >
      <PageTitle
        title="Achievements"
        description="A collection of my achievements"
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Certificate {...cert} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
