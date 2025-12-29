<script lang="ts">
  import type { ModalProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { prefersReducedMotion } from "svelte/motion";
  import { modal as modalStyle } from "./theme";

  let {
    children,
    header,
    footer,
    title,
    open = $bindable(false),
    permanent = false,
    dismissable = true,
    size = "md",
    placement,
    class: className,
    classes,
    transitionParams,
    transition = fade,
    fullscreen = false,
    ...restProps
  }: ModalProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("modal"));

  const paramsDefault = { duration: 100, easing: sineIn };
  
  // Check if running in browser to avoid SSR issues
  const isBrowser = typeof window !== 'undefined';
  
  // Respect reduced motion preference by setting duration to 0
  const effectiveParams = $derived(isBrowser && prefersReducedMotion.current ? { ...(transitionParams ?? paramsDefault), duration: 0 } : (transitionParams ?? paramsDefault));

  const { base, header: headerCls, footer: footerCls, body } = $derived(modalStyle({ placement, size }));
</script>

<Dialog
  bind:open
  {transition}
  dismissable={dismissable && !title && !permanent}
  transitionParams={effectiveParams}
  {classes}
  {permanent}
  {...restProps}
  class={base({ fullscreen, class: clsx(theme?.base, className) })}
>
  {#if title || header}
    <div class={headerCls({ class: clsx(theme?.header, styling?.header) })}>
      {#if title}
        <h3>{title}</h3>
        {#if dismissable && !permanent}
          <CloseButton type="submit" formnovalidate class={clsx(theme?.close, styling?.close)} />
        {/if}
      {:else if header}
        {@render header()}
      {/if}
    </div>
  {/if}
  <div class={body({ class: clsx(theme?.body, styling?.body) })}>
    {@render children?.()}
  </div>
  {#if footer}
    <div class={footerCls({ class: clsx(theme?.footer, styling?.footer) })}>
      {@render footer()}
    </div>
  {/if}
</Dialog>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1097)
## Props
@prop children
@prop header
@prop footer
@prop title
@prop open = $bindable(false)
@prop permanent = false
@prop dismissable = true
@prop size = "md"
@prop placement
@prop class: className
@prop classes
@prop transitionParams
@prop transition = fade
@prop fullscreen = false
@prop ...restProps
-->
