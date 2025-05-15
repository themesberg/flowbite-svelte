<script lang="ts">
  import { getContext } from "svelte";
  import { toolbarButton } from ".";
  import type { ToolbarButtonProps } from "$lib/types";
  import clsx from "clsx";

  const background = getContext("background");
  let { children, onclick, color, name, "aria-label": ariaLabel, size, class: className, ...restProps }: ToolbarButtonProps = $props();

  const buttonClass = $derived(
    toolbarButton({
      color,
      size,
      background: !!background,
      class: clsx(className)
    })
  );

  // let buttonClass: string = twMerge('focus:outline-hidden whitespace-normal', sizing[size], colors[color], color === 'default' && (background ? 'dark:hover:bg-gray-600' : 'dark:hover:bg-gray-700'), className);
</script>

{#if restProps.href === undefined}
  <button type="button" {...restProps} class={buttonClass} aria-label={ariaLabel ?? name} {onclick}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </button>
{:else}
  <a {...restProps} class={buttonClass} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToolbarButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1069)
## Props
@prop children
@prop onclick
@prop color
@prop name
@prop "aria-label": ariaLabel
@prop size
@prop class: className
@prop ...restProps
-->
