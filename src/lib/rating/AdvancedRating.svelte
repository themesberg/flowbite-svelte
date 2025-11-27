<script lang="ts">
  import clsx from "clsx";
  import { advancedRating } from "./theme";
  import type { AdvancedRatingProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { rating, globalText, ratings, divClass, spanClass, div2Class, div3Class, span2Class, class: className, classes, unit }: AdvancedRatingProps = $props();

  warnThemeDeprecation(
    "AdvancedRating",
    { divClass, spanClass, div2Class, div3Class, span2Class },
    { divClass: "class", spanClass: "span", div2Class: "div2", div3Class: "div3", span2Class: "span2" }
  );
  const styling = $derived(
    classes ?? {
      span: spanClass,
      div2: div2Class,
      div3: div3Class,
      span2: span2Class
    }
  );

  const theme = getTheme("advancedRating");

  const { base, span, div2, div3, span2 } = $derived(advancedRating());
</script>

{#if rating}
  {@render rating()}
{/if}
{#if globalText}
  {@render globalText()}
{/if}
{#each ratings as { label, rating }, i (label ?? i)}
  <div class={base({ class: clsx(theme?.base, className) })}>
    <span class={span({ class: clsx(theme?.span, styling.span) })}>{label}</span>
    <div class={div2({ class: clsx(theme?.div2, styling.div2) })}>
      <div class={div3({ class: clsx(theme?.div3, styling.div3) })} style="width: {rating}%"></div>
    </div>
    <span class={span2({ class: clsx(theme?.span2, styling.span2) })}>{rating}{unit}</span>
  </div>
{/each}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AdvancedRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1286)
## Props
@prop rating
@prop globalText
@prop ratings
@prop divClass
@prop spanClass
@prop div2Class
@prop div3Class
@prop span2Class
@prop class: className
@prop classes
@prop unit
-->
