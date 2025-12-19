import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/data";

const Portfolio = () => {
  return (
    <section id="projects" className="relative px-4">
      <div className="relative max-w-7xl mx-auto">
        <PageTitle
          title="My Projects"
          description="A collection of my projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              date={project.date}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
