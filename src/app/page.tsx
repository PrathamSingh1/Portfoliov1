import { Banner } from "@/components/layout/banner";
import Container from "@/components/layout/container";
import { HorizontalLine } from "@/components/ui/horizontal-line";
import { VerticalLine } from "@/components/ui/vertical-line";

export default function Home() {
  return (
    <Container className="w-full">
      <VerticalLine className="left-[28%]" />
      <VerticalLine className="right-[28%]" />
      <HorizontalLine className="top-[22vh]" />
      <div className="h-[22vh] overflow-hidden">
        <Banner className="h-[22vh]" />
      </div>
    </Container>
  );
}
