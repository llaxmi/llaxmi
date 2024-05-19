import { projects } from "../constants/data";

const ProjectCard = ({
  title,
  description,
  link,
  date,
}: (typeof projects)[0]) => {
  return (
    <div className="px-4">
      <div className="w-full m-2 space-y-1 ">
        <h5 className=" text-lg font-medium text-black font-Fira underline hover:text-blue-800 underline-offset-4">
          <a href={link} target="_blank">
            {title}
          </a>
        </h5>
        <h3 className="font-Source text-sm text-gray-400">{date}</h3>
        <p className="mb-3 font-Source text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
