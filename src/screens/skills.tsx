import SectionHeader from "../components/primitives/SectionHeader";
import SkillIndex from "../components/SkillIndex";

const Skills = () => (
  <section
    id="skills"
    aria-labelledby="skills-heading"
    data-surface="ink"
    className="bg-surface py-20 text-body md:py-28"
  >
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader
        id="skills-heading"
        section="skills"
        title="Skills"
        description="What I reach for, and what I'm still learning."
      />
      <SkillIndex />
    </div>
  </section>
);

export default Skills;
