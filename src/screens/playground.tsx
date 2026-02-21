import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { funProjects } from "../constants/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export const Playground = () => {
  return (
    <section
      id="playground"
      className="relative px-4 py-16 md:py-20 overflow-hidden"
    >
      {/* Subtle gradient background to make section stand out */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245, 158, 11, 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <PageTitle
          title="Playground"
          description="Fun experiments & side projects — built for curiosity"
        />

        {funProjects.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {funProjects.map((project) => (
              <motion.div key={project.title} variants={item}>
                <ProjectCard
                  date={project.date}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  technologies={project.technologies}
                  image={project.image}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 font-marcellus text-lg"
          >
            Fun projects coming soon. <span className="animate-pulse">🚀</span>
          </motion.p>
        )}
      </div>
    </section>
  );
};
