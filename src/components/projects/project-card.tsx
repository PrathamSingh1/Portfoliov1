import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IconArrowRightDashed } from "@tabler/icons-react";
import { GitHubIcon } from "../icons/icons";

type Technology = {
  icon: React.ReactNode;
  label: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  technologies?: Technology[];
  live: "Live" | "Building" | "Coming Soon";
  className?: string;
};

const liveStatusColor: Record<ProjectCardProps["live"], string> = {
  Live: "bg-chart-2",
  Building: "bg-yellow-500",
  "Coming Soon": "bg-foreground/30",
};

export const ProjectCard = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  technologies = [],
  live = "Live",
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "border border-dashed border-foreground/15 p-3 h-105 w-80 rounded-2xl overflow-hidden cursor-pointer group",
        className,
      )}
    >
      <div className="relative w-full aspect-[16/10] rounded-radius overflow-hidden bg-foreground/10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-center object-cover cursor-pointer brightness-70 hover:brightness-100 hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="pt-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[15px] font-medium text-foreground">
            {title}
          </h3>
          <span
            className={cn(
              "size-2 rounded-full",
              liveStatusColor[live],
            )}
          />
        </div>

        {(liveUrl || githubUrl) && (
          <div className="flex items-center mt-3 mb-2 gap-2">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-inter flex items-center gap-1 px-2 py-1 rounded-radius bg-card-color-foreground text-muted-foreground group-hover:text-foreground hover:bg-accent transition-colors duration-300"
              >
                Live
                <IconArrowRightDashed size={12} />
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-inter flex items-center gap-1 px-2 py-1 rounded-radius bg-card-color-foreground  text-muted-foreground group-hover:text-foreground hover:bg-accent transition-colors duration-300"
              >
                GitHub
                <GitHubIcon className="size-3" />
              </Link>
            )}
          </div>
        )}

        <p className="text-sm text-muted-foreground font-inter leading-normal">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="flex items-center gap-3 pt-2">
            <p className="text-sm text-foreground font-inter">
              Technologies:
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center cursor-pointer"
                  title={tech.label}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
