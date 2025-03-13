<script lang="ts">
  import { getContext } from "svelte";
  import { type ToolbarButtonProps as Props, toolbarButton } from "./";
  import clsx from "clsx";

  const background = getContext("background");
  let { children, color, name, "aria-label": ariaLabel, size, class: className, ...restProps }: Props = $props();

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
  <button type="button" {...restProps} class={buttonClass} aria-label={ariaLabel ?? name}>
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
## Props
@props: children: any;
@props:color: any;
@props:name: any;
@props:"aria-label": any;
@props:size: any;
@props:class: string;
-->
