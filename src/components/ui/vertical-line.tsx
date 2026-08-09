import { cn } from "@/lib/utils";

export const VerticalLine = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      // Vertical Lines - Ultra-fine Micro Dots

      className={cn(
        "absolute inset-y-0 w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block",
        className,
      )}
      style={{
        maskImage:
          "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        WebkitMaskImage:
          "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
      }}
    ></div>
  );
};
