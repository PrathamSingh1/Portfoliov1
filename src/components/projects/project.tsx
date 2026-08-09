import { GitHubIcon } from "../icons/icons";
import { Heading } from "../ui/heading";
import { HorizontalLine } from "../ui/horizontal-line";
import { ProjectCard } from "./project-card";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
} from "react-icons/si";

export const Project = () => {
  return (
    <div className="relative px-3.5 py-3">
      <HorizontalLine className="top-0" />
      <Heading>Projects</Heading>
      <div className="mb-6">
        <HorizontalLine className="top-[40px]" />
      </div>
      {/*<div>Project section is here</div>*/}
      <ProjectCard
        title="Project Title"
        description="Project description goes here you can write many more about the project here and describe about it about the project here and describe about it ."
        image={{ src: "/project/project.png", alt: "project" }}
        live="Live"
        liveUrl="https://localhost:300"
        githubUrl="https://github.com/"
        technologies={[
          {
            label: "Next.js",
            icon: (
              <SiNextdotjs
                size={14}
                className="fill-muted-foreground"
              />
            ),
          },
          {
            label: "React",
            icon: (
              <SiReact size={14} className="fill-muted-foreground" />
            ),
          },
          {
            label: "TypeScript",
            icon: (
              <SiTypescript
                size={14}
                className="fill-muted-foreground"
              />
            ),
          },
          {
            label: "TypeScript",
            icon: (
              <SiTailwindcss
                size={14}
                className="fill-muted-foreground"
              />
            ),
          },
          {
            label: "TypeScript",
            icon: (
              <SiFramer size={14} className="fill-muted-foreground" />
            ),
          },
        ]}
        className=""
      />
    </div>
  );
};
