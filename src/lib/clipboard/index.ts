import type { HTMLButtonAttributes } from "svelte/elements";
import type { ClipboardVariants } from "./theme";
import type { Component, Snippet } from "svelte";
import type { ButtonProps } from "$lib/types";
import type { ButtonVariants } from "$lib/buttons/theme";

export interface ClipboardState {
    label?: string;
    icon?: Component | null;
    tooltip?: string
}

type ButtonOrButton =
    | { embedded: true } & Omit<HTMLButtonAttributes, "children">
    | { embedded: false } & ButtonProps

export interface ClipboardProps extends ClipboardVariants, ButtonVariants, Omit<HTMLButtonAttributes, "children" | "color" | "disabled"> {
    children: Snippet<[boolean]>;
    value?: string;
    success?: boolean;
    showLabel?: boolean;
    embedded?: boolean;
}