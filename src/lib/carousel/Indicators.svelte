<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { indicators } from "./theme";
  import { Indicator, type IndicatorsProps, type State } from "$lib";
  import clsx from "clsx";

  let { children, activeClass, inactiveClass, position = "bottom", class: className, ...restProps }: IndicatorsProps = $props();

  const state = getContext<Writable<State>>("state");
  const { base, indicator } = indicators({ position });

  function goToIndex(newIndex: number) {
    state.update((_state) => {
      const currentIndex = _state.index;
      const forward = newIndex >= currentIndex;
      return {
        ..._state,
        index: newIndex,
        forward,
        lastSlideChange: new Date()
      };
    });
  }
</script>

<div class={base({ class: clsx(className) })} {...restProps}>
  {#each $state.images as _, idx}
    {@const selected = $state.index === idx}
    <button onclick={() => goToIndex(idx)}>
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
## Type
[IndicatorsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L404)
## Props
@prop children
@prop activeClass
@prop inactiveClass
@prop position = "bottom"
@prop class: className
@prop ...restProps
-->
