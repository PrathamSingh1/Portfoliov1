import Container from "@/components/layout/container";
import { HorizontalLine } from "@/components/ui/horizontal-line";
import { VerticalLine } from "@/components/ui/vertical-line";

export default function Home() {
  return (
    <Container className="w-full">
      
      <VerticalLine className="left-[28%]" />
      <VerticalLine className="right-[28%]" />
      <HorizontalLine className="top-[22vh]" />
    </Container>
  );
}
