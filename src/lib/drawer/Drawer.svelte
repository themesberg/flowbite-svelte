<script lang="ts">
  import { type DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { drawer } from ".";
  import { setContext, tick } from "svelte";

  let { children, open = $bindable(false), hidden = $bindable(), modal, offset, width, dismissable = offset ? false : undefined, placement = "left", class: className, transitionParams, transition = fly, outsideclose, activateClickOutside, ...restProps }: DrawerProps = $props();

  setContext("drawer", {
    get placement() {
      return placement;
    }
  });

  // back compatibility
  if (hidden !== undefined) console.warn("'hidden' property is deprecated. Please use the 'open' property to manage 'Drawer'.");

  if (activateClickOutside !== undefined) console.warn("'activateClickOutside' property is deprecated. Please use the 'outsideclose' property to manage 'Drawer' behaviour.");

  $effect(() => {
    if (activateClickOutside !== undefined && outsideclose === undefined) {
      outsideclose = activateClickOutside;
    }
  });
  $effect(() => {
    if (hidden !== undefined) {
      const nextOpen = !hidden;
      if (open !== nextOpen) open = nextOpen;
    }
  });
  $effect(() => {
    if (hidden !== undefined) {
      const nextHidden = !open;
      if (hidden !== nextHidden) hidden = nextHidden;
    }
  });
  // end

  const theme = getTheme("drawer");

  let shifted = $state(true);

  const { base } = $derived(drawer({ placement, width, modal: offset && !open ? false : modal, shifted }));

  let x = $state(),
    y = $state();

  let transition_params = $derived({ x, y, duration: 300, easing: sineIn, opacity: 1, ...transitionParams });

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

<Dialog {@attach init} bind:open {modal} {dismissable} {transition} {outsideclose} transitionParams={transition_params} {...restProps} {onintrostart} {onoutrostart} class={base({ class: clsx(theme?.base, className) })}>
  {@render children?.()}
</Dialog>

{#if offset && !open}
  <Dialog {@attach init} open modal={false} {dismissable} {outsideclose} inert {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {@render children?.()}
  </Dialog>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DrawerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L580)
## Props
@prop children
@prop open = $bindable(false)
@prop hidden = $bindable()
@prop modal
@prop offset
@prop width
@prop dismissable = offset ? false : undefined
@prop placement = "left"
@prop class: className
@prop transitionParams
@prop transition = fly
@prop outsideclose
@prop activateClickOutside
@prop ...restProps
-->
