import { cn } from "@/lib/utils";

export const SkillButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0 bg-card-color text-foreground hover:bg-card-color-foreground py-2 h-[22px] px-1.5 text-xs hover:text-brand border dark:border-neutral-700/40 border-neutral-300/50 cursor-default font-inter",
        className,
      )}
    >
      {children}
    </button>
  );
};
