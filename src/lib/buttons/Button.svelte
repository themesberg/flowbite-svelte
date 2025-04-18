<script lang="ts">
  import { getContext } from "svelte";
  import type { SizeType } from "$lib/types";
  import { button } from ".";
  import type { ButtonProps } from "$lib/types";
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
## Type
[ButtonProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L338)
## Props
@prop children
@prop onclick
@prop pill
@prop outline = false
@prop size = group ? "sm" : "md"
@prop color = group ? (outline ? "dark" : "alternative") : "primary"
@prop shadow = false
@prop tag = "button"
@prop disabled
@prop class: className
@prop ...restProps
-->
