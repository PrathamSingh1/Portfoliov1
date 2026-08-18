import { getPublishedBlogPosts } from "@/lib/blog";

import { BlogCard } from "../blog/blog-card";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { HorizontalLine } from "../ui/horizontal-line";
import { Heading } from "../ui/heading";

export default function Blog({ className }: { className?: string }) {
  const posts = getPublishedBlogPosts();

  return (
    <div className={cn("relative px-3.5 py-3 pb-30", className)}>
      <Heading>Blogs</Heading>
      <HorizontalLine className="top-[40px]" />
      <div className="py-3">
        {posts.slice(0, 2).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="relative flex justify-center items-center">
        {/* line sits behind, vertically centered in this wrapper */}
        <HorizontalLine className="top-1/2 -translate-y-1/2 bg-foreground/40 z-0" />
        <Link
          href="/blogs"
          className="relative z-10 text-sm font-inter bg-accent px-3 py-2 rounded-radius text-muted-foreground hover:text-foreground transition-colors"
        >
          View all →
        </Link>
      </div>
    </div>
  );
}
