import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BlogPostPreview } from "@/types/blog";
import { IconArrowRight, IconCalendar } from "@tabler/icons-react";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface BlogCardProps {
  post: BlogPostPreview;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;
  const { title, description, image, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="group relative flex items-center justify-between h-full w-full">
      <div>
        <CardContent>
          <div className="">
            <Link href={`/blog/${slug}`}>
              <h3 className="transition-colors duration-200 text-sm font-figtree text-foreground">
                {title}
              </h3>
            </Link>
            <p className="text-sm font-figtree text-muted-foreground py-1 line-clamp-3">
              {description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex w-full flex-col space-y-3">
            <div className="mt-1 flex items-center justify-between gap-2">
              <time
                className="text-muted-foreground font-figtree flex items-center gap-2 text-xs"
                dateTime={date}
              >
                <IconCalendar size={14} />
                {formattedDate}
              </time>
            </div>
          </div>
        </CardFooter>
      </div>
      <div>
        <Link
          href={`/blog/${slug}`}
          className="text-foreground/80 hover:text-foreground font-figtree text-sm flex items-center justify-center gap-2"
        >
          Read More
          <IconArrowRight size={16} />
        </Link>
      </div>
      <div className="absolute inset-0 top-6 bottom-6 -mx-3 -my-3 rounded-xl dark:bg-muted bg-muted-foreground/30 opacity-0 duration-300 group-hover:opacity-20 pointer-events-none"></div>
    </Card>
  );
}
