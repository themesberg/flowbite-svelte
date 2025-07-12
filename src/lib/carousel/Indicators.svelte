<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { indicators, type IndicatorTheme } from "./theme";
  import { Indicator, type IndicatorsProps, type State, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, activeClass, inactiveClass, position = "bottom", class: className, ...restProps }: IndicatorsProps = $props();

  const theme = getTheme("indicators");

  const state = getContext<Writable<State>>("state");
  const { base, indicator } = $derived(indicators({ position }));

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

<div class={cn(base(), className, (theme as IndicatorTheme)?.base)} {...restProps}>
  {#each $state.images as _, idx}
    {@const selected = $state.index === idx}
    <button onclick={() => goToIndex(idx)}>
      {#if children}
        {@render children({ selected, index: idx })}
      {:else}
        <Indicator class={cn(indicator({ selected }), selected ? activeClass : inactiveClass, (theme as IndicatorTheme)?.indicator)} />
      {/if}
    </button>
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[IndicatorsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L426)
## Props
@prop children
@prop activeClass
@prop inactiveClass
@prop position = "bottom"
@prop class: className
@prop ...restProps
-->
