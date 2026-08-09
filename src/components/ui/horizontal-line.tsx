import { cn } from "@/lib/utils";

export const HorizontalLine = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 right-0 h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none",
        className,
      )}
      style={{
        maskImage:
          "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        WebkitMaskImage:
          "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
      }}
    />
  );
};
