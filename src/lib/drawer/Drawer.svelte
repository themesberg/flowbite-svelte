<script lang="ts">
  import { type DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { drawer } from ".";
  import { tick } from "svelte";
  import { readNextDescriptor } from "@testing-library/user-event/dist/cjs/utils/index.js";
  import Toggle from "$lib/forms/toggle/Toggle.svelte";
  import type { EventHandler } from "svelte/elements";
  import Event from "../../routes/api-check/components/alert/examples/Event.svelte";

  let { children, open = $bindable(false), hidden = $bindable(), edge = "", width, dismissable = false, placement = "left", class: className, classes, transitionParams, transition = fly, outsideclose, activateClickOutside, ...restProps }: DrawerProps = $props();

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

  const { base, handle } = $derived(drawer({ placement, width, modal: restProps.modal }));

  let innerWidth: number = $state(-1);
  let innerHeight: number = $state(-1);

  let x = $state(),
    y = $state();

  let transition_params = $derived(transitionParams ?? Object.assign({}, { x, y, duration: 2000, easing: sineIn, opacity: 100 }));

  let dlg: HTMLDialogElement = $state() as HTMLDialogElement;
  let edgeDlg: HTMLDialogElement = $state() as HTMLDialogElement;

  function edgeDlgInit(node: HTMLDialogElement) {
    edgeDlg = node;
    tick() // wait for position to settle
      .then(() => {
        const rect = node.getBoundingClientRect();
        console.log("edgeDlgInit", rect);
        switch (placement) {
          case "left":
            node.style.transform = `translateX(calc(-${rect.width}px + ${edge}))`;
            break;

          case "right":
            node.style.transform = `translateX(calc(${rect.width}px - ${edge}))`;
            break;

          case "top":
            node.style.transform = `translateY(calc(-${rect.height}px + ${edge}))`;
            break;
          case "bottom":
            node.style.transform = `translateY(calc(${rect.height}px - ${edge}))`;
            break;
        }
      });
  }

  const noTransition = (node: HTMLElement) => ({});

  async function dlgInit(node: HTMLDialogElement) {
    dlg = node;
  }

  function onintrostart(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    if (!edge) {
      const rect = ev.currentTarget.getBoundingClientRect();
      console.log("pre no edge", rect);
      x = placement === "left" ? -rect.width : placement === "right" ? rect.width : undefined;
      y = placement === "top" ? -rect.height : placement === "bottom" ? rect.height : undefined;
    }
  }

  function onoutrostart(ev: Event & { currentTarget: HTMLDialogElement }) {
    const rect = ev.currentTarget.getBoundingClientRect();
    x = placement === "left" ? rect.left : placement === "right" ? rect.right - innerWidth : undefined;
    y = placement === "top" ? rect.top : placement === "bottom" ? rect.bottom - innerHeight : undefined;
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Dialog {@attach dlgInit} id="main" bind:open {transition} {onintrostart} {dismissable} {outsideclose} transitionParams={transition_params} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {@render children?.()}
  {#if edge}
    <button onclick={() => (open = !open)} aria-label="open drawer" class={handle({ class: clsx(theme?.handle, classes?.handle) })}></button>
  {/if}
</Dialog>

{#if edge}
  <Dialog id="edge" {@attach edgeDlgInit} open={!open} {onoutrostart} {dismissable} modal={false} transition={noTransition} {...restProps} class={base({ class: clsx(edge, theme?.base, className) })}>
    {@render children?.()}
    <button onclick={() => (open = !open)} aria-label="open drawer" class={handle({ class: clsx(theme?.handle, classes?.handle) })}></button>
  </Dialog>
{/if}

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
