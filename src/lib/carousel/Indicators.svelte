<script lang="ts">
  import Indicator from "$lib/indicator/Indicator.svelte";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { indicators } from "./theme";
  import type { IndicatorsProps as Props, State } from "./type";
  import clsx from "clsx";

  let { children, activeClass, inactiveClass, class: className, ...restProps }: Props = $props();

  const state = getContext<Writable<State>>("state");
  const { base, indicator } = indicators();
</script>

<div class={base({ class: clsx(className) })} {...restProps}>
  {#each $state.images as _, idx}
    {@const selected = $state.index === idx}
    <button onclick={() => ($state.index = idx)}>
      {#if children}
        {@render children({ selected, index: idx })}
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
@props: children: any;
@props:activeClass: any;
@props:inactiveClass: any;
@props:class: string;
-->
