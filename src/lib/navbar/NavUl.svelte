<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { sineIn } from "svelte/easing";
  import { writable } from "svelte/store";
  import { slide } from "svelte/transition";

  import clsx from "clsx";
  import { navbar_ul } from "./theme";
  import type { NavbarState, NavUlProps } from "$lib/types";

  let navState = getContext<NavbarState>("navState");

  let { children, activeUrl, ulClass, slideParams, activeClass, nonActiveClass, class: clasName, ...restProps }: NavUlProps = $props();

  const slideParamsDefault = { delay: 250, duration: 500, easing: sineIn };
  const slideParamsOptions = $derived(slideParams ?? slideParamsDefault);

  const activeUrlStore = writable<string>("");

  let hidden: boolean = $derived(navState.hidden ?? true);

  let { base, ul, active, nonActive } = $derived(navbar_ul({ hidden }));

  $effect(() => {
    // setContext<NavbarLiType>("navbarContext", { activeClass: active({ class: activeClass }), nonActiveClass: nonActive({ class: nonActiveClass }) });
    navState.activeClass = active({ class: activeClass });
    navState.nonActiveClass = nonActive({ class: nonActiveClass });
  });

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
  setContext("activeUrl", activeUrlStore);

  let _divClass: string = $derived(base({ class: clsx(clasName) }));
  let _ulClass: string = $derived(ul({ class: ulClass }));
</script>

{#if !hidden}
  <div {...restProps} class={_divClass} transition:slide={slideParamsOptions}>
    <!-- onclick -->
    <ul class={_ulClass}>
      {@render children?.()}
      <ul></ul>
    </ul>
  </div>
{:else}
  <div {...restProps} class={_divClass}>
    <ul class={_ulClass}>
      {@render children?.()}
    </ul>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavUlProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1048)
## Props
@prop children
@prop activeUrl
@prop ulClass
@prop slideParams
@prop activeClass
@prop nonActiveClass
@prop class: clasName
@prop ...restProps
-->
