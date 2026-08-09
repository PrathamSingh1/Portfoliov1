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
        "absolute left-0 right-0 md:left-[28%] md:right-[28%] px-3.5 py-3 font-inter text-lg font-bold leading-[16px]",
        className,
      )}
    >
      {children}
    </h1>
  );
};
