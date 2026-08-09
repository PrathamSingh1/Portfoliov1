import { Banner } from "@/components/layout/banner";
import Container from "@/components/layout/container";
import { Profile } from "@/components/sections/profile";
import { VerticalLine } from "@/components/ui/vertical-line";

export default function Home() {
  return (
    <div className="relative">
      <div className="max-w-[700px] mx-auto absolute inset-0 h-full w-full">
        <VerticalLine className="left-0" />
        <VerticalLine className="right-0" />
      </div>
      <Container className="min-h-screen">
        <Banner />

        <Profile />
      </Container>
    </div>
  );
}
