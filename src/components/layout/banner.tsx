import { cn } from "@/lib/utils";
import Image from "next/image";


export const Banner = ({ className }: {
  className?: string;
}) => {
  return (
    <div className={cn("", className)}>
      <Image src={"/banner/banner1.png"} />
    </div>
  )
}