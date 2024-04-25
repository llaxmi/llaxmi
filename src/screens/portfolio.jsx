import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/data";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="justify-center items-center flex flex-wrap flex-col min-h-screen p-2 text-wrap "
    >
      <PageTitle title="PROJECTS" />
      <p className="font-lexend sm:text-lg md:text-xl ssm:text-center lg:text-2xl text-pri leading-relaxed my-4">
        The projects I&apos;m currently immersed in are nearing completion and
        will soon be unveiled for exploration and enjoyment.
      </p>
      <div className="p-10 w-full h-min-screen my-2 gap-x-2 gap-y-6 grid md:flex-row ssm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        {projects.map((projectName) => {
          return (
            <ProjectCard
              key={projectName}
              image={projectName.image}
              projectName={projectName.projectName}
              description={projectName.description}
              link={projectName.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
