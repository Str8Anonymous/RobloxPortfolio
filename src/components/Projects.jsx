import Card from "./card";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:py-24 md:px-6 text-center">
      <h1 className="text-4xl mb-12 font-bold text-accent">Projects</h1>

      <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            media={project.media}
            contributions={project.contributions}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}