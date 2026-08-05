import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/primitives/SectionHeader";
import { funProjects } from "../constants/data";

export const Playground = () => (
  <section id="playground" aria-labelledby="playground-heading" className="border-b border-rule py-20 md:py-28">
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader
        id="playground-heading"
        index="04"
        title="Playground"
        description="Things built for no good reason."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {funProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  </section>
);
