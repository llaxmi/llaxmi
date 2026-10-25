import { ArrowUpRight } from "lucide-react";
import type { Project } from "../constants/data";
import PaletteDemo from "./PaletteDemo";
import SketchFrame from "./SketchFrame";

interface ProjectCardProps {
  project: Project;
  /**
   * featured: wide, image beside text, for the headline project.
   * pinned: a print pinned to the board, for the rest of the work.
   * polaroid: a snapshot with a handwritten caption, for the playground.
   */
  variant?: "featured" | "pinned" | "polaroid";
  // Degrees the card sits off-straight. It straightens when picked up.
  tilt?: number;
}

const ProjectCard = ({ project, variant = "pinned", tilt = 0 }: ProjectCardProps) => {
  const tags = project.technologies
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const featured = variant === "featured";
  const polaroid = variant === "polaroid";

  return (
    // The frame draws in `currentColor`, so it inverts along with the surface.
    <SketchFrame
      className="h-full text-body transition-[rotate] duration-300 ease-out [rotate:var(--tilt)] focus-within:[rotate:0deg] hover:[rotate:0deg]"
      style={{ ["--tilt" as string]: `${tilt}deg` }}
    >
      {/* The title link stretches over the whole card, and a live demo sits
          above it so its own controls stay clickable. */}
      <div
        data-surface="paper"
        className={`group relative flex h-full flex-col gap-4 bg-white p-4 sm:p-5 ${
          featured ? "lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6" : ""
        }`}
      >
        {project.demo === "palette" ? (
          <div className="relative z-10">
            <PaletteDemo initialImage={project.image} />
          </div>
        ) : (
          <div className={`overflow-hidden border border-rule ${featured ? "lg:col-span-7" : ""}`}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              width={1600}
              height={1000}
              className={`w-full object-cover object-top ${polaroid ? "aspect-square" : "aspect-[16/10]"}`}
            />
          </div>
        )}

        <div className={`flex flex-1 flex-col gap-3 ${featured ? "lg:col-span-5 lg:py-2" : ""}`}>
          {polaroid && (
            <p className="-rotate-1 font-hand text-step-2 leading-tight text-body">
              {project.tagline}
            </p>
          )}

          <div className="flex items-start justify-between gap-4">
            <h3
              className={`font-display font-extrabold leading-[0.95] tracking-[-0.03em] text-body [font-stretch:82%] ${
                featured ? "text-step-4" : polaroid ? "text-step-1" : "text-step-2"
              }`}
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-flag-blue"
              >
                {project.title}
              </a>
            </h3>

            <span
              aria-hidden
              className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-body text-surface transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </span>
          </div>

          {!polaroid && (
            <p className="text-step-1 font-medium leading-snug text-body">{project.tagline}</p>
          )}

          {(featured || !polaroid) && (
            <p className="measure text-step--1 leading-relaxed text-muted">{project.description}</p>
          )}

          <p className="mt-auto flex items-end justify-between gap-4 pt-2 text-step--1 text-muted">
            <span>{tags.join(", ")}</span>
            <span className="shrink-0 font-hand text-step-1 leading-none text-accent-text">
              {project.date}
            </span>
          </p>
        </div>
      </div>
    </SketchFrame>
  );
};

export default ProjectCard;
