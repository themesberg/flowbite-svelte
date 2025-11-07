<script lang="ts">
  import clsx from "clsx";
  import type { CloseButtonProps } from "$lib/types";
  import { closeButton } from "./theme";
  import { useDismiss } from "./dismissable";

  let { children, color = "gray", onclick: onclickorg, name = "Close", ariaLabel, size = "md", class: className, svgClass, ...restProps }: CloseButtonProps = $props();

  const { base, svg } = $derived(closeButton({ color, size }));

  const context = useDismiss();

  function onclick(event: MouseEvent) {
    onclickorg?.(event);
    if (event.defaultPrevented) return;
    context?.dismiss?.(event);
  }
</script>

{#if restProps.href === undefined}
  <button type="button" {...restProps} class={base({ class: clsx(className) })} {onclick} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {#if children}
      {@render children()}
    {:else}
      <svg class={svg({ class: svgClass })} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
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
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    {/if}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CloseButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L147)
## Props
@prop children
@prop color = "gray"
@prop onclick: onclickorg
@prop name = "Close"
@prop ariaLabel
@prop size = "md"
@prop class: className
@prop svgClass
@prop ...restProps
-->
