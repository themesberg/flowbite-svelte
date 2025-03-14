<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { sineIn } from "svelte/easing";
  import { writable, type Writable } from "svelte/store";
  import { slide } from "svelte/transition";

  import clsx from "clsx";
  import { navbar_ul } from "./theme";
  import type { NavbarLiType, NavUlProps as Props } from "./type";

  let hiddenStore = getContext("navHidden") as Writable<boolean>;

  let { children, activeUrl, ulClass, hidden = undefined, slideParams = { delay: 250, duration: 500, easing: sineIn }, activeClass, nonActiveClass, class: clasName, ...restProps }: Props = $props();

  const activeUrlStore = writable<string>("");

  let _hidden: boolean = $derived(hidden ?? $hiddenStore ?? true);

  let { base, ul, active, nonActive } = $derived(navbar_ul({ hidden: _hidden }));

  $effect(() => {
    setContext<NavbarLiType>("navbarContext", { activeClass: active({ class: activeClass }), nonActiveClass: nonActive({ class: nonActiveClass }) });
  });

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
  setContext("activeUrl", activeUrlStore);

  let _divClass: string = $derived(base({ class: clsx(clasName) }));
  let _ulClass: string = $derived(ul({ class: ulClass }));
</script>

{#if !_hidden}
  <div {...restProps} class={_divClass} transition:slide={slideParams}>
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
## Props
@props: children: any;
@props:activeUrl: any;
@props:ulClass: any;
@props:hidden: any = undefined;
@props:slideParams: any = { delay: 250;
@props:duration: any;
@props:easing: any;
@props:activeClass: any = active();
@props:nonActiveClass: any = nonActive();
@props:class: string;
-->
