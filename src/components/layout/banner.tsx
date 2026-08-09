import { cn } from "@/lib/utils";
import Image from "next/image";

export const Banner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative bg-background shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)] w-full -z-0 select-none",
        className,
      )}
    >
      <Image
        src={"/banner/banner1.png"}
        alt="banner image"
        height={222}
        width={841}
        fetchPriority="high"
        quality={100}
        className="object-cover object-center"
      />
      <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-5 bg-linear-to-t from-white/80 to-transparent dark:from-black/50 dark:to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-linear-to-r from-white/40 to-transparent dark:from-black/40 dark:to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-linear-to-l from-white/40 to-transparent dark:from-black/40 dark:to-transparent" />
    </div>
  );
};
