<script lang="ts">
  import { getContext } from "svelte";
  import type { SizeType } from "$lib/types";
  import { type ButtonProps, button } from ".";
  import clsx from "clsx";
  import { twMerge } from "tailwind-merge";

  const group: SizeType = getContext("group");

  let { children, onclick, pill, outline = false, size = group ? "sm" : "md", color = group ? (outline ? "dark" : "alternative") : "primary", shadow = false, tag = "button", disabled, class: className, ...restProps }: ButtonProps = $props();

  const { base, outline: outline_, shadow: shadow_ } = $derived(button({ color, size, disabled, pill, group: !!group }));
  let btnCls = $derived(twMerge(base(), outline && outline_(), shadow && shadow_(), clsx(className)));
</script>

{#if restProps.href === undefined}
  <button type="button" {...restProps} class={btnCls} {disabled} {onclick}>
    {@render children?.()}
  </button>
{:else if restProps.href}
  <a {...restProps} class={btnCls} role="button">
    {@render children?.()}
  </a>
{:else}
  <svelte:element this={tag} {...restProps} class={btnCls}>
    {@render children?.()}
  </svelte:element>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:onclick: any;
@props:pill: any;
@props:outline: any = false;
@props:size: any = group ? "sm" : "md";
@props:color: any = group ? (outline ? "dark" : "alternative") : "primary";
@props:shadow: any = false;
@props:tag: any = "button";
@props:disabled: any;
@props:class: string;
-->
