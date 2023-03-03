import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projectsInfo } from "../data/projectsInfo";

export default function Projects() {
  return (
    <section className="pb-[30vh]">
      <SectionTitle title={"Projects"} />
      <ul className="flex justify-center">
        {projectsInfo.map((project) => {
          return <ProjectCard {...project} key={project.title} />;
        })}
      </ul>
    </section>
  );
}
