import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/primitives/SectionHeader";
import { projects } from "../constants/data";

const Work = () => (
  <section
    id="work"
    aria-labelledby="work-heading"
    data-surface="ink"
    className="border-b border-rule bg-surface py-20 text-body md:py-28"
  >
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader
        id="work-heading"
        index="03"
        title="Work"
        description="Things I've designed and built end to end."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} surface="ink" />
        ))}
      </div>
    </div>
  </section>
);

export default Work;
