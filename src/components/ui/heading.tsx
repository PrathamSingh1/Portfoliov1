import { cn } from "@/lib/utils";

export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "font-inter text-lg font-bold leading-[16px]",
        className,
      )}
    >
      {children}
    </h1>
  );
};
