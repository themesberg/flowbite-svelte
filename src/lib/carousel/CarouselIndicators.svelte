<script lang="ts">
  import type { IndicatorsProps } from "$lib";
  import Indicator from "$lib/indicator/Indicator.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import { getCarouselContext } from "$lib/context";
  import { carouselIndicators } from "./theme";

  let { children, position = "bottom", class: className, classes, ...restProps }: IndicatorsProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("carouselIndicators"));

  const _state = getCarouselContext();
  const { base, indicator } = $derived(carouselIndicators({ position }));

  function goToIndex(newIndex: number) {
    _state?.changeSlide(newIndex);
  }
</script>

{#if _state}
  <div class={base({ class: clsx(theme?.base, className) })} data-scope="carousel-indicators" data-part="base" {...restProps}>
    {#each _state.images as _, idx (idx)}
      {@const selected = _state.index === idx}
      <button type="button" onclick={() => goToIndex(idx)} aria-current={selected ? "true" : undefined} aria-label={`Go to slide ${idx + 1}`} data-part="button">
        {#if children}
          {@render children({ selected, index: idx })}
        {:else}
          <Indicator class={indicator({ selected, class: clsx(theme?.indicator, selected ? styling?.active : styling?.inactive) })} data-part="indicator" />
        {/if}
      </button>
    {/each}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[IndicatorsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L490)
## Props
@prop children
@prop position = "bottom"
@prop class: className
@prop classes
@prop ...restProps
-->
