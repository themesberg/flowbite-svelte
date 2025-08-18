<script lang="ts">
  import { type DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { drawer } from ".";

  let { children, open = $bindable(false), hidden = $bindable(), modal, edge, width, dismissable = true, placement = "left", class: className, classes, transitionParams, transition = fly, outsideclose, activateClickOutside, ...restProps }: DrawerProps = $props();

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

  const { base, handle } = $derived(drawer({ placement, width, modal, open }));

  let innerWidth: number = $state(-1);
  let innerHeight: number = $state(-1);

  let x = $state(),
    y = $state();

  let transition_params = $derived(transitionParams ?? { x, y, duration: edge ? 250 : 500, easing: sineIn, opacity: 100 });

  let dlg: HTMLDialogElement = $state() as HTMLDialogElement;

  function dlgInit(node: HTMLDialogElement) {
    dlg = node;

    if (edge) {
      node.style[placement] = edge;
    }
  }

  $effect.pre(() => {
    if (edge && open && dlg) {
      const rect = dlg.getBoundingClientRect();

      x = placement === "left" ? rect.left : placement === "right" ? rect.right - innerWidth : undefined;
      y = placement === "top" ? rect.top : placement === "bottom" ? rect.bottom - innerHeight : undefined;
    }
  });

  function onintrostart(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    if (edge) {
      ev.currentTarget.style[placement] = open ? "" : edge;
    } else {
      const rect = ev.currentTarget.getBoundingClientRect();
      x = placement === "left" ? -rect.width : placement === "right" ? rect.width : undefined;
      y = placement === "top" ? -rect.height : placement === "bottom" ? rect.height : undefined;
    }
  }

  let innerOpen = $derived(edge ? true : open);
  let innerModal = $derived(edge && !open ? false : true);

  function oncancel(ev: Event & { currentTarget: HTMLDialogElement }) {
    if (edge) {
      ev.preventDefault();
      open = false;
    }
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#key open}
  <Dialog {@attach dlgInit} open={innerOpen} {oncancel} modal={innerModal} {transition} {onintrostart} {dismissable} {outsideclose} transitionParams={transition_params} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {@render children?.()}
    <button onclick={() => (open = !open)} aria-label="open drawer" class={handle({ class: clsx(theme?.handle, classes?.handle) })}></button>
    {#if edge}{/if}
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
@prop dismissable = false
@prop placement = "left"
@prop class: className
@prop transitionParams
@prop transition = fly
@prop outsideclose
@prop activateClickOutside
@prop ...restProps
-->
