import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type VideoVariants = VariantProps<typeof video> & Classes<typeof video>;

export const video = tv({
  slots: {
    base: "w-full",
    source: "",
    track: ""
  }
});
