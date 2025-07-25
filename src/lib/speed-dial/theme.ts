// Dial
import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";
import type { Classes } from "$lib/theme/themeUtils";

export type SpeedDialVariants = VariantProps<typeof speedDial> & Classes<typeof speedDial>;
export type SpeedDialButtonVariants = VariantProps<typeof speedDialButton> & Classes<typeof speedDialButton>;
// Theme
export type SpeedDialSlots = keyof typeof speedDial.slots;
export type SpeedDialTheme = Partial<Record<SpeedDialSlots, ClassValue>>;
export type SpeedDialButtonSlots = keyof typeof speedDialButton.slots;
export type SpeedDialButtonTheme = Partial<Record<SpeedDialButtonSlots, ClassValue>>;

export const speedDial = tv({
  slots: {
    base: "group bg-transparent",
    popper: "flex items-center gap-2 bg-transparent text-inherit"
  },
  variants: {
    vertical: {
      true: { popper: "flex-col" }
    }
  },
  defaultVariants: {
    vertical: false
  }
});

export const speedDialButton = tv({
  slots: {
    base: "w-[52px] h-[52px] shadow-xs p-0",
    span: "block mb-px text-xs font-medium"
  },
  variants: {
    textOutside: {
      true: {
        base: "relative",
        span: "absolute -start-12 top-1/2 mb-px text-sm font-medium -translate-y-1/2"
      }
    }
  },
  defaultVariants: {}
});
