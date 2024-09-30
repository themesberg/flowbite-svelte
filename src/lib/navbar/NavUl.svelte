<script lang="ts" context="module">
  export type NavbarLiType = {
    activeClass: string;
    nonActiveClass: string;
  };
</script>

<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { getContext, setContext } from 'svelte';
  import { sineIn } from 'svelte/easing';
  import { writable, type Writable } from 'svelte/store';
  import { slide, type SlideParams } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import Frame from '../utils/Frame.svelte';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    activeUrl?: string;
    divClass?: string;
    ulClass?: string;
    hidden?: boolean | undefined;
    slideParams?: SlideParams;
    activeClass?: string;
    nonActiveClass?: string;
  }

  export let activeUrl: NonNullable<$$Props['activeUrl']> = '';
  export let divClass: $$Props['divClass'] = 'w-full md:block md:w-auto';
  export let ulClass: $$Props['ulClass'] = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium';
  export let hidden: $$Props['hidden'] = undefined;
  export let slideParams: $$Props['slideParams'] = { delay: 250, duration: 500, easing: sineIn };
  export let activeClass: NonNullable<$$Props['activeClass']> = 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent';
  export let nonActiveClass: NonNullable<$$Props['nonActiveClass']> = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
  
  const activeUrlStore = writable('');
  setContext<NavbarLiType>('navbarContext', { activeClass, nonActiveClass });
  $: {
    activeUrlStore.set(activeUrl);
  }
  setContext('activeUrl', activeUrlStore);

  let hiddenStore = getContext('navHidden') as Writable<boolean>;
  let _hidden: boolean;
  $: _hidden = hidden ?? $hiddenStore ?? true;

  let _divClass: string;
  $: _divClass = twMerge(divClass, $$props.class);

  let _ulClass: string;
  $: _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
</script>

{#if !_hidden}
  <div {...$$restProps} class={_divClass} transition:slide={slideParams} on:click role="button" tabindex="0">
    <Frame tag="ul" border rounded color="navbarUl" class={_ulClass}>
      <slot />
    </Frame>
  </div>
{:else}
  <div {...$$restProps} class={_divClass} hidden={_hidden}>
    <ul class={_ulClass}>
      <slot />
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
-->
