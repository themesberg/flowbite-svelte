import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type DropzoneVariants = VariantProps<typeof dropzone> & Classes<typeof dropzone>;

export const dropzone = tv({
  slots: {
    base: "flex flex-col justify-center items-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium",
    content: "",
    input: "hidden"
  }
});
