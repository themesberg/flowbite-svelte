<script lang="ts">
  import { fade } from "svelte/transition";
  import { prefersReducedMotion } from "svelte/motion";
  import { banner } from "./theme";
  import clsx from "clsx";
  import { type ParamsType, type BannerProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let {
    children,
    header,
    open = $bindable(true),
    dismissable = true,
    color = "gray",
    type,
    class: className,
    classes,
    transition = fade,
    params,
    onclose,
    closeButtonProps,
    ...restProps
  }: BannerProps = $props();

  const styling = $derived(classes);

  // Theme context
  const theme = $derived(getTheme("banner"));

  const { base, content, dismissable: dismissableClass } = $derived(banner({ type, color }));

  // Check if running in browser to avoid SSR issues
  const isBrowser = typeof window !== "undefined";

  // Respect reduced motion preference by setting duration to 0
  const effectiveParams = $derived(isBrowser && prefersReducedMotion.current ? { ...params, duration: 0 } : params);

  let ref: HTMLDivElement | undefined = $state(undefined);
  function close(event: MouseEvent) {
    if (ref?.dispatchEvent(new Event("close", { bubbles: true, cancelable: true }))) {
      open = false;
      onclose?.(event);
    }
  }
  createDismissableContext(close);

  const finalCloseProps = $derived({
    class: dismissableClass({ class: clsx(theme?.dismissable, styling?.dismissable, closeButtonProps?.class) }),
    color: closeButtonProps?.color ?? "gray",
    ariaLabel: closeButtonProps?.ariaLabel ?? "Remove banner",
    size: closeButtonProps?.size,
    classes: closeButtonProps?.classes,
    name: closeButtonProps?.name,
    onclick: closeButtonProps?.onclick
  });
</script>

{#if open}
  <div data-scope="banner" data-part="base" tabindex="-1" bind:this={ref} class={base({ class: clsx(theme?.base, className) })} {...restProps} transition:transition={effectiveParams as ParamsType}>
    <div data-part="content" class={content({ class: clsx(theme?.content, styling?.content) })}>
      {@render children?.()}
    </div>

    {#if dismissable}
      <div class="flex items-center justify-end">
        <CloseButton {...finalCloseProps} />
      </div>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BannerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L275)
## Props
@prop children
@prop header
@prop open = $bindable(true)
@prop dismissable = true
@prop color = "gray"
@prop type
@prop class: className
@prop classes
@prop transition = fade
@prop params
@prop onclose
@prop closeButtonProps
@prop ...restProps
-->
