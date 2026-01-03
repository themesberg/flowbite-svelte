<script lang="ts">
  import { type BadgeProps, type ParamsType } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import { fade } from "svelte/transition";
  import { prefersReducedMotion } from "svelte/motion";
  import { badge } from "./theme";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let {
    children,
    icon,
    badgeStatus = $bindable(true),
    color = "brand",
    large = false,
    dismissable = false,
    class: className,
    classes,
    border,
    href,
    target,
    rounded,
    transition = fade,
    params,
    closeButtonProps,
    ...restProps
  }: BadgeProps = $props();

  const styling = $derived(classes);

  // Theme context
  const theme = $derived(getTheme("badge"));

  const { base, link } = $derived(badge({ color, size: large ? "large" : "small", rounded, border, href: !!href }));

  const size: "sm" | "xs" = $derived(large ? "sm" : "xs");
  const finalCloseProps = $derived({
    class: clsx("ms-1", closeButtonProps?.class),
    size: closeButtonProps?.size ?? size,
    color: closeButtonProps?.color ?? color,
    ariaLabel: closeButtonProps?.ariaLabel ?? "Remove badge",
    classes: closeButtonProps?.classes,
    name: closeButtonProps?.name,
    onclick: closeButtonProps?.onclick
  });

  // Check if running in browser to avoid SSR issues
  const isBrowser = typeof window !== "undefined";

  // Respect reduced motion preference by setting duration to 0
  const effectiveParams = $derived(isBrowser && prefersReducedMotion.current ? { ...params, duration: 0 } : params);

  let ref: HTMLDivElement | undefined = $state(undefined);

  const close = () => {
    if (ref?.dispatchEvent(new Event("close", { bubbles: true, cancelable: true }))) {
      badgeStatus = false;
    }
  };

  createDismissableContext(close);
</script>

{#if badgeStatus}
  <div data-scope="badge" data-part="base" {...restProps} bind:this={ref} transition:transition={effectiveParams as ParamsType} class={base({ class: clsx(theme?.base, className) })}>
    {#if href}
      <a {href} {target} class={link({ class: clsx(theme?.link, styling?.link) })}>
        {@render children()}
      </a>
    {:else}
      {@render children()}
    {/if}

    {#if dismissable}
      {#if icon}
        <CloseButton {...finalCloseProps}>
          {@render icon()}
        </CloseButton>
      {:else}
        <CloseButton {...finalCloseProps} />
      {/if}
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BadgeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L264)
## Props
@prop children
@prop icon
@prop badgeStatus = $bindable(true)
@prop color = "brand"
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
@prop closeButtonProps
@prop ...restProps
-->
