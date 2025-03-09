import { tv } from "tailwind-variants";

export const checkButton = tv({
    base: "",
    variants: {
        inline: {
            true: "inline-flex",
            false: "flex"
        },
        checked: {
            true: 'outline-4 outline-green-500',
        }
    },
    defaultVariants: {
        inline: true
    }
});
