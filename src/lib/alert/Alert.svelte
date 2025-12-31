<script lang="ts">
  import { fade } from "svelte/transition";
  import { prefersReducedMotion } from "svelte/motion";
  import { alert } from "./theme";
  import clsx from "clsx";
  import { type AlertProps, type ParamsType } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let {
    children,
    icon,
    alertStatus = $bindable(true),
    closeIcon: CloseIcon,
    color = "brand",
    rounded = true,
    border,
    class: className,
    dismissable,
    transition = fade,
    params,
    listContent,
    borderAccent,
    closeButtonProps,
    ...restProps
  }: AlertProps = $props();

  // Theme context
  const theme = $derived(getTheme("alert"));

  let divCls = $derived(
    alert({
      color,
      listContent,
      borderAccent,
      rounded,
      border,
      icon: !!icon,
      dismissable,
      class: clsx(theme, className)
    })
  );

  // Check if running in browser to avoid SSR issues
  const isBrowser = typeof window !== "undefined";

  // Respect reduced motion preference by setting duration to 0
  const effectiveParams = $derived(isBrowser && prefersReducedMotion.current ? { ...params, duration: 0 } : params);

  let ref: HTMLDivElement | undefined = $state(undefined);

  function close() {
    if (ref?.dispatchEvent(new Event("close", { bubbles: true, cancelable: true }))) {
      alertStatus = false;
    }
  }

  createDismissableContext(close);

  const finalCloseProps = $derived({
    class: clsx("-my-1.5 ms-auto -me-1.5", closeButtonProps?.class),
    color: closeButtonProps?.color ?? color,
    ariaLabel: closeButtonProps?.ariaLabel ?? "Remove alert",
    size: closeButtonProps?.size,
    classes: closeButtonProps?.classes,
    name: closeButtonProps?.name,
    onclick: closeButtonProps?.onclick
  });
</script>

{#if alertStatus}
  <div data-scope="alert" data-part="base" role="alert" bind:this={ref} {...restProps} transition:transition={effectiveParams as ParamsType} class={divCls}>
    {#if icon}
      {@render icon()}
    {/if}

    {#if icon || dismissable}
      <div>
        {@render children()}
      </div>
    {:else}
      {@render children()}
    {/if}

    {#if dismissable}
      {#if CloseIcon}
        <CloseButton {...finalCloseProps}>
          <CloseIcon />
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
[AlertProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L225)
## Props
@prop children
@prop icon
@prop alertStatus = $bindable(true)
@prop closeIcon: CloseIcon
@prop color = "brand"
@prop closeColor
@prop rounded = true
@prop border
@prop class: className
@prop dismissable
@prop transition = fade
@prop params
@prop listContent
@prop borderAccent
@prop ...restProps
-->
