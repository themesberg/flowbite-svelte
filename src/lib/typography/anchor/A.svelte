<script lang="ts">
  import clsx from "clsx";
  import { anchor } from "./index";
  import type { AnchorProps } from "$lib/types";

  let { children, color = "primary", asButton = false, onclick, href = "#", class: className, ...restProps }: AnchorProps = $props();

  let linkClass = $derived(anchor({ color, class: clsx(className) }));

  // Handle click events when in button mode
  function handleClick(event: MouseEvent) {
    if (asButton) {
      event.preventDefault(); // Prevent default anchor behavior
    }
    // Forward the onclick handler if provided
    if (onclick) {
      onclick(event);
    }
  }

  let buttonProps = $derived(() => {
    const { href, target, rel, download, ...filtered } = restProps;
    return filtered;
  });
</script>

{#if asButton}
  <!-- Render as a button that looks like a link -->
  <button type="button" class={linkClass} onclick={handleClick} {...buttonProps}>
    {@render children()}
  </button>
{:else}
  <!-- Standard anchor behavior -->
  <a {href} class={linkClass} onclick={handleClick} {...restProps}>
    {@render children()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AnchorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1688)
## Props
@prop children
@prop color = "primary"
@prop asButton = false
@prop onclick
@prop href = "#"
@prop class: className
@prop ...restProps
-->
