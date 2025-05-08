<script lang="ts">
  import Indicator from "$lib/indicator/Indicator.svelte";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { indicators } from "./theme";
  import type { IndicatorsProps, State } from "$lib/types";
  import clsx from "clsx";

  let { children, activeClass, inactiveClass, class: className, ...restProps }: IndicatorsProps = $props();

  const state = getContext<Writable<State>>("state");
  const { base, indicator } = indicators();
</script>

<div class={base({ class: clsx(className) })} {...restProps}>
  {#each $state.images as _, idx}
    {@const selected = $state.index === idx}
    <button
      onclick={() => {
        const isForward = idx > $state.index;
        state.update((_state) => {
          _state.forward = isForward;
          _state.index = idx;
          _state.lastSlideChange = new Date();
          return { ..._state };
        });
      }}
    >
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
[IndicatorsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L405)
## Props
@prop children
@prop activeClass
@prop inactiveClass
@prop class: className
@prop ...restProps
-->
