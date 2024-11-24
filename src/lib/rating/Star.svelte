<script lang="ts">
  import { type RatingIconProps as Props } from ".";

  let { fillPercent = 100, fillColor = "#F5CA14", strokeColor = "#F5CA14", size = 24, ariaLabel = "star", starIndex = 0, groupId ="star", role = "img", svgClass, ...restProps }: Props = $props();

  const uniqueId = `${groupId}-${starIndex}`;
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: fillPercent: number = 100;
@props:fillColor: string = "#F5CA14";
@props:strokeColor: string = "#F5CA14";
@props:size: number = 24;
@props:ariaLabel: string = "star";
@props:id: string = idGenerator();
@props:role: string = "img";
@props:svgClass: string;
-->
