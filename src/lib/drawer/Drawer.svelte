<script lang="ts">
  import { type ParamsType, type DrawerProps, trapFocus } from "$lib";
  import clsx from "clsx";
  import { fly } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import { drawer, type DrawerTheme } from ".";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, hidden = $bindable(), closeDrawer = () => (hidden = true), activateClickOutside = true, position, width, backdrop = true, backdropClass, placement = "left", class: className, classes, transitionParams, transitionType = fly, bodyScrolling = false, ...restProps }: DrawerProps = $props();

  warnThemeDeprecation("Drawer", { backdropClass }, { backdropClass: "backdrop" });
  const styling = $derived(classes ?? { backdrop: backdropClass });

  const theme = getTheme("drawer");

  const { base, backdrop: backdropCls } = $derived(
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

<svelte:window bind:innerWidth bind:innerHeight />

{#if !hidden}
  <div role="presentation" class={backdropCls({ class: clsx((theme as DrawerTheme)?.backdrop, styling.backdrop) })} onclick={activateClickOutside ? closeDrawer : undefined} style={bodyScrolling ? "pointer-events: none;" : ""}></div>
  <div use:trapFocus={{ onEscape: closeDrawer }} {...restProps} class={base({ class: clsx((theme as DrawerTheme)?.base, className) })} transition:transitionType={transitionParams ? transitionParams : (transition_params as ParamsType)} tabindex="-1">
    {@render children?.()}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DrawerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L562)
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
@prop classes
@prop transitionParams
@prop transitionType = fly
@prop bodyScrolling = false
@prop ...restProps
-->
