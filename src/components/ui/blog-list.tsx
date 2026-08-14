import { cn } from "@/lib/utils";
import { IconCalendar } from "@tabler/icons-react";
import React from "react";

export interface BlogListProps {
  title: string;
  description: string;
  postedAt: string;
  buttonText: React.ReactNode;
  className?: string;
}

export const BlogList = ({
  title,
  description,
  postedAt,
  buttonText,
  className,
}: BlogListProps) => {
  return (
    <div className={cn("font-inter pt-6", className)}>
      <div className="flex items-center justify-between group cursor-pointer">
        <div className="">
          <h2 className="group-hover:text-foreground/80 transition-colors duration-200">
            {title}
          </h2>
          <p className="text-sm font-inter text-muted-foreground">
            {description}
          </p>
          <p className="text-xs flex items-center gap-2 text-muted-foreground mt-1">
            <IconCalendar size={14} />
            {postedAt}
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground/80 transition-colors duration-200">
          Read more
          {buttonText}
        </button>
      </div>
    </div>
  );
};
