<script lang="ts">
  import { getContext } from "svelte";
  import { badge } from "./index";
  import type { BadgeProps } from "$lib/types";
  import { CloseButton } from "$lib";
  import { fade } from "svelte/transition";
  import type { ParamsType, BaseThemes } from "$lib/types";
  import clsx from "clsx";

  let { children, icon, badgeStatus = $bindable(true), color = "primary", large = false, dismissable = false, class: className, border, href, target, rounded, transition = fade, params, aClass, onclose, ...restProps }: BadgeProps = $props();

  // Get merged theme from context
  const context = getContext<BaseThemes>("themeConfig");
  // Use context theme if available, otherwise fallback to default
  const badgeTheme = context?.badge || badge;

  const { base, hrefClass } = $derived(badgeTheme({ color, size: large ? "large" : "small", rounded, border }));

  const close = (ev: MouseEvent) => {
    onclose?.(ev);
    if (!ev.defaultPrevented) badgeStatus = false;
  };
</script>

{#if badgeStatus}
  <div {...restProps} transition:transition={params as ParamsType} class={base({ class: clsx(className) })}>
    {#if href}
      <a {href} {target} class={hrefClass({ class: aClass })}>
        {@render children()}
      </a>
    {:else}
      {@render children()}
    {/if}

    {#if dismissable}
      {#if icon}
        <button type="button" class="text-primary-500 hover:bg-primary-200 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300 m-0.5 ms-1.5 -me-1.5 rounded-sm p-0.5 whitespace-normal focus:ring-1 focus:outline-hidden" aria-label="Remove badge" onclick={close}>
          <span class="sr-only">Remove badge</span>
          {@render icon()}
        </button>
      {:else}
        <CloseButton class="ms-1.5 -me-1.5" {color} size={large ? "sm" : "xs"} ariaLabel="Remove badge" onclick={close} />
      {/if}
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BadgeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L212)
## Props
@prop children
@prop icon
@prop badgeStatus = $bindable(true)
@prop color = "primary"
@prop large = false
@prop dismissable = false
@prop class: className
@prop border
@prop href
@prop target
@prop rounded
@prop transition = fade
@prop params
@prop aClass
@prop onclose
@prop ...restProps
-->
