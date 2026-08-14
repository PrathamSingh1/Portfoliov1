import { BlogList, BlogListProps } from "@/components/ui/blog-list";
import { cn } from "@/lib/utils";
import { Heading } from "../ui/heading";
import { HorizontalLine } from "../ui/horizontal-line";

export const Blog = ({
  title,
  description,
  postedAt,
  buttonText,
  className,
}: BlogListProps) => {
  return (
    <div className={cn("relative px-3.5 py-3", className)}>
      <Heading>Blogs</Heading>
      <HorizontalLine className="top-[40px]" />
      <BlogList
        title={title}
        description={description}
        postedAt={postedAt}
        buttonText={buttonText}
      />
      <BlogList
        title={title}
        description={description}
        postedAt={postedAt}
        buttonText={buttonText}
      />
    </div>
  );
};
