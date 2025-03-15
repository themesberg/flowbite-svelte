<script lang="ts">
  import clsx from "clsx";
  import { type CloseButtonProps as Props, closeButtonVariants } from "./index";

  let { children, color = "gray", onclick, name = "Close", ariaLabel, size = "md", class: className, ...restProps }: Props = $props();

  const { base, svg } = $derived(closeButtonVariants({ color, size }));
</script>

{#if restProps.href === undefined}
  <button type="button" {...restProps} class={base({ class: clsx(className) })} {onclick} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {#if children}
      {@render children()}
    {:else}
      <svg class={svg()} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    {/if}
  </button>
{:else}
  <a {...restProps} {onclick} class={base({ class: clsx(className) })} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {#if children}
      {@render children()}
    {:else}
      <svg class={svg()} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    {/if}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:color: any = "gray";
@props:onclick: any;
@props:name: any = "Close";
@props:ariaLabel: any;
@props:size: any = "md";
@props:class: string;
-->
