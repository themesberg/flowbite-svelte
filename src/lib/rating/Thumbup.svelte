<script lang="ts">
  import clsx from "clsx";
  import type { RatingIconProps } from "$lib/types";

  let { fillPercent = 100, fillColor = "#00b500", strokeColor = "#00b500", size = 24, ariaLabel = "thumbup", iconIndex = 0, groupId = "star", role = "img", svgClass, ...restProps }: RatingIconProps = $props();

  const uniqueId = `${groupId}-${iconIndex}`;
</script>

<svg width={size} height={size} {...restProps} class={clsx(svgClass)} aria-label={ariaLabel} viewBox="0 0 24 24" {role} stroke-width="1.5" stroke="currentColor" fill="none">
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
  <path fill="url(#{uniqueId})" stroke={strokeColor} stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1321)
## Props
@prop fillPercent = 100
@prop fillColor = "#00b500"
@prop strokeColor = "#00b500"
@prop size = 24
@prop ariaLabel = "thumbup"
@prop iconIndex = 0
@prop groupId = "star"
@prop role = "img"
@prop svgClass
@prop ...restProps
-->
