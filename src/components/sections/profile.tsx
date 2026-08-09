"use client";
import Image from "next/image";
import { ThemeToggle } from "../theme/theme-toggle";
import {
  IconCashBanknoteHeart,
  IconHeart,
} from "@tabler/icons-react";

export const Profile = () => {
  return (
    <div className="absolute left-0 right-0 top-[22vh] md:left-[28%] md:right-[28%]">
      <div className="flex justify-between">
        <div className="px-3 flex gap-5">
          <Image
            src="/assets/profile.jfif"
            alt="Profile picture"
            width={100}
            height={100}
            quality={90}
            priority
            fetchPriority="high"
            className="rounded-radius ring-2 ring-border mt-1"
          />
          <div>
            <h3 className="text-xs font-mono flex gap-2 items-center text-muted-foreground mt-4 mb-2">
              Hey It's me
              <IconHeart
                size={14}
                className="hover:fill-destructive hover:stroke-destructive"
              />
            </h3>
            <h1 className="text-2xl font-bold text-foreground leading-[16px] mb-2 tracking-tight">
              Pratham Singh
            </h1>
            <h2 className="text-base text-foreground tracking-normal">
              Full Stack Developer
            </h2>
          </div>
        </div>
        <div className="py-2 px-3">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
