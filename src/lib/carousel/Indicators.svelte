<script lang="ts">
  import Indicator from '$lib/indicators/Indicator.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';
  import type { State } from './Carousel.svelte';

  export let activeClass = 'opacity-100';
  export let inactiveClass = 'opacity-60';

  const state = getContext<Writable<State>>('state');
</script>

<div class={twMerge('flex absolute bottom-5 start-1/2 z-30 space-x-3 rtl:space-x-reverse -translate-x-1/2 rtl:translate-x-1/2', $$props.class)}>
  {#each $state.images as _, idx}
    {@const selected = $state.index === idx}
    <button on:click={() => ($state.index = idx)}>
      <slot {Indicator} {selected} index={idx}>
        <Indicator class={twMerge('bg-gray-100 hover:bg-gray-300', selected ? activeClass : inactiveClass)} />
      </slot>
    </button>
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activeClass = 'opacity-100';
@prop export let inactiveClass = 'opacity-60';
-->
