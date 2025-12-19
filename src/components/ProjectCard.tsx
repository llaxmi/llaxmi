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
      className={`group flex flex-col dark:bg-blue-950/40 text-gray-900 dark:text-white rounded-2xl transition-all duration-300  border border-gray-100/80 dark:border-gray-700/60`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${IMAGE_HEIGHT}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover duration-500"
        />
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
                className="inline-block font-mono bg-blue-50 text-blue-900 dark:bg-blue-700/30 dark:text-blue-100 rounded-full px-3 py-1 text-xs font-medium shadow-md border border-blue-100/80 dark:border-blue-800/70"
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
