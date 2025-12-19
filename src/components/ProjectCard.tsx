import { BsGithub } from "react-icons/bs";
import { Project } from "../constants/data";

const IMAGE_HEIGHT = "h-48 md:h-56";

interface ProjectCardProps extends Project {}

const ProjectCard = ({
  title,
  description,
  githubLink,
  date,
  technologies,
  image,
}: ProjectCardProps) => {
  return (
    <div
      className={`group flex flex-col bg-white/90 dark:bg-gray-900/50 text-gray-900 dark:text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100/80 dark:border-gray-700/60 backdrop-blur-md`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-accent/5 via-accent2/10 to-accent3/15 ${IMAGE_HEIGHT}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 gap-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors font-marcellus flex-1">
              {title}
            </h3>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 dark:bg-gray-900/70 backdrop-blur-md rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors ml-2"
                aria-label={`View ${title} on GitHub`}
              >
                <BsGithub
                  size={20}
                  className="text-gray-900 dark:text-gray-100"
                />
              </a>
            )}
            {/* 
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-900 font-mono font-semibold rounded-full bg-blue-100 px-2 py-1 shadow-sm transition-colors hover:bg-blue-200 hover:text-blue-900 cursor-pointer flex items-center gap-1"
              aria-label={`View ${title} live`}
            >
              <span className="text-slate-900">View Live</span>
              <LuArrowUpRight size={16} className="text-slate-900" />
            </a> 
            */}
          </div>
          <p className="text-xs mb-2 md:text-sm text-slate-500 dark:text-slate-300 font-mono font-semibold">
            {date}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-700 dark:text-slate-200 font-marcellus text-sm md:text-base">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.split(",").map((tech) => {
            const trimmedTech = tech.trim();
            return (
              <span
                key={trimmedTech}
                className="inline-block font-mono bg-blue-50 text-blue-900 dark:bg-blue-900/40 dark:text-blue-100 rounded-full px-3 py-1 text-xs font-medium shadow-md border border-blue-100/80 dark:border-blue-700/70"
              >
                {trimmedTech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
