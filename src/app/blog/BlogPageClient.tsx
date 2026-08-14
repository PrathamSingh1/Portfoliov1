"use client";

import { BlogList } from "@/components/blog/blog-list";
import { Banner } from "@/components/layout/banner";
import Container from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { HorizontalLine } from "@/components/ui/horizontal-line";
import { VerticalLine } from "@/components/ui/vertical-line";
import { BlogPostPreview } from "@/types/blog";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPageClientProps {
  initialPosts: BlogPostPreview[];
  initialTags: string[];
}

const getBlogPostsByTagClient = (
  posts: BlogPostPreview[],
  tag: string,
): BlogPostPreview[] => {
  return posts.filter((post) =>
    post.frontmatter.tags.some(
      (postTag) => postTag.toLowerCase() === tag.toLowerCase(),
    ),
  );
};

export function BlogPageClient({
  initialPosts,
  initialTags,
}: BlogPageClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  useEffect(() => {
    const tagParam = searchParams.get("tag");
    if (tagParam) {
      setSelectedTag(tagParam);
      const filtered = getBlogPostsByTagClient(
        initialPosts,
        tagParam,
      );
      setFilteredPosts(filtered);
    } else {
      setSelectedTag(null);
      setFilteredPosts(initialPosts);
    }
  }, [searchParams, initialPosts]);

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
      setFilteredPosts(initialPosts);
      router.replace("/blog");
    } else {
      setSelectedTag(tag);
      const filtered = getBlogPostsByTagClient(initialPosts, tag);
      setFilteredPosts(filtered);
      router.replace(`/blog?tag=${encodeURIComponent(tag)}`);
    }
  };

  const getTagPostCount = (tag: string) => {
    return initialPosts.filter((post) =>
      post.frontmatter.tags.some(
        (postTag) => postTag.toLowerCase() === tag.toLowerCase(),
      ),
    ).length;
  };

  return (
    <div className="relative min-h-screen">
      <div className="max-w-[700px] mx-auto absolute inset-0 h-full w-full">
        <VerticalLine className="left-0" />
        <VerticalLine className="right-0" />
      </div>
      <HorizontalLine className="top-47" />

      <Container className="">
        <Banner />

        <div className="px-3.5 py-6">
          {/* Header */}
          <div className="flex items-center justify-between relative pb-6">
            <div className="">
              <Heading className="text-2xl font-figtree">
                Blogs
              </Heading>
              <p className="text-muted-foreground mx-auto max-w-2xl text-sm mt-2 font-figtree">
                Notes from the journey—things I’ve built, lessons I’ve
                learned, and ideas worth sharing.
              </p>
              <HorizontalLine className="bottom-0" />
            </div>

            <ThemeToggle />
          </div>

          <div className="">
            <BlogList posts={filteredPosts} />
          </div>
        </div>
      </Container>
    </div>
  );
}
