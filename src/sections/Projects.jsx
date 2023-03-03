import ProjectCard from "../components/ProjectCard";
import { projectsInfo } from "../data/projectsInfo";

export default function Projects() {
  return (
    <section className="pb-[30vh]">
      <h2 className="text-[28px] font-bold uppercase text-center mb-5">
        Projects
      </h2>
      <ul className="flex justify-center">
        {projectsInfo.map((project) => {
          return <ProjectCard {...project} key={project.title} />;
        })}
      </ul>
    </section>
  );
}
