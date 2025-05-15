<script lang="ts">
  import type { RatingIconProps } from "$lib/types";

  let { fillPercent = 100, fillColor = "#F5CA14", strokeColor = "#F5CA14", size = 24, ariaLabel = "star", iconIndex = 0, groupId = "star", role = "img", svgClass, ...restProps }: RatingIconProps = $props();

  const uniqueId = `${groupId}-${iconIndex}`;
</script>

<svg width={size} height={size} {...restProps} class={svgClass} aria-label={ariaLabel} viewBox="100 100 120 120" {role}>
  <defs>
    <linearGradient id={uniqueId}>
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
  <g fill="url(#{uniqueId})" stroke={strokeColor} stroke-width="2">
    <polygon
      points="165.000, 185.000, 188.511, 197.361, 184.021, 171.180, 
      203.042, 152.639, 176.756, 148.820, 165.000, 125.000, 
      153.244, 148.820, 126.958, 152.639, 145.979, 171.180,
      141.489, 197.361, 165.000, 185.000"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1246)
## Props
@prop fillPercent = 100
@prop fillColor = "#F5CA14"
@prop strokeColor = "#F5CA14"
@prop size = 24
@prop ariaLabel = "star"
@prop iconIndex = 0
@prop groupId = "star"
@prop role = "img"
@prop svgClass
@prop ...restProps
-->
