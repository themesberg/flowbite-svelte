<script lang="ts">
  import { type DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { drawer } from ".";

  let { children, open = $bindable(false), hidden = $bindable(), onaction, modal = true, edge, width, permanent, placement = "left", class: className, classes, transitionParams, transition = fly, outsideclose, activateClickOutside, ...restProps }: DrawerProps = $props();

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
  let innerModal = $derived(edge ? !!open : modal);

  const { base, handle } = $derived(drawer({ placement, width, modal: innerModal, shifted }));

  let innerWidth: number = $state(-1);
  let innerHeight: number = $state(-1);

  let x = $state(),
    y = $state();

  let transition_params = $derived(transitionParams ?? { x, y, duration: edge ? 500 : 500, easing: sineIn, opacity: 100 });

  function dlgInit(node: HTMLDialogElement) {
    // set initial offset, next it will be switched on/off by outrestart
    if (edge) node.style[placement] = edge;
  }

  function onintrostart(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    if (open) {
      // set the values for transition start
      const rect = ev.currentTarget.getBoundingClientRect();
      x = placement === "left" ? rect.left : placement === "right" ? rect.right - innerWidth : undefined;
      y = placement === "top" ? rect.top : placement === "bottom" ? rect.bottom - innerHeight : undefined;
      // remove shift for transition end position
      shifted = false;
    }

    // add offset if closed, remove it when open
    if (edge) ev.currentTarget.style[placement] = open ? "" : edge;
  }

  function onoutrostart(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    if (!open) shifted = true;
  }

  function _onaction() {
    console.log("drawer on action");
    if (edge) return false;
  }

  function oncancel(ev: Event & { currentTarget: HTMLDialogElement }) {
    // drawer with edge is always open: cancel the closing, but update `open` prop
    if (edge) ev.preventDefault();

    open = false;
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#key open}
  <Dialog {@attach dlgInit} open={edge ? true : open} {oncancel} {onaction} modal={innerModal} {transition} {onintrostart} {onoutrostart} permanent={edge ? true : permanent} {outsideclose} transitionParams={transition_params} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {@render children?.()}
    {#if edge}
      <button type="button" onclick={() => (open = !open)} aria-label="open drawer" class={handle({ class: clsx(theme?.handle, classes?.handle) })}></button>
    {/if}
  </Dialog>
{/key}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DrawerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L571)
## Props
@prop children
@prop open = $bindable(false)
@prop hidden = $bindable()
@prop width
@prop permanent = false
@prop placement = "left"
@prop class: className
@prop transitionParams
@prop transition = fly
@prop outsideclose
@prop activateClickOutside
@prop ...restProps
-->
