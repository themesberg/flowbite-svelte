<script lang="ts">
  import type { DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { prefersReducedMotion } from "svelte/motion";
  import { fly } from "svelte/transition";
  import { drawer } from "./theme";
  import { setDrawerContext } from "$lib/context";
  import { tick } from "svelte";
  // Use outsideclose for activateClickOutside, open for hidden
  let {
    children,
    open = $bindable(false),
    modal,
    offset,
    width,
    dismissable,
    placement = "left",
    class: className,
    transitionParams,
    transition = fly,
    outsideclose,
    ...restProps
  }: DrawerProps = $props();

  // Set dismissable based on offset if not explicitly provided
  const finalDismissable = $derived(dismissable ?? (offset ? false : undefined));

  // Create reactive context using getter
  const context = {
    get placement() {
      return placement;
    }
  };

  setDrawerContext(context);

  const theme = $derived(getTheme("drawer"));

  let shifted = $state(true);

  const { base } = $derived(drawer({ placement, width, modal: offset && !open ? false : modal, shifted }));

  let x = $state(),
    y = $state();

  const isBrowser = typeof window !== "undefined";

  let transition_params = $derived(
    isBrowser && prefersReducedMotion.current ? { x, y, easing: sineIn, opacity: 1, ...transitionParams, duration: 0 } : { x, y, duration: 300, easing: sineIn, opacity: 1, ...transitionParams }
  );

  function init(node: HTMLDialogElement) {
    // set initial offset, later it will be switched on/off by onintrostart
    if (offset) {
      node.style[placement] = offset;
      tick().then(() => {
        // few browsers give focus when dialog is open even in non-modal version
        // to prevent that we set dialog to inert during creation and remove it
        // as soon as ready
        node.inert = false;
      });
    }
  }

  async function onintrostart(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    restProps.onintrostart?.(ev);
    if (ev.defaultPrevented) return;

    // set the values for transition start position
    const dlg = ev.currentTarget;
    const { innerWidth = 0, innerHeight = 0 } = dlg.ownerDocument.defaultView ?? {};

    const rect = dlg.getBoundingClientRect();

    x = placement === "left" ? rect.left : placement === "right" ? rect.right - innerWidth : undefined;
    y = placement === "top" ? rect.top : placement === "bottom" ? rect.bottom - innerHeight : undefined;

    await tick(); // let transition start

    // remove shift for transition end position
    shifted = !open;

    // add offset if closed, remove it when open
    if (offset) dlg.style[placement] = open ? "" : offset;
  }

  function onoutrostart(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    restProps.onoutrostart?.(ev);
    if (ev.defaultPrevented) return;

    shifted = true;
  }
</script>

<Dialog
  {@attach init}
  bind:open
  {modal}
  dismissable={finalDismissable}
  {transition}
  {outsideclose}
  transitionParams={transition_params}
  {...restProps}
  {onintrostart}
  {onoutrostart}
  class={base({ class: clsx(theme?.base, className) })}
>
  {@render children?.()}
</Dialog>

{#if offset && !open}
  <Dialog {@attach init} open modal={false} dismissable={finalDismissable} {outsideclose} inert {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {@render children?.()}
  </Dialog>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DrawerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L635)
## Props
@prop children
@prop open = $bindable(false)
@prop modal
@prop offset
@prop width
@prop dismissable
@prop placement = "left"
@prop class: className
@prop transitionParams
@prop transition = fly
@prop outsideclose
@prop ...restProps
-->
