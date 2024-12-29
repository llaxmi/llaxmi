import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { projects } from "../constants/data";

const ProjectCard = ({
  title,
  description,
  link,
  date,
  technologies,
}: (typeof projects)[0]) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
      {/* Title and Date */}
      <div>
        <div className="flex items-center">
          <h3 className="text-[22px] flex-1 font-semibold text-pri hover:text-blue-800 hover:underline hover:underline-offset-4 font-marcellus">
            {title}
          </h3>
          <Link to={link} className="ml-auto">
            <BsGithub size={20} />
          </Link>
        </div>

        <p className="text-sm text-gray-500">{date}</p>
      </div>
      {/* Description */}
      <p className="text-gray-800 font-marcellus">{description}</p>
      {/* Technologies */}
      <div className="mt-auto gap-1 items-center">
        <p className="text-sm font-medium text-gray-700">
          <span className="font-semibold text-pri">Technologies:</span>
          {technologies}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
