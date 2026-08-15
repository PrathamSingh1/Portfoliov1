import { Button } from "@/components/core/ui/button";
import { Banner } from "@/components/layout/banner";
import Container from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Heading } from "@/components/ui/heading";
import { HorizontalLine } from "@/components/ui/horizontal-line";
import { VerticalLine } from "@/components/ui/vertical-line";
import { IconExternalLink, IconReceipt } from "@tabler/icons-react";
import { Download } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

const resumePath = "/Shashi-Ranjan-Singh-Resume.pdf";

export const metadata: Metadata = {
  title: "Resume | Pratham Singh",
  description:
    "Resume of Pratham Singh, full-stack developer and design engineer.",
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-[700px] pointer-events-none mx-auto absolute inset-0 h-full w-full">
        <VerticalLine className="left-0" />
        <VerticalLine className="right-0" />
      </div>
      <HorizontalLine className="top-47" />

      <Container className="">
        <Banner />

        <div className="px-3.5 py-6 pb-30">
          {/* Header */}
          <div className="flex items-center justify-between relative pb-6">
            <div className="">
              <Heading className="text-2xl font-figtree">
                Resume
              </Heading>
              <p className="text-muted-foreground mx-auto max-w-2xl text-sm mt-2 font-figtree">
                A single sheet of paper can decide your career path
                though.
              </p>
              <HorizontalLine className="bottom-0" />
            </div>

            <ThemeToggle />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-radius border border-black/10 bg-zinc-50 text-zinc-500 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-zinc-400">
                <IconReceipt className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-figtree font-semibold text-foreground">
                  Shashi Ranjan Singh Resume
                </p>
                <p className="text-[11px] text-muted-foreground font-figtree">
                  PDF document
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume in a new tab"
                title="Open in new tab"
                className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-black/10 bg-zinc-50 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-zinc-400 dark:hover:bg-[#121214] dark:hover:text-zinc-100"
              >
                <IconExternalLink className="h-4 w-4" />
              </a>
              <a
                href={resumePath}
                download="Shashi-Ranjan-Singh-Resume.pdf"
                aria-label="Download resume"
                title="Download resume"
              >
                <Button className="px-3 py-4 bg-background">
                  <span className="flex items-center gap-1.5">
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </span>
                </Button>
              </a>
            </div>
          </div>

          <div className="relative aspect-[8.5/11] w-full overflow-hidden rounded-[6px] border border-black/10 bg-white shadow-sm dark:border-white/10">
            <Image
              src="/Shashi-Ranjan-Singh-Resume.png"
              alt="Shashi Ranjan Singh resume"
              fill
              preload
              sizes="(min-width: 768px) 40vw, 100vw"
              quality={100}
              className="object-contain"
            />
          </div>

          <div className="relative mt-8">
            <div
              className="pointer-events-none absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
          </div>

          <div></div>
        </div>
      </Container>
    </div>
  );
}
