import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/data";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="justify-center items-center flex flex-col p-4 self-center"
    >
      <PageTitle title="PROJECTS" />
      <div className="relative pl-2 grid gap-y-4 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/30 self-center lg:w-4/6 -ml-10 ">
        {projects.map((title) => {
          return (
            <ProjectCard
              key={title.title}
              date={title.date}
              title={title.title}
              description={title.description}
              link={title.link}
              image={title.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
