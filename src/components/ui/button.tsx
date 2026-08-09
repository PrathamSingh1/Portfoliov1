import { cn } from "@/lib/utils";

export const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-radius font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-card-color text-foreground hover:bg-card-color-foreground cursor-pointer py-2 dark:shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] h-6 px-2.5 text-xs hover:text-brand shadow-[0px_32px_64px_-16px_#0000001a,0px_16px_32px_-8px_#0000001a,0px_8px_16px_-4px_#00000014,0px_4px_8px_-2px_#00000014,0px_-8px_16px_-1px_#0000000d,0px_2px_4px_-1px_#00000014,0px_0px_0px_1px_#00000014,inset_0px_0px_0px_1px_#00000008,inset_0px_1px_0px_#ffffff]",
        className,
      )}
    >
      {children}
    </button>
  );
};
