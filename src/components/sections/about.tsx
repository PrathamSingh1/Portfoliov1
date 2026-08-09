import {
  DMIcon,
  DocsIcon,
  EmailIcon,
  GitHubIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "../icons/icons";
import { Button } from "../ui/button";
import { HorizontalLine } from "../ui/horizontal-line";

export const About = () => {
  return (
    <div className="px-3.5 py-6 font-figtree relative text-sm text-muted-foreground leading-6">
      <div className="mb-6">
        <p className="">
          Yup! I’m a{" "}
          <span className="text-foreground font-medium">
            Full Stack Engineer
          </span>
          . Cool, right? Hold on — there’s more! I’m not just any
          developer,
        </p>
        <p>
          I’m also wired like a designer, pixels and pipelines both
          make sense to me.
        </p>
      </div>
      <div className="mb-4.5">
        <p className="">
          I love both{" "}
          <span className="text-foreground font-medium">Design</span>{" "}
          &{" "}
          <span className="text-foreground font-medium">
            Development
          </span>
          . so, That means I can
        </p>
        <p className="">
          create delightful interactions & functional websites. I'm
          always looking
        </p>
        <p>
          for new challenges and opportunities to grow as a developer.
        </p>
      </div>
      <div className="flex items-center gap-2 mb-4.5">
        <Button>
          <DMIcon />
          Twitter DM
        </Button>
        <span className="text-xs">OR</span>
        <Button>
          <EmailIcon />
          Email Me
        </Button>
      </div>
      <div className="">
        <h3 className="font-figtree text-base mb-4.5">
          Here are my{" "}
          <span className="font-medium text-foreground">socials</span>{" "}
          links
        </h3>
        <div className="flex items-center flex-wrap gap-3 md:gap-3.5 md:flex">
          <Button>
            <GitHubIcon />
            GitHub
          </Button>
          <Button>
            <TwitterIcon />
            Twitter
          </Button>
          <Button>
            <LinkedinIcon />
            Linkedin
          </Button>
          <Button>
            <PinterestIcon />
            Pinterest
          </Button>
          <Button>
            <DocsIcon />
            Resume
          </Button>
        </div>
      </div>
      <HorizontalLine className="bottom-0" />
    </div>
  );
};
