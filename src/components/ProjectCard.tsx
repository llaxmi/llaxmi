import { BsGithub } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import { Project } from "../constants/data";

const IMAGE_HEIGHT = "h-48 md:h-56";

interface ProjectCardProps extends Project {}

const ProjectCard = ({
  title,
  description,
  githubLink,
  liveLink,
  date,
  technologies,
  image,
}: ProjectCardProps) => {
  return (
    <div
      className={`group flex flex-col bg-white text-pri rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 h-[390px] md:h-[500px] lg:h-[540px] xl:h-[500px]`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 ${IMAGE_HEIGHT}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* GitHub Link Overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label={`View ${title} on GitHub`}
          >
            <BsGithub size={20} className="text-gray-800" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col h-40 p-5">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-pri transition-colors font-marcellus flex-1">
              {title}
            </h3>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-700 font-mono font-semibold rounded-full bg-blue-100 px-2 py-1 shadow-sm transition-colors hover:bg-blue-200 hover:text-blue-900 cursor-pointer flex items-center gap-1"
              aria-label={`View ${title} live`}
            >
              <span className="text-blue-700">View Live</span>
              <LuArrowUpRight size={16} className="text-blue-700" />
            </a>
          </div>
          <p className="text-xs mb-2 md:text-sm text-gray-600 font-mono font-semibold">
            {date}
          </p>
        </div>

        {/* Description */}
        <p className="text-pri font-marcellus text-sm md:text-base ">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.split(",").map((tech) => {
            const trimmedTech = tech.trim();
            return (
              <span
                key={trimmedTech}
                className="inline-block font-mono bg-yellow-500/85 rounded-full px-3 py-1 text-xs font-medium text-black shadow-md"
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
