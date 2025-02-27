import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLAnchorAttributes } from "svelte/elements";

// type CardSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type CardSizeType = "sm" | "md" | "lg" | "xl" | "xs" | undefined;
type PaddingType = "sm" | "lg" | "md" | "xl" | "xs" | "none" | undefined;
type ShadowType = "sm" | "normal" | "lg" | "md" | "xl" | "2xl" | "inner" | undefined;
type ColorType = "gray" | "primary" | "secondary" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

// type ImgType = {
//   src?: string | undefined | null;
//   alt?: string | undefined | null;
// };

interface BaseCardProps {
  children: Snippet;
  horizontal?: boolean;
  color?: ColorType;
  target?: string;
  shadow?: ShadowType;
  reverse?: boolean;
  img?: string;
  padding?: PaddingType;
  size?: CardSizeType;
  class?: string;
  // onclick?: () => void;
  imgClass?: string;
  contentClass?: string;
}
type CardProps = BaseCardProps & (({ href: string } & HTMLAnchorAttributes) | ({ href?: never } & HTMLAttributes<HTMLDivElement>));

export { type CardProps };
