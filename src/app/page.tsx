import { Banner } from "@/components/layout/banner";
import Container from "@/components/layout/container";
import { Project } from "@/components/projects/project";
import { About } from "@/components/sections/about";
import { Blog } from "@/components/sections/blog";
import { GithubGraph } from "@/components/sections/github-graph";
import { Profile } from "@/components/sections/profile";
import { Skills } from "@/components/skills/skills";
import { VerticalLine } from "@/components/ui/vertical-line";
import { IconArrowAutofitRightFilled } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="relative">
      <div className="max-w-[700px] mx-auto absolute inset-0 h-full w-full">
        <VerticalLine className="left-0" />
        <VerticalLine className="right-0" />
      </div>
      <Container className="min-h-screen">
        <Banner />
        <Profile />
        <About />
        <GithubGraph />
        <Project />
        <Skills />
        <Blog
          title="A deep dive into React State Management"
          description="How react's state management works?"
          postedAt="July 29, 2026"
          buttonText={<IconArrowAutofitRightFilled size={18} />}
        />
      </Container>
    </div>
  );
}
