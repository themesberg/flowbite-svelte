<script lang="ts">
  import { type DrawerProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { drawer } from ".";

  let { children, open = $bindable(false), width, placement = "left", class: className, classes, transitionParams, transition = fly, ...restProps }: DrawerProps = $props();

  const theme = getTheme("drawer");

  const { base } = $derived(
    drawer({
      placement,
      width
    })
  );

  let innerWidth: number = $state(-1);
  let innerHeight: number = $state(-1);
  // let startX = $derived(position === 'fixed'? 0: )
  let x = $derived(placement === "left" ? -320 : placement === "right" ? innerWidth + 320 : undefined);
  let y = $derived(placement === "top" ? -100 : placement === "bottom" ? innerHeight + 100 : undefined);

  let transition_params = $derived(transitionParams ?? Object.assign({}, { x, y, duration: 200, easing: sineIn }));
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Dialog bind:open {transition} transitionParams={transition_params} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
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
