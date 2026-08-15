import { BlogContent } from "@/components/blog/blog-content";
import { BlogList } from "@/components/blog/blog-list";
import { Banner } from "@/components/layout/banner";
import Container from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { HorizontalLine } from "@/components/ui/horizontal-line";
import { Separator } from "@/components/ui/separator";
import { VerticalLine } from "@/components/ui/vertical-line";
import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  getRelatedPosts,
} from "@/lib/blog";
import { IconArrowBack, IconArrowBackUp } from "@tabler/icons-react";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.frontmatter.isPublished) {
    return {
      title: "Post Not Found",
    };
  }

  const { title, description, image } = post.frontmatter;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.frontmatter.isPublished) {
    notFound();
  }
  const relatedPosts = await getRelatedPosts(slug, 3);

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none max-w-[700px] mx-auto absolute inset-0 h-full w-full">
        <VerticalLine className="left-0" />
        <VerticalLine className="right-0" />
      </div>
      <HorizontalLine className="top-47" />
      <Container className="">
        <Banner />

        <div className="">
          {/* Back Button */}
          <div className="py-6 px-3.5 flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center w-fit gap-2"
            >
              <button
                data-slot="button"
                data-variant="ghost"
                data-size="default"
                className="group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 group cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-4"
                >
                  <path d="M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,45.66L51.31,80H168A64.07,64.07,0,0,1,232,144Z"></path>
                </svg>
                <span>Blogs</span>
              </button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Blog Content */}
          <BlogContent
            frontmatter={post.frontmatter}
            content={post.content}
          />

          <HorizontalLine />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="py-6 px-3.5">
              <Separator />
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">
                  Related Posts
                </h2>
                <BlogList posts={relatedPosts} />
              </div>
            </div>
          )}

          {/* Back to Blog CTA */}
          <div className="text-center">
            <Separator className="mb-8" />
            <Button
              size="sm"
              className="rounded-radius px-2 py-1.5 text-sm font-medium"
            >
              <Link href="/blog">View All Blogs</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
