<script lang="ts">
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import type { ParamsType, ToastProps } from "$lib/types";
  import { toast } from "./theme";
  import { fly } from "svelte/transition";
  import { prefersReducedMotion } from "svelte/motion";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let {
    children,
    icon,
    toastStatus = $bindable(true),
    dismissable = true,
    color = "primary",
    position,
    align = true,
    params,
    transition = fly,
    class: className,
    classes,
    ...restProps
  }: ToastProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("toast"));

  const { base, icon: iconVariants, content, close } = $derived(toast({ color, position, align }));

  // Check if running in browser to avoid SSR issues
  const isBrowser = typeof window !== "undefined";

  // Respect reduced motion preference by setting duration to 0
  const effectiveParams = $derived(isBrowser && prefersReducedMotion.current ? { ...params, duration: 0 } : params);

  let ref: HTMLDivElement | undefined = $state(undefined);

  function _close() {
    if (ref?.dispatchEvent(new Event("close", { bubbles: true, cancelable: true }))) {
      toastStatus = false;
    }
  }

  createDismissableContext(_close);
</script>

{#if toastStatus}
  <div role="alert" bind:this={ref} transition:transition={effectiveParams as ParamsType} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {#if icon}
      <div class={iconVariants({ class: clsx(theme?.icon, styling?.icon) })}>
        {@render icon()}
      </div>
    {/if}

    <div class={content({ class: clsx(theme?.content, styling?.content) })}>
      {@render children()}
    </div>

    {#if dismissable}
      <CloseButton class={close({ class: clsx(theme?.close, styling?.close) })} ariaLabel="Remove toast" {color} />
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToastProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1793)
## Props
@prop children
@prop icon
@prop toastStatus = $bindable(true)
@prop dismissable = true
@prop color = "primary"
@prop position
@prop align = true
@prop params
@prop transition = fly
@prop class: className
@prop classes
@prop ...restProps
-->
