"use client";
import Image from "next/image";
import { ThemeToggle } from "../theme/theme-toggle";
import { IconHeart } from "@tabler/icons-react";
import { HorizontalLine } from "../ui/horizontal-line";

export const Profile = () => {
  return (
    <div className="py-1.5 relative mb-1.5">
      <HorizontalLine className="top-0" />

      <div className="flex justify-between">
        <div className="px-3.5 flex gap-6">
          <Image
            src="/assets/profile.jpg"
            alt="Profile picture"
            width={100}
            height={100}
            quality={90}
            priority
            fetchPriority="high"
            className="rounded-radius ring-2 ring-border mt-1.5"
          />
          <div>
            <h3 className="text-xs font-mono flex gap-2 items-center text-muted-foreground mt-4 mb-2">
              Hey It's me
              <IconHeart
                size={14}
                className="hover:fill-destructive hover:stroke-destructive cursor-pointer"
              />
            </h3>
            <h1 className="text-2xl font-bold text-foreground font-inter leading-[16px] mb-2 tracking-tight">
              Pratham Singh
            </h1>
            <h2 className="text-base text-foreground font-inter tracking-normal">
              Full Stack Developer
            </h2>
          </div>
        </div>
        <div className="py-2 px-3.5">
          <ThemeToggle />
        </div>
      </div>
      <HorizontalLine className="-bottom-1.5" />
    </div>
  );
};
