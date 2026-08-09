export const About = () => {
  return (
    <div className="absolute left-0 right-0 top-[calc(22vh+110px)] md:left-[28%] md:right-[28%] px-3 py-5 font-figtree text-sm leading-[16px] text-muted-foreground">
      <div className="mb-5">
        <p className="mb-2">
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
      <div className="mb-5">
        <p className="mb-2">
          I love both{" "}
          <span className="text-foreground font-medium">Design</span>{" "}
          &{" "}
          <span className="text-foreground font-medium">
            Development
          </span>
          . so, That means I can
        </p>
        <p className="mb-2">
          create delightful interactions & functional websites. I'm
          always looking
        </p>
        <p>
          for new challenges and opportunities to grow as a developer.
        </p>
      </div>
    </div>
  );
};
