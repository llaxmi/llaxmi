import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "../constants/data";

interface ProjectCardProps {
  project: Project;
  // Playground cards do not show an index.
  index?: number;
  // The card switches to the opposite surface when active.
  surface?: "paper" | "ink";
}
const ProjectCard = ({ project, index, surface = "paper" }: ProjectCardProps) => {
  const [active, setActive] = useState(false);
  const hoverSurface = surface === "ink" ? "paper" : "ink";

  const tags = project.technologies
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      data-surface={active ? hoverSurface : surface}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="group block border border-rule bg-surface-2 transition-colors duration-300"
    >
      <div className="overflow-hidden border-b border-rule">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          width={1600}
          height={1000}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4">
          {typeof index === "number" && (
            <span className="font-mono text-step--1 font-bold uppercase tracking-[0.18em] text-body">
              {String(index + 1).padStart(3, "0")}
            </span>
          )}

          <span className="ml-auto flex items-center gap-2">
            <span className="font-mono text-step--1 uppercase tracking-[0.18em] text-body/70">
              {project.date}
            </span>
            <ArrowUpRight
              size={16}
              aria-hidden
              className="text-body transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </span>
        </div>

        <h3 className="mt-4 font-display text-step-2 font-bold uppercase leading-none tracking-[-0.02em] text-body">
          {project.title}
        </h3>

        <p className="mt-3 text-step-0 text-body/70">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
          {tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-step--1 uppercase tracking-[0.14em] text-body/70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectCard;
