import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/primitives/SectionHeader";
import { projects } from "../constants/data";

// Small alternating tilts, so the cards read as prints pinned to a board.
const TILTS = [-0.8, 0.6, 0.9, -0.5, -0.7];

const [featured, ...rest] = projects;

const Work = () => (
  <section id="work" aria-labelledby="work-heading" className="border-b border-rule py-20 md:py-28">
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader
        id="work-heading"
        section="work"
        title="Personal work"
        description="Things I've designed and built end to end."
      />

      <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
        <div className="md:col-span-2">
          <ProjectCard project={featured} variant="featured" />
        </div>
        {rest.map((project, i) => (
          <ProjectCard key={project.title} project={project} tilt={TILTS[i % TILTS.length]} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;
