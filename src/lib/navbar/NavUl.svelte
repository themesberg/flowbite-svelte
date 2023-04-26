<script lang="ts" context="module">
  export type NavbarLiType = {
    activeClass: string;
    nonActiveClass: string;
  };
</script>

<script lang="ts">
  import classNames from 'classnames';
  import { slide, type SlideParams } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import Frame from '../utils/Frame.svelte';
  import { setContext } from 'svelte';

  export let divClass: string = 'w-full md:block md:w-auto';
  export let ulClass: string =
    'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
  export let hidden: boolean = true;
  export let slideParams: SlideParams = { delay: 250, duration: 500, easing: quintOut };
  export let activeClass: string =
    'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent';
  export let nonActiveClass: string =
    'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

  setContext<NavbarLiType>('navbar', { activeClass, nonActiveClass });

  let _divClass: string;
  $: _divClass = classNames(divClass, $$props.class);

  let _ulClass: string;
  $: _ulClass = classNames(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.class
  );
</script>

{#if !hidden}
  <div {...$$restProps} class={_divClass} transition:slide={slideParams} on:click>
    <Frame tag="ul" border rounded color="navbarUl" class={_ulClass}>
      <slot />
    </Frame>
  </div>
{:else}
  <div {...$$restProps} class={_divClass} {hidden}>
    <ul class={_ulClass}>
      <slot />
    </ul>
  </div>
{/if}
