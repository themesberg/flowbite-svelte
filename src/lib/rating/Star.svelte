<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';
  import generateId from '$lib/utils/generateId';

  interface $$Props extends SVGAttributes<SVGSVGElement> {
    fillPercent?: number;
    fillColor?: string;
    strokeColor?: string;
    size?: number;
    ariaLabel?: string;
    id?: string;
    role?: string;
  }

  export let fillPercent: $$Props['fillPercent'] = 100;
  export let fillColor: $$Props['fillColor'] = '#F5CA14';
  export let strokeColor: $$Props['strokeColor'] = '#F5CA14';
  export let size: $$Props['size'] = 24;
  export let ariaLabel: $$Props['ariaLabel'] = 'star';
  export let id: $$Props['id'] = generateId();
  export let role: $$Props['role'] = 'img';
</script>

<svg width={size} height={size} {...$$restProps} class={$$props.class} aria-label={ariaLabel} viewBox="100 100 120 120" {role} on:click>
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
  <g fill="url(#{id})" stroke={strokeColor} stroke-width="2">
    <polygon
      points="165.000, 185.000, 188.511, 197.361, 184.021, 171.180, 
    203.042, 152.639, 176.756, 148.820, 165.000, 125.000, 
    153.244, 148.820, 126.958, 152.639, 145.979, 171.180,
    141.489, 197.361, 165.000, 185.000" />
  </g>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let fillPercent: $$Props['fillPercent'] = 100;
@prop export let fillColor: $$Props['fillColor'] = '#F5CA14';
@prop export let strokeColor: $$Props['strokeColor'] = '#F5CA14';
@prop export let size: $$Props['size'] = 24;
@prop export let ariaLabel: $$Props['ariaLabel'] = 'star';
@prop export let id: $$Props['id'] = generateId();
@prop export let role: $$Props['role'] = 'img';
-->
