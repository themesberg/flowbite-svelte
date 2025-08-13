<script lang="ts">
  import { Indicator, type IndicatorsProps, type CarouselState } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { carouselIndicators } from "./theme";

  let { children, activeClass, inactiveClass, position = "bottom", class: className, ...restProps }: IndicatorsProps = $props();

  const theme = getTheme("carouselIndicators");

  const _state = getContext<CarouselState>("state");
  const { base, indicator } = $derived(carouselIndicators({ position }));

  function goToIndex(newIndex: number) {
    _state.changeSlide(newIndex);
  }
</script>

<div class={base({ class: clsx(theme?.base, className) })} {...restProps}>
  {#each _state.images as _, idx}
    {@const selected = _state.index === idx}
    <button type="button" onclick={() => goToIndex(idx)} aria-current={selected ? "true" : undefined} aria-label={`Go to slide ${idx + 1}`}>
      {#if children}
        {@render children({ selected, index: idx })}
      {:else}
        <Indicator class={indicator({ selected, class: clsx(selected ? activeClass : inactiveClass, theme?.indicator) })} />
      {/if}
    </button>
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[IndicatorsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L389)
## Props
@prop children
@prop activeClass
@prop inactiveClass
@prop position = "bottom"
@prop class: className
@prop ...restProps
-->
