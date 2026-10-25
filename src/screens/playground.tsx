import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/primitives/SectionHeader";
import { funProjects } from "../constants/data";

// Looser than the work cards: these are snapshots, not prints.
const TILTS = [-2, 1.5, -1];

export const Playground = () => (
  <section id="playground" aria-labelledby="playground-heading" className="border-b border-rule py-20 md:py-28">
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader
        id="playground-heading"
        section="playground"
        title="Playground"
        description="Things built for no good reason."
      />

      <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
        {funProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            variant="polaroid"
            tilt={TILTS[i % TILTS.length]}
          />
        ))}
      </div>
    </div>
  </section>
);
