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
@prop export let activeUrl: NonNullable<$$Props['activeUrl']> = '';
@prop export let divClass: $$Props['divClass'] = 'w-full md:block md:w-auto';
@prop export let ulClass: $$Props['ulClass'] = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium';
@prop export let hidden: $$Props['hidden'] = undefined;
@prop export let slideParams: $$Props['slideParams'] = { delay: 250, duration: 500, easing: sineIn };
@prop export let activeClass: NonNullable<$$Props['activeClass']> = 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent';
@prop export let nonActiveClass: NonNullable<$$Props['nonActiveClass']> = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
@prop export let classUl: string = '';
-->
