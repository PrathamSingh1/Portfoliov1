import { cn } from "@/lib/utils";

export const HorizontalLine = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute inset-x-0 h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen",
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
