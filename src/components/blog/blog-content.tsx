import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BlogFrontmatter } from "@/types/blog";
import rehypeHighlight from "@shikijs/rehype";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import { BlogComponents } from "./blog-components";
import { IconCalendar } from "@tabler/icons-react";

interface BlogContentProps {
  frontmatter: BlogFrontmatter;
  content: string;
}

export function BlogContent({
  frontmatter,
  content,
}: BlogContentProps) {
  const { title, description, image, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <header className="mb-8 py-6 px-3.5">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="py-6">
          <h1 className="text-3xl font-instrument lg:text-5xl leading-[60px]">
            {title}
          </h1>

          <p className="text-muted-foreground font-figtree text-xl">
            {description}
          </p>

          <div className="text-muted-foreground flex items-center gap-2 mt-4 text-sm">
            <IconCalendar size={14} />
            <time dateTime={date}>{formattedDate}</time>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none px-3.5">
        <MDXRemote
          source={content}
          components={BlogComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeHighlight,
                  {
                    theme: "vesper",
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
