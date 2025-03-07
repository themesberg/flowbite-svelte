import type { Snippet } from "svelte";
import type { HTMLSourceAttributes, HTMLTrackAttributes, HTMLVideoAttributes } from "svelte/elements";

interface VideoProps extends HTMLVideoAttributes {
  children?: Snippet;
  type?: HTMLSourceAttributes["type"];
  src?: HTMLSourceAttributes["src"];
  trackSrc?: HTMLTrackAttributes["src"];
  srclang?: HTMLTrackAttributes["lang"];
  label?: HTMLTrackAttributes["label"];
}

export { type VideoProps };
