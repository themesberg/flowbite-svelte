import type { HTMLAttributes } from "svelte/elements";
import type { HelperVariants } from "./theme";

interface HelperProps extends HelperVariants, Omit<HTMLAttributes<HTMLParagraphElement>, "color"> {
}

export { type HelperProps };
