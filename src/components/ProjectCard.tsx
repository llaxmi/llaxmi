import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "../constants/data";
import SketchFrame from "./SketchFrame";

interface ProjectCardProps {
  project: Project;
  // Playground cards do not show an index.
  index?: number;
  // The card switches to the opposite surface when active.
  surface?: "paper" | "ink";
}

const ProjectCard = ({
  project,
  index,
  surface = "paper",
}: ProjectCardProps) => {
  const [active, setActive] = useState(false);
  const hoverSurface = surface === "ink" ? "paper" : "ink";

  const tags = project.technologies
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    // The frame draws in `currentColor`, so it inverts along with the surface.
    <SketchFrame className="h-full text-body">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        data-surface={active ? hoverSurface : surface}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className="group flex h-full flex-col gap-4 bg-white p-4 transition-colors duration-300 sm:p-5"
      >
        <div className="overflow-hidden border border-rule">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            width={1600}
            height={1000}
            className="aspect-[16/10] w-full object-cover object-top"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-step-1 font-bold uppercase leading-none tracking-[-0.02em] text-body">
              {project.title}
            </h3>

            <span
              aria-hidden
              className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center bg-body text-surface transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </span>
          </div>

          {/* One run of tags, as in the reference: joined, not chipped. */}
          <p className="font-mono text-step--1 text-body/70">
            {tags.join(", ")}
          </p>
        </div>

        <p className="measure text-step--2 text-body/70">
          {project.description}
        </p>   

        <p className="mt-auto flex items-center gap-3 pt-1 font-mono text-step--1 uppercase tracking-[0.18em] text-body/60">
          {typeof index === "number" && (
            <span className="font-bold text-body">
              {String(index + 1).padStart(3, "0")}
            </span>
          )}
          <span className="ml-auto">{project.date}</span>
        </p>
      </a>
    </SketchFrame>
  );
};

export default ProjectCard;
