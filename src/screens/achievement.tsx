import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Certificate } from "../components/Certificate";
import PageTitle from "../components/PageTitle";
import { certificates } from "../constants/data";

export function Achievement() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      id="achievements"
      className="flex flex-col items-center justify-center"
    >
      <PageTitle title="Achievements" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id || index}
            initial={{ opacity: 0, y: 50 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Certificate {...cert} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
