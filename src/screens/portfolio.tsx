import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/data";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center p-8"
    >
      <PageTitle title="PROJECTS" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            date={project.date}
            title={project.title}
            description={project.description}
            link={project.link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
