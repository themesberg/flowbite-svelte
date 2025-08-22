<script lang="ts">
  import { type DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { drawer } from ".";

  let { children, open = $bindable(false), hidden = $bindable(), modal = true, offset, width, dismissable = offset ? false : undefined, placement = "left", class: className, classes, transitionParams, transition = fly, outsideclose, activateClickOutside, ...restProps }: DrawerProps = $props();

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
  let innerModal = $derived(offset ? false : modal);

  const { base, handle } = $derived(drawer({ placement, width, modal: innerModal, shifted }));

  let innerWidth: number = $state(-1);
  let innerHeight: number = $state(-1);

  let x = $state(),
    y = $state();

  let transition_params = $derived({ x, y, duration: 300, easing: sineIn, opacity: 100, ...transitionParams });

  function init(node: HTMLDialogElement) {
    // set initial offset, later it will be switched on/off by onintrostart
    if (offset) node.style[placement] = offset;
  }

  function onintrostart(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    // set the values for transition start position
    const rect = ev.currentTarget.getBoundingClientRect();
    x = placement === "left" ? rect.left : placement === "right" ? rect.right - innerWidth : undefined;
    y = placement === "top" ? rect.top : placement === "bottom" ? rect.bottom - innerHeight : undefined;
    // remove shift for transition end position
    shifted = false;

    // add offset if closed, remove it when open
    if (offset) ev.currentTarget.style[placement] = open ? "" : offset;
  }

  function onoutrostart(ev: CustomEvent & { currentTarget: HTMLDialogElement }) {
    shifted = true;
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#snippet content()}
  {@render children?.()}
  {#if offset}
    <button type="button" onclick={() => (open = !open)} aria-label="{open ? 'close' : 'open'} drawer" class={handle({ class: clsx(theme?.handle, classes?.handle) })}></button>
  {/if}
{/snippet}

<Dialog {@attach init} bind:open {modal} {dismissable} {transition} {onintrostart} {onoutrostart} {outsideclose} transitionParams={transition_params} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {@render content()}
</Dialog>

{#if offset && !open}
  <Dialog {@attach init} open modal={false} {dismissable} {outsideclose} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {@render content()}
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
@prop dismissable 
@prop placement = "left"
@prop class: className
@prop transitionParams
@prop transition = fly
@prop outsideclose
@prop activateClickOutside
@prop ...restProps
-->
