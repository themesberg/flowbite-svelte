import type { ButtonProps } from "$lib/buttons";
import type { PopperProps } from "$lib/utils/Popper.svelte";
import type { Placement } from "@floating-ui/utils";
import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export interface SpeedCtxType {
    pill: boolean;
    tooltip: Placement | "none";
    textOutside: boolean;
}

export interface SpeedDialProps extends Omit<ButtonProps, "ontoggle" | "onbeforetoggle"> {
    children: Snippet;
    icon?: Snippet;
    button?: Snippet;
    defaultClass?: string;
    popperDefaultClass?: string;
    placement?: Placement;
    pill?: boolean;
    tooltip?: Placement | 'none';
    trigger?: PopperProps["trigger"];
    textOutside?: boolean;
    name?: string;
    gradient?: boolean;
    ontoggle?: PopperProps["ontoggle"];
    onbeforetoggle?: PopperProps["onbeforetoggle"]
};

export interface SpeedDialButtonProps extends ButtonProps {
    defaultClass?: string;
    name?: string;
    tooltip?: Placement | "none";
    pill?: boolean;
    textOutside?: boolean;
    textOutsideClass?: string;
    textDefaultClass?: string;
};