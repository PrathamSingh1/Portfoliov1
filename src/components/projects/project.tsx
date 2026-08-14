import Link from "next/link";
import { Heading } from "../ui/heading";
import { HorizontalLine } from "../ui/horizontal-line";
import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects"; // update path as needed

const PROJECTS_LIMIT = 4;

export const Project = () => {
  const featuredProjects = projects.slice(0, PROJECTS_LIMIT);
  return (
    <div className="relative px-3.5 py-3">
      <HorizontalLine className="top-0" />
      <Heading>Projects</Heading>
      <div className="mb-6">
        <HorizontalLine className="top-[40px]" />
      </div>
      <div className="flex flex-wrap py-3 gap-4">
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            live={project.live}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
      {projects.length > PROJECTS_LIMIT && (
        <div className="relative flex justify-center items-center mt-8 mb-4">
          {/* line sits behind, vertically centered in this wrapper */}
          <HorizontalLine className="top-1/2 -translate-y-1/2 bg-foreground/40 z-0" />
          <Link
            href="/projects"
            className="relative z-10 text-sm font-inter bg-accent px-3 py-2 rounded-radius text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
      )}
    </div>
  );
};
