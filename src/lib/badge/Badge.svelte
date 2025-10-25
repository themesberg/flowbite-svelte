<script lang="ts">
  import { type BadgeProps, type ParamsType } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { fade } from "svelte/transition";
  import { badge } from "./theme";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let { children, icon, badgeStatus = $bindable(true), color = "primary", large = false, dismissable = false, class: className, classes, border, href, target, rounded, transition = fade, params, aClass, ...restProps }: BadgeProps = $props();

  warnThemeDeprecation("Badge", { aClass }, { aClass: "linkClass" });

  const styling = $derived(classes ?? { linkClass: aClass });

  // Theme context
  const theme = getTheme("badge");

  const { base, linkClass } = $derived(badge({ color, size: large ? "large" : "small", rounded, border }));

  let ref: HTMLDivElement | undefined = $state(undefined);

  const close = (ev: Event) => {
    if (ref?.dispatchEvent(new Event("close", { bubbles: true, cancelable: true }))) {
      badgeStatus = false;
    }
  };

  createDismissableContext(close);
</script>

{#if badgeStatus}
  <div {...restProps} bind:this={ref} transition:transition={params as ParamsType} class={base({ class: clsx(theme?.base, className) })}>
    {#if href}
      <a {href} {target} class={linkClass({ class: clsx(theme?.linkClass, styling.linkClass) })}>
        {@render children()}
      </a>
    {:else}
      {@render children()}
    {/if}

    {#if dismissable}
      {#if icon}
        <CloseButton class="ms-1.5 -me-1.5" {color} size={large ? "sm" : "xs"} ariaLabel="Remove badge">
          {@render icon()}
        </CloseButton>
      {:else}
        <CloseButton class="ms-1.5 -me-1.5" {color} size={large ? "sm" : "xs"} ariaLabel="Remove badge" />
      {/if}
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BadgeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L215)
## Props
@prop children
@prop icon
@prop badgeStatus = $bindable(true)
@prop color = "primary"
@prop large = false
@prop dismissable = false
@prop class: className
@prop classes
@prop border
@prop href
@prop target
@prop rounded
@prop transition = fade
@prop params
@prop aClass
@prop ...restProps
-->
