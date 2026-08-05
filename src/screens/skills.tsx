import SectionHeader from "../components/primitives/SectionHeader";
import SkillIndex from "../components/SkillIndex";
import { skillGroups } from "../constants/data";

const marqueeWords = skillGroups.flatMap((g) => g.items);

const Skills = () => (
  <section
    id="skills"
    aria-labelledby="skills-heading"
    data-surface="ink"
    className="border-b border-rule bg-surface py-20 text-body md:py-28"
  >
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader
        id="skills-heading"
        index="05"
        title="Skills"
        description="What I reach for, and what I'm still learning."
      />
      <SkillIndex />
    </div>

    <div
      aria-hidden
      className="group mt-16 flex overflow-hidden border-y border-rule py-6 [--gap:3rem]"
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="animate-marquee flex shrink-0 gap-[var(--gap)] pr-[var(--gap)] group-hover:[animation-play-state:paused]"
          style={{ ["--duration" as string]: "50s" }}
        >
          {marqueeWords.map((word) => (
            <span
              key={`${copy}-${word}`}
              className="whitespace-nowrap font-display text-step-3 font-bold uppercase tracking-[-0.02em] text-body/10"
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
