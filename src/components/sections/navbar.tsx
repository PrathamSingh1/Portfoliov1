import Link from "next/link";

export const Navbar = () => {
  return (
    <div
      id="navigation-menu"
      className="fixed bottom-4 left-1/2 h-fit -translate-x-1/2 font-inter text-[10px] rounded-radius px-5 py-1.5 sm:bottom-8 border border-border/50 bg-background/60 shadow-md backdrop-blur-md z-[999]"
    >
      <div className="flex flex-row gap-8">
        <div className="relative">
          <Link href="/">
            <div className="flex flex-col items-center justify-center transition-all duration-200 scale-110 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18px"
                height="18px"
                viewBox="0 0 32 32"
              >
                <polygon
                  points="30.168 14.404 16 3.272 1.832 14.404 .596 12.832 16 .728 31.404 12.832 30.168 14.404"
                  fill="rgba(115, 115, 115, 1)"
                  strokeWidth="0"
                  data-color="color-2"
                ></polygon>
                <path
                  d="m16,5.815L4,15.244v10.756c0,2.206,1.794,4,4,4h5v-9h6v9h5c2.206,0,4-1.794,4-4v-10.756l-12-9.429Z"
                  strokeWidth="0"
                  fill="rgba(115, 115, 115, 1)"
                ></path>
              </svg>
              <span className="text-xxs font-medium">Home</span>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/projects">
            <div className="flex flex-col items-center justify-center transition-all duration-200 dark:text-muted-foreground text-foreground/60 dark:hover:text-primary/80 hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                className="mb-0.5 opacity-30"
              >
                <path
                  d="m16.414,2H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V7.586l-5.586-5.586Zm-2.414,3h2v4h-2v-4Zm4,14H6v-6h12v6Z"
                  strokeWidth="0"
                  fill="rgba(115, 115, 115, 1)"
                ></path>
              </svg>
              <span className="text-xxs font-medium">Project</span>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/components">
            <div className="flex flex-col items-center justify-center transition-all duration-200 dark:text-muted-foreground text-foreground/60 dark:hover:text-primary/80 hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                className="mb-0.5 opacity-30"
              >
                <rect
                  x="2"
                  y="2"
                  width="9"
                  height="9"
                  rx="2"
                  ry="2"
                  strokeWidth="0"
                  fill="rgba(115, 115, 115, 1)"
                ></rect>
                <rect
                  x="2"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  ry="2"
                  fill="rgba(115, 115, 115, 1)"
                  strokeWidth="0"
                  data-color="color-2"
                ></rect>
                <rect
                  x="13"
                  y="2"
                  width="9"
                  height="9"
                  rx="2"
                  ry="2"
                  fill="rgba(115, 115, 115, 1)"
                  strokeWidth="0"
                  data-color="color-2"
                ></rect>
                <rect
                  x="13"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  ry="2"
                  strokeWidth="0"
                  fill="rgba(115, 115, 115, 1)"
                ></rect>
              </svg>
              <span className="text-xxs font-medium">Component</span>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/skills">
            <div className="flex flex-col items-center justify-center transition-all duration-200 dark:text-muted-foreground text-foreground/60 dark:hover:text-primary/80 hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18px"
                height="18px"
                viewBox="0 0 32 32"
                className="mb-0.5 opacity-30"
              >
                <polygon
                  points="16 24.136 1.646 16.406 2.594 14.646 16 21.864 29.406 14.646 30.354 16.406 16 24.136"
                  fill="rgba(115, 115, 115, 1)"
                  strokeWidth="0"
                  data-color="color-2"
                ></polygon>
                <polygon
                  points="16 30.136 1.646 22.406 2.594 20.646 16 27.864 29.406 20.646 30.354 22.406 16 30.136"
                  fill="rgba(115, 115, 115, 1)"
                  strokeWidth="0"
                  data-color="color-2"
                ></polygon>
                <polygon
                  points="16 1.864 .891 10 16 18.136 31.109 10 16 1.864"
                  strokeWidth="0"
                  fill="rgba(115, 115, 115, 1)"
                ></polygon>
              </svg>
              <span className="text-xxs font-medium">Skills</span>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/blogs">
            <div className="flex flex-col items-center justify-center transition-all duration-200 dark:text-muted-foreground text-foreground/60 dark:hover:text-primary/80 hover:text-foreground">
              <svg
                height="18px"
                width="18px"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-0.5 opacity-30"
              >
                <g fill="#737373">
                  <path
                    d="M4.25 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z"
                    fill="#737373"
                    fillOpacity="0.3"
                    stroke="none"
                  ></path>
                  <path
                    d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.094"
                    fill="none"
                    stroke="#737373"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  ></path>
                  <path
                    d="M4.25 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z"
                    fill="none"
                    stroke="#737373"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  ></path>
                </g>
              </svg>
              <span className="text-xxs font-medium">Blog</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
