<script lang="ts">
  import Indicator from "$lib/indicator/Indicator.svelte";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { indicators } from "./theme";
  import type { State } from "./type";

  let { children, activeClass, inactiveClass, class: className, ...restProps } = $props();

  const state = getContext<Writable<State>>("state");
  const { base, indicator } = indicators();
</script>

<div class={base({ class: className })} {...restProps}>
  {#each $state.images as _, idx}
    {@const selected = $state.index === idx}
    <button onclick={() => ($state.index = idx)}>
      {#if children}
        {@render children(selected, idx)}
      {:else}
        <Indicator class={indicator({ selected, class: selected ? activeClass : inactiveClass })} />
      {/if}
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
