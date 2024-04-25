/* eslint-disable react/prop-types */
const ProjectCard = ({ image, projectName, description, link }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 ">
      <img
        className="rounded-t-lg h-56 w-full object-fill"
        src={image}
        alt="Project"
      />

      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-tert">
          {projectName}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center  p-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-800"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
