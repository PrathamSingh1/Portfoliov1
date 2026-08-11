import { cn } from "@/lib/utils";
import { HorizontalLine } from "../ui/horizontal-line";
import { Heading } from "../ui/heading";
import { SkillButton } from "../ui/skill-button";
import {
  AWSIcon,
  CloudflareIcon,
  CSSIcon,
  DockerIcon,
  ExpressJsIcon,
  FigmaIcon,
  GitHubIcon2,
  GitIcon,
  GSAPIcon,
  HTMLIcon,
  JavaScriptIcon,
  MongoDBIcon,
  MotionIcon,
  NextjsIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  PostmanIcon,
  PrismaIcon,
  ReactIcon,
  ReactQueryIcon,
  RedisIcon,
  SQLIcon,
  SVGIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  VercelIcon,
} from "../icons/icons";

export const Skills = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative px-3.5 py-3", className)}>
      <HorizontalLine className="top-0" />
      <Heading>Skills</Heading>
      <div className="mb-6">
        <HorizontalLine className="top-[40px]" />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <SkillButton>
          <HTMLIcon />
          HTML
        </SkillButton>
        <SkillButton>
          <CSSIcon />
          CSS
        </SkillButton>
        <SkillButton>
          <JavaScriptIcon />
          JavaScript
        </SkillButton>
        <SkillButton>
          <TypeScriptIcon />
          TypeScript
        </SkillButton>
        <SkillButton>
          <ReactIcon />
          React
        </SkillButton>
        <SkillButton>
          <TailwindCSSIcon />
          TailwindCSS
        </SkillButton>
        <SkillButton>
          <NextjsIcon />
          NextJs
        </SkillButton>
        <SkillButton>
          <MotionIcon />
          Motion
        </SkillButton>
        <SkillButton>
          <GSAPIcon />
          GSAP
        </SkillButton>
        <SkillButton>
          <ReactQueryIcon />
          React Query
        </SkillButton>
        <SkillButton>
          <NodeJsIcon />
          NodeJs
        </SkillButton>
        <SkillButton>
          <ExpressJsIcon />
          ExpressJs
        </SkillButton>
        <SkillButton>
          <PrismaIcon />
          Prisma
        </SkillButton>
        <SkillButton>
          <GitIcon />
          Git
        </SkillButton>
        <SkillButton>
          <GitHubIcon2 />
          Github
        </SkillButton>
        <SkillButton>
          <PostgreSQLIcon />
          Postgres
        </SkillButton>
        <SkillButton>
          <SQLIcon />
          SQL
        </SkillButton>
        <SkillButton>
          <MongoDBIcon />
          MongoDB
        </SkillButton>
        <SkillButton>
          <AWSIcon />
          AWS
        </SkillButton>
        <SkillButton>
          <CloudflareIcon />
          CloudFlare
        </SkillButton>
        <SkillButton>
          <FigmaIcon />
          Figma
        </SkillButton>
        <SkillButton>
          <SVGIcon />
          SVG
        </SkillButton>
        <SkillButton>
          <PostmanIcon />
          Postman
        </SkillButton>
        <SkillButton>
          <RedisIcon />
          Redis
        </SkillButton>
        <SkillButton>
          <DockerIcon />
          Docker
        </SkillButton>
        <SkillButton>
          <GitHubIcon2 />
          Github Actions(CI/CD)
        </SkillButton>
        <SkillButton>
          <VercelIcon />
          Vercel
        </SkillButton>
      </div>
    </div>
  );
};
