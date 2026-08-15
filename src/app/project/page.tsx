import { Banner } from "@/components/layout/banner";
import Container from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Heading } from "@/components/ui/heading";
import { HorizontalLine } from "@/components/ui/horizontal-line";
import { VerticalLine } from "@/components/ui/vertical-line";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-[700px] mx-auto absolute inset-0 h-full w-full">
        <VerticalLine className="left-0" />
        <VerticalLine className="right-0" />
      </div>
      <HorizontalLine className="top-47" />

      <Container className="">
        <Banner />

        <div className="px-3.5 py-6">
          {/* Header */}
          <div className="flex items-center justify-between relative pb-6">
            <div className="">
              <Heading className="text-2xl font-figtree">
                Projects
              </Heading>
              <p className="text-muted-foreground mx-auto max-w-2xl text-sm mt-2 font-figtree">
                Notes from the journey—things I’ve built, lessons I’ve
                learned, and ideas worth sharing.
              </p>
              <HorizontalLine className="bottom-0" />
            </div>

            <ThemeToggle />
          </div>

          <div className="">
            <div className="flex flex-wrap py-6 gap-4">
              {projects.map((project, i) => (
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
          </div>
        </div>
      </Container>
    </div>
  );
}
