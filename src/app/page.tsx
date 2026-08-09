import { Banner } from "@/components/layout/banner";
import Container from "@/components/layout/container";
import { Profile } from "@/components/sections/profile";
import { HorizontalLine } from "@/components/ui/horizontal-line";
import { VerticalLine } from "@/components/ui/vertical-line";

export default function Home() {
  return (
    <Container>
      {/*VerticalLine*/}
      <VerticalLine className="left-[28%]" />
      <VerticalLine className="right-[28%]" />

      {/*HorizontalLine*/}
      <HorizontalLine className="top-[22vh]" />

      {/* Ultra-Tiny Solid Nodes */}
      {[
        { top: "22vh", left: "28%" },
        { top: "22vh", right: "28%" },
        { top: "calc(22vh + 112px)", left: "28%" },
        { top: "calc(22vh + 112px)", right: "28%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}

      {/*Box 1: Banner*/}
      <div className="h-[22vh] overflow-hidden">
        <Banner />
      </div>

      {/*Box 2: Profile section*/}
      <Profile />
      <HorizontalLine className="top-[calc(22vh+112px)]" />

      {/*Box 3: About section*/}
      
    </Container>
  );
}
