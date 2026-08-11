import { cn } from "@/lib/utils";
import { HorizontalLine } from "../ui/horizontal-line";
import { Heading } from "../ui/heading";
import { Button } from "../ui/button";
import { SkillButton } from "../ui/skill-button";
import { ReactIcon } from "../icons/icons";

export const Skills = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative px-3.5 py-3", className)}>
      <HorizontalLine className="top-0" />
      <Heading>Skills</Heading>
      <div className="mb-6">
        <HorizontalLine className="top-[40px]" />
      </div>
      <div>
        <SkillButton>
          <ReactIcon />
          React
        </SkillButton>
      </div>
    </div>
  );
};
