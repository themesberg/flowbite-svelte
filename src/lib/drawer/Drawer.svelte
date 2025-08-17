<script lang="ts">
  import { type DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { drawer } from ".";
  import { tick } from "svelte";

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

  let x = $derived(placement === "left" ? -320 : placement === "right" ? innerWidth + 320 : undefined);
  let y = $derived(placement === "top" ? -100 : placement === "bottom" ? innerHeight + 100 : undefined);

  let rect: DOMRect | undefined = $state();

  let transition_params = $derived.by(() => {
    if (rect) {
      let xx = placement === "left" ? rect.x : placement === "right" ? rect.width - (innerWidth - rect.x) : undefined;
      let yy = placement === "top" ? rect.y : placement === "bottom" ? rect.height - (innerHeight - rect.y) : undefined;
      return { x: xx, y: yy, duration: 2000, easing: sineIn, opacity: 100 };
    }
    // let startX = $derived(position === 'fixed'? 0: )
    // const rect = dlg?.getBoundingClientRect();
    // if (rect) {
    //   x = rect.x;
    //   y = rect.y;
    // }

    return transitionParams ?? Object.assign({}, { x, y, duration: 2000, easing: sineIn, opacity: 100 });
  });

  async function bindDlg(node: HTMLDialogElement) {
    await tick();
    rect = node.getBoundingClientRect();
    console.log("bindDlg", rect);
    return () => (rect = undefined);
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Dialog bind:open {transition} {dismissable} {outsideclose} transitionParams={transition_params} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {@render children?.()}
  {#if edge}
    <button onclick={() => (open = !open)} aria-label="open drawer" class={handle({ class: clsx(theme?.handle, classes?.handle) })}></button>
  {/if}
</Dialog>

{#if edge}
  <Dialog {@attach bindDlg} open={!open} {dismissable} modal={false} {...restProps} class={base({ class: clsx(edge, theme?.base, className) })}>
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
@prop width
@prop placement = "left"
@prop class: className
@prop classes
@prop transitionParams
@prop transition = fly
@prop ...restProps
-->
