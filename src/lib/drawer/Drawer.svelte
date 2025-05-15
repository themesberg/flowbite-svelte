<script lang="ts">
  import type { ParamsType } from "$lib/types";
  import { fly } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import { drawer } from ".";
  import type { DrawerProps } from "$lib/types";
  import clsx from "clsx";

  let { children, hidden = $bindable(), closeDrawer = () => (hidden = true), activateClickOutside = true, position, width, backdrop = true, backdropClass, placement = "left", class: className, transitionParams, transitionType = fly, ...restProps }: DrawerProps = $props();

  const { base, backdrop_: backdropCls } = $derived(
    drawer({
      position,
      placement,
      width,
      backdrop
    })
  );

  let innerWidth: number = $state(-1);
  let innerHeight: number = $state(-1);
  // let startX = $derived(position === 'fixed'? 0: )
  let x = $derived(placement === "left" ? -320 : placement === "right" ? innerWidth + 320 : undefined);
  let y = $derived(placement === "top" ? -100 : placement === "bottom" ? innerHeight + 100 : undefined);

  let transition_params = $derived(Object.assign({}, { x, y, duration: 200, easing: sineIn }));
</script>

<svelte:window onkeydown={hidden ? undefined : (ev: KeyboardEvent) => ev.key === "Escape" && (hidden = true)} bind:innerWidth bind:innerHeight />

{#if !hidden}
  <div role="presentation" class={backdropCls({ class: backdropClass })} onclick={activateClickOutside ? closeDrawer : undefined}></div>
  <div {...restProps} class={base({ class: clsx(className) })} transition:transitionType={transitionParams ? transitionParams : (transition_params as ParamsType)} tabindex="-1">
    {@render children?.()}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DrawerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L546)
## Props
@prop children
@prop hidden = $bindable()
@prop closeDrawer = ()
@prop activateClickOutside = true
@prop position
@prop width
@prop backdrop = true
@prop backdropClass
@prop placement = "left"
@prop class: className
@prop transitionParams
@prop transitionType = fly
@prop ...restProps
-->
