import { cn } from "@/lib/utils";
import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative max-w-9xl mx-auto min-h-screen",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
