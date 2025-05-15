<script lang="ts">
  import type { RatingIconProps } from "$lib/types";

  let { fillPercent = 100, fillColor = "#00ff00", strokeColor = "#00ff00", size = 24, ariaLabel = "custom icon", iconIndex = 0, groupId = "custom", role = "img", svgClass, pathd = "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z", ...restProps }: RatingIconProps = $props();

  const uniqueId = `${groupId}-${iconIndex}`;
</script>

<svg width={size} height={size} class={svgClass} {...restProps} aria-label={ariaLabel} viewBox="0 0 24 24" {role} stroke-width="1.5">
  <defs>
    <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%">
      {#if fillPercent !== 100}
        <stop offset="0%" stop-color={fillColor} />
        <stop offset="{fillPercent}%" stop-color={fillColor} />
        <stop offset="{fillPercent}%" stop-color="transparent" />
        <stop offset="100%" stop-color="transparent" />
      {:else}
        <stop offset="0%" stop-color={fillColor} />
        <stop offset="100%" stop-color={fillColor} />
      {/if}
    </linearGradient>
  </defs>

  <path d={pathd} fill="url(#{uniqueId})" stroke={strokeColor} stroke-linecap="round" stroke-linejoin="round" />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1246)
## Props
@prop fillPercent = 100
@prop fillColor = "#00ff00"
@prop strokeColor = "#00ff00"
@prop size = 24
@prop ariaLabel = "custom icon"
@prop iconIndex = 0
@prop groupId = "custom"
@prop role = "img"
@prop svgClass
@prop pathd = "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
@prop ...restProps
-->
