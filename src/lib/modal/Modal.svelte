<script lang="ts">
  import type { ModalProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { modal as modalStyle } from "./theme";
  import { untrack } from "svelte";

  let {
    children,
    header,
    footer,
    title,
    open = $bindable(false),
    permanent = false,
    dismissable = true,
    closeBtnClass,
    headerClass,
    bodyClass,
    footerClass,
    size = "md",
    placement,
    class: className,
    classes,
    transitionParams,
    transition = fade,
    fullscreen = false,
    ...restProps
  }: ModalProps = $props();

  warnThemeDeprecation(
    "Modal",
    untrack(() => ({ headerClass, bodyClass, footerClass, closeBtnClass })),
    { bodyClass: "body", headerClass: "header", footerClass: "footer", closeBtnClass: "close" }
  );

  const styling = $derived(classes ?? { header: headerClass, body: bodyClass, footer: footerClass, close: closeBtnClass });

  const paramsDefault = { duration: 100, easing: sineIn };
  const paramsOptions = $derived(transitionParams ?? paramsDefault);

  const { base, header: headerCls, footer: footerCls, body } = $derived(modalStyle({ placement, size }));

  const baseCls = $derived(base({ fullscreen, class: clsx(getTheme("modal")?.base, className) }));
  const headerClsFull = $derived(headerCls({ class: clsx(getTheme("modal")?.header, styling.header) }));
  const bodyCls = $derived(body({ class: clsx(getTheme("modal")?.body, styling.body) }));
  const footerClsFull = $derived(footerCls({ class: clsx(getTheme("modal")?.footer, styling.footer) }));
</script>

<Dialog bind:open {transition} dismissable={dismissable && !title && !permanent} transitionParams={paramsOptions} {classes} {permanent} {...restProps} class={baseCls}>
  {#if title || header}
    <div class={headerClsFull}>
      {#if title}
        <h3>{title}</h3>
        {#if dismissable && !permanent}
          <CloseButton type="submit" formnovalidate class={clsx(styling.close)} />
        {/if}
      {:else if header}
        {@render header()}
      {/if}
    </div>
  {/if}
  <div class={bodyCls}>
    {@render children?.()}
  </div>
  {#if footer}
    <div class={footerClsFull}>
      {@render footer()}
    </div>
  {/if}
</Dialog>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1162)
## Props
@prop children
@prop header
@prop footer
@prop title
@prop open = $bindable(false)
@prop permanent = false
@prop dismissable = true
@prop closeBtnClass
@prop headerClass
@prop bodyClass
@prop footerClass
@prop size = "md"
@prop placement
@prop class: className
@prop classes
@prop transitionParams
@prop transition = fade
@prop fullscreen = false
@prop ...restProps
-->
