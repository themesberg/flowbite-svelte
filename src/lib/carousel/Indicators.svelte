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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[IndicatorsProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L402)
## Props
@prop children
@prop activeClass
@prop inactiveClass
@prop class: className
@prop ...restProps
-->
