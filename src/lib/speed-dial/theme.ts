// Dial
import { tv, type VariantProps } from "tailwind-variants";

export type SpeedDialVariants = VariantProps<typeof speed_dial>;

export const speed_dial = tv({
    slots: {
        base: "group fixed end-6 bottom-6",
        popper: "flex items-center gap-2 bg-transparent text-inherit"
    },
    variants: {
        vertical: {
            true: { popper: 'flex-col' }
        }
    },
    defaultVariants: {
    }
});

// Button
export type SpeedDialButtonVariants = VariantProps<typeof speed_dial_button>;

export const speed_dial_button = tv({
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
        },
        tooltip: {
            true: {
                base: "flex-col"
            }
        }
    },
    defaultVariants: {
    }
});