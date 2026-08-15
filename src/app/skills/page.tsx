import {
  AWSIcon,
  BetterAuthIcon,
  CloudflareIcon,
  CSSIcon,
  CursorIdeIcon,
  DrizzleIcon,
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
  SQLIcon,
  SVGIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/components/icons/icons";
import { Banner } from "@/components/layout/banner";
import Container from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Heading } from "@/components/ui/heading";
import { HorizontalLine } from "@/components/ui/horizontal-line";
import { SkillButton } from "@/components/ui/skill-button";
import { VerticalLine } from "@/components/ui/vertical-line";
import { IconBrandVscode } from "@tabler/icons-react";
import { SiVim } from "react-icons/si";

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-[700px] mx-auto absolute inset-0 h-full w-full">
        <VerticalLine className="left-0" />
        <VerticalLine className="right-0" />
      </div>
      <HorizontalLine className="top-47" />

      <Container className="">
        <Banner />

        <div className="px-3.5 py-6 pb-30">
          {/* Header */}
          <div className="flex items-center justify-between relative pb-6">
            <div className="">
              <Heading className="text-2xl font-figtree">
                Skills
              </Heading>
              <p className="text-muted-foreground mx-auto max-w-2xl text-sm mt-2 font-figtree">
                My arsenal for turning ideas into working software.
              </p>
              <HorizontalLine className="bottom-0" />
            </div>

            <ThemeToggle />
          </div>

          <div className="pt-6">
            <p className="text-sm font-figtree text-muted-foreground leading-6.5">
              My main Tech stack is{" "}
              <SkillButton>
                <NextjsIcon />
                NextJs
              </SkillButton>
              and{" "}
              <SkillButton>
                <TailwindCSSIcon />
                TailwindCSS
              </SkillButton>
              for the frontend,{" "}
              <SkillButton>
                <NodeJsIcon />
                NodeJs
              </SkillButton>
              for the backend and database i use{" "}
              <SkillButton>
                <PostgreSQLIcon />
                Postgre
              </SkillButton>
              with{" "}
              <SkillButton>
                <PrismaIcon />
                Prisma
              </SkillButton>
              as an ORM and{" "}
              <SkillButton>
                <VercelIcon />
                Vercel
              </SkillButton>
              as the hosting platform.
            </p>

            {/*Core*/}
            <div className="">
              <h3 className="text-xs font-figtree text-muted-foreground pt-6">
                {"<CORE/>"}
              </h3>
              <div className="flex flex-wrap gap-2 py-2">
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
                  <SQLIcon />
                  SQL
                </SkillButton>
                <SkillButton>
                  <PostgreSQLIcon />
                  Postgres
                </SkillButton>
                <SkillButton>
                  <MongoDBIcon />
                  MongoDB
                </SkillButton>
                <SkillButton>
                  <SVGIcon />
                  SVG Animations
                </SkillButton>
              </div>
            </div>
            {/*Frameworks*/}
            <div className="">
              <h3 className="text-xs font-figtree text-muted-foreground pt-3">
                {"<FRAMEWORKS/>"}
              </h3>
              <div className="flex flex-wrap gap-2 py-2">
                <SkillButton>
                  <ReactIcon />
                  ReactJs
                </SkillButton>
                <SkillButton>
                  <NextjsIcon />
                  NextJs
                </SkillButton>
                <SkillButton>
                  <ExpressJsIcon />
                  ExpressJs
                </SkillButton>
                <SkillButton>
                  <TailwindCSSIcon />
                  TailwindCSS
                </SkillButton>
                <SkillButton>
                  <MotionIcon />
                  Motion.dev
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
                  <BetterAuthIcon />
                  BetterAuth
                </SkillButton>
                <SkillButton>
                  <PrismaIcon />
                  Prisma
                </SkillButton>
                <SkillButton>
                  <DrizzleIcon />
                  Drizzle
                </SkillButton>
              </div>
            </div>
            {/*DEV OPS*/}
            <div className="">
              <h3 className="text-xs font-figtree text-muted-foreground pt-3">
                {"<DEV OPS/>"}
              </h3>
              <div className="flex flex-wrap gap-2 py-2">
                <SkillButton>
                  <SiVim />
                  Vim
                </SkillButton>
                <SkillButton>
                  <GitHubIcon2 />
                  Github Actions(CI/CD)
                </SkillButton>
                <SkillButton>
                  <AWSIcon />
                  AWS
                </SkillButton>
                <SkillButton>
                  <CloudflareIcon />
                  Cloudflare
                </SkillButton>
                <SkillButton>
                  <VercelIcon />
                  Vercel
                </SkillButton>
                <SkillButton>
                  <GitIcon />
                  Git
                </SkillButton>
                <SkillButton>
                  <GitHubIcon2 />
                  Github
                </SkillButton>
              </div>
            </div>
            {/*SOFTWARE*/}
            <div className="">
              <h3 className="text-xs font-figtree text-muted-foreground pt-3">
                {"<SOFTWARES/>"}
              </h3>
              <div className="flex flex-wrap gap-2 py-2">
                <SkillButton>
                  <PostmanIcon />
                  Postman
                </SkillButton>
                <SkillButton>
                  <FigmaIcon />
                  Figma
                </SkillButton>
                <SkillButton>
                  <IconBrandVscode />
                  VS Code
                </SkillButton>
                <SkillButton>
                  <CursorIdeIcon />
                  Cursor
                </SkillButton>
              </div>
            </div>
            <p className="text-xs font-figtree text-muted-foreground mt-8">
              Still Learning More New Things...
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SkillsPage;
