<script lang="ts">
  import { idGenerator } from '$lib/uiHelpers.svelte';

  interface Props {
    fillPercent?: number;
    fillColor?: string;
    strokeColor?: string;
    size?: number;
    ariaLabel?: string;
    id?: string;
    role?: string;
    svgclass?: string;
  }

  let { fillPercent = 100, fillColor = '#ff0000', strokeColor = '#ff0000', size = 24, ariaLabel = 'heart', id = idGenerator(), role = 'img', svgclass, ...attributes } = $props<Props>();
</script>

<svg width={size} height={size} class={svgclass} {...attributes} aria-label={ariaLabel} viewBox="0 0 24 24" {role} stroke-width="1.5" stroke="currentColor" fill="none">
  <defs>
    <linearGradient {id}>
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
  <path fill="url(#{id})" stroke={strokeColor} stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: fillPercent?:  number; = 100, fillColor;
@props:fillColor?: string;
@props:strokeColor?: string;
@props:size?: number;
@props:ariaLabel?: string;
@props:id?: string;
@props:role?: string;
@props:svgclass?: string;
-->
