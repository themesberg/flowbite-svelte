<script lang="ts">
  import { getContext } from "svelte";
  import type { SizeType } from "$lib/types";
  import { type ButtonProps as Props, button } from ".";
  import clsx from "clsx";
  import { twMerge } from "tailwind-merge";

  const group: SizeType = getContext("group");

  let { children, pill, outline = false, size = group ? "sm" : "md", href, type = "button", color = group ? (outline ? "dark" : "alternative") : "primary", shadow = false, tag = "button", disabled, class: className, ...restProps }: Props = $props();

  const { base, outline: outline_, shadow: shadow_ } = $derived(button({ color, size, disabled, pill, group: !!group }));
  let btnCls = $derived(twMerge(base(), outline && outline_(), shadow && shadow_(), clsx(className)));
</script>

{#if href}
  <a {href} {...restProps} class={btnCls} role="button">
    {@render children?.()}
  </a>
{:else if tag === "button"}
  <button {type} {...restProps} class={btnCls} {disabled}>
    {@render children?.()}
  </button>
{:else}
  <svelte:element this={tag} {...restProps} class={btnCls}>
    {@render children?.()}
  </svelte:element>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:pill: any = false;
@props:outline: any = false;
@props:size: any = group ? "sm" : "md";
@props:href: any;
@props:type: any = "button";
@props:color: any = group ? (outline ? "dark" : "alternative") : "primary";
@props:shadow: any = false;
@props:tag: any = "button";
@props:disabled: any;
@props:class: string;
-->
