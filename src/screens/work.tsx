import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/primitives/SectionHeader";
import { projects } from "../constants/data";

const Work = () => (
  <section
    id="work"
    aria-labelledby="work-heading"
    className="border-b border-rule py-20 md:py-28"
  >
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader
        id="work-heading"
        index="04"
        title="Personal Work"
        description="Things I've designed and built end to end."
      />

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;
