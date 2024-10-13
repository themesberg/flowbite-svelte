import Heading from "./Heading.svelte";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { heading } from "./theme";

type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag?: TagType;
  class?: string;
}

export { Heading, heading, type HeadingProps };
