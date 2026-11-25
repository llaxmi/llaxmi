import { ArrowUpRight } from "lucide-react";
import type { Project } from "../constants/data";
import PaletteDemo from "./PaletteDemo";

// Prayer-flag colours, cycled across cards as a small marker beside the index.
const MARKERS = ["bg-flag-blue", "bg-flag-red", "bg-flag-green", "bg-flag-yellow"];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const splitTags = (technologies: string) =>
  technologies
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

/**
 * One project, as a same-size card: meta, title and tagline on top, the
 * screenshot (or a live demo) below, and the stack along the bottom.
 *
 * The title link stretches over the whole card; a live demo sits above it so
 * its own controls stay clickable.
 */
const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <article
    data-surface="paper"
    className="group relative flex h-full flex-col gap-4 rounded-xl border border-rule/60 bg-white p-4 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-rule hover:shadow-[0_24px_48px_-28px_rgb(var(--body-rgb)/0.45)] focus-within:border-rule sm:p-5"
  >
    <div className="flex items-center justify-between gap-3 text-[0.8rem] text-muted">
      <span className="flex items-center gap-2 tabular-nums">
        <span aria-hidden className={`h-2 w-2 rounded-full ${MARKERS[index % MARKERS.length]}`} />
        {String(index + 1).padStart(2, "0")} · {project.date}
      </span>
      <ArrowUpRight
        aria-hidden
        size={17}
        strokeWidth={2}
        className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-body"
      />
    </div>

    <div>
      <h3 className="font-display text-step-2 font-bold leading-tight tracking-[-0.01em] text-body">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-flag-blue"
        >
          {project.title}
        </a>
      </h3>
      <p className="text-step-0 leading-snug text-body/80">{project.tagline}</p>
    </div>

    {project.demo === "palette" ? (
      <div className="relative z-10">
        <PaletteDemo initialImage={project.image} imageAspect="aspect-[4/3]" />
      </div>
    ) : (
      <>
        <div className="overflow-hidden border border-rule">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            width={1600}
            height={1200}
            className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Built with">
          {splitTags(project.technologies).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-rule/70 bg-surface px-2.5 py-0.5 text-[0.75rem] leading-5 text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </>
    )}
  </article>
);

export default ProjectCard;
