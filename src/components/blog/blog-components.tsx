import Image from "next/image";
import React from "react";

import { CodeCopyButton } from "./code-copy-button";

export const BlogComponents = {
  img: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className="rounded-lg"
      {...props}
    />
  ),
  h1: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h1 className="mb-6 text-4xl font-instrument" {...props}>
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h2 className="mt-8 mb-4 text-3xl font-instrument" {...props}>
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h3 className="mt-6 mb-3 text-2xl font-instrument" {...props}>
      {children}
    </h3>
  ),
  h4: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h4 className="mt-6 mb-3 text-xl font-instrument" {...props}>
      {children}
    </h4>
  ),
  p: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <p
      className="text-muted-foreground mb-4 leading-7 font-figtree"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ul
      className="mb-4 ml-6 list-disc space-y-2 font-figtree"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ol
      className="mb-4 ml-6 list-decimal space-y-2 font-figtree"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <li
      className="text-muted-foreground leading-7 font-figtree"
      {...props}
    >
      {children}
    </li>
  ),
  pre: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === "string") {
        return node;
      }
      if (typeof node === "number") {
        return String(node);
      }
      if (
        React.isValidElement(node) &&
        node.props &&
        typeof node.props === "object"
      ) {
        return getTextContent(
          (node.props as { children?: React.ReactNode }).children,
        );
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join("");
      }
      return "";
    };

    const codeText = getTextContent(children);

    return (
      <div className="group relative mb-4">
        <pre
          className="bg-muted/30 overflow-x-auto rounded-lg border p-4 text-sm [&>code]:bg-transparent [&>code]:p-0"
          {...props}
        >
          {children}
        </pre>
        <CodeCopyButton code={codeText} />
      </div>
    );
  },
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
  }) => {
    if (className?.includes("language-")) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className="px-2 py-1 rounded font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    );
  },
  blockquote: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <blockquote
      className="border-primary text-muted-foreground mb-4 border-l-4 pl-4 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
};
