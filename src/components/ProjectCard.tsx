import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { projects } from "../constants/data";

const ProjectCard = ({
  title,
  description,
  link,
  date,
  technologies,
  image,
}: (typeof projects)[0]) => {
  return (
    <div className="flex flex-col gap-4 py-4 shadow-md rounded-lg hover:shadow-lg transition-shadow">
      {/* Image */}
      <img src={image} alt={title} className="h-min w-full object-contain" />
      <div className="px-4">
        <div className="flex items-center">
          <h3 className="text-[22px] flex-1 font-bold text-pri hover:text-blue-800 hover:underline hover:underline-offset-4 font-marcellus">
            {title}
          </h3>
          <Link to={link} className="ml-auto cursor-pointer">
            <BsGithub size={22} />
          </Link>
        </div>

        <p className="text-sm text-gray-500">{date}</p>
      </div>
      {/* Description */}
      <p className="text-gray-800 font-marcellus px-4 line-clamp-3 md:line-clamp-none">
        {description}
      </p>
      {/* Technologies */}
      <p className="px-4">
        {technologies.split(",").map((tech, index) => (
          <span
            key={`tech_${index}`}
            className="inline-block font-mono bg-orange-500/90 rounded-full px-3 py-1 text-xs font-medium text-white mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ProjectCard;
