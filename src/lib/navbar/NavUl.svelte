<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { sineIn } from "svelte/easing";
  import { writable, type Writable } from "svelte/store";
  import { slide } from "svelte/transition";

  import clsx from "clsx";
  import { navbar_ul } from "./theme";
  import type { NavbarLiType, NavUlProps as Props } from "./type";

  let { base, ul, active, nonActive } = navbar_ul();

  let { children, activeUrl, ulClass, hidden = undefined, slideParams = { delay: 250, duration: 500, easing: sineIn }, activeClass = active(), nonActiveClass = nonActive(), class: clasName, ...restProps }: Props = $props();

  const activeUrlStore = writable<string>("");

  setContext<NavbarLiType>("navbarContext", { activeClass, nonActiveClass });

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
  setContext("activeUrl", activeUrlStore);

  let hiddenStore = getContext("navHidden") as Writable<boolean>;
  let _hidden: boolean = $derived(hidden ?? $hiddenStore ?? true);
  let _divClass: string = $derived(base({ class: clsx(clasName) }));
  let _ulClass: string = $derived(ul({ hidden: _hidden, class: ulClass }));
</script>

{#if !_hidden}
  <div {...restProps} class={_divClass} transition:slide={slideParams} role="button" tabindex="0">
    <!-- onclick -->
    <ul class={_ulClass}>
      {@render children?.()}
      <ul></ul>
    </ul>
  </div>
{:else}
  <div {...restProps} class={_divClass} class:hidden={_hidden}>
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
