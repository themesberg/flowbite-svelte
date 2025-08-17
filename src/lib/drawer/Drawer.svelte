<script lang="ts">
  import { type DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { tick } from "svelte";
  import { sineIn } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { drawer } from ".";

  let { children, open = $bindable(false), hidden = $bindable(), modal, edge, width, dismissable = false, placement = "left", class: className, classes, transitionParams, transition = fly, outsideclose, activateClickOutside, ...restProps }: DrawerProps = $props();

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
  $inspect(x, y);
  let transition_params = $derived(transitionParams ?? Object.assign({}, { x, y, duration: 500, easing: sineIn, opacity: 100 }));

  function dlgInit(node: HTMLDialogElement) {
    node.style[placement] = edge ?? "0px";
    tick() // wait for position to settle
      .then(() => {
        if (!open) {
          const rect = node.getBoundingClientRect();
          x = placement === "left" ? rect.left : placement === "right" ? rect.right - innerWidth : undefined;
          y = placement === "top" ? rect.top : placement === "bottom" ? rect.bottom - innerHeight : undefined;
        }
      });
  }

  function onintrostart(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    ev.currentTarget.style[placement] = open ? "" : (edge ?? "0px");
  }

  function onoutroend(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    if (!open) {
      const rect = ev.currentTarget.getBoundingClientRect();
      x = placement === "left" ? rect.left : placement === "right" ? rect.right - innerWidth : undefined;
      y = placement === "top" ? rect.top : placement === "bottom" ? rect.bottom - innerHeight : undefined;
    }
  }

  let innerOpen = $state(edge ? true : open);
  let innerModal = $derived(edge && !open ? false : modal);

  $effect(() => {
    innerOpen = edge ? true : open;
  });

  function oncancel(ev: Event & { currentTarget: HTMLDialogElement }) {
    ev.preventDefault();
    open = false;
    // innerOpen = edge ? true : open;
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#key open}
  <Dialog {@attach dlgInit} id="main" open={innerOpen} {oncancel} modal={innerModal} {transition} {onoutroend} {onintrostart} {dismissable} {outsideclose} transitionParams={transition_params} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {@render children?.()}
    {#if edge}
      <button onclick={() => (open = !open)} aria-label="open drawer" class={handle({ class: clsx(theme?.handle, classes?.handle) })}></button>
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
@prop dismissable = false
@prop placement = "left"
@prop class: className
@prop transitionParams
@prop transition = fly
@prop outsideclose
@prop activateClickOutside
@prop ...restProps
-->
