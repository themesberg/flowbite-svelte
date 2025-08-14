<script lang="ts">
  import { type DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { drawer } from ".";

  let { children, open = $bindable(false), hidden = $bindable(), width, dismissable = false, placement = "left", class: className, classes, transitionParams, transition = fly, outsideclose, activateClickOutside, ...restProps }: DrawerProps = $props();

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

  const { base } = $derived(drawer({ placement, width, modal: restProps.modal }));

  let innerWidth: number = $state(-1);
  let innerHeight: number = $state(-1);
  // let startX = $derived(position === 'fixed'? 0: )
  let x = $derived(placement === "left" ? -320 : placement === "right" ? innerWidth + 320 : undefined);
  let y = $derived(placement === "top" ? -100 : placement === "bottom" ? innerHeight + 100 : undefined);

  let transition_params = $derived(transitionParams ?? Object.assign({}, { x, y, duration: 200, easing: sineIn }));
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Dialog bind:open {transition} {dismissable} {outsideclose} transitionParams={transition_params} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {@render children?.()}
</Dialog>

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
