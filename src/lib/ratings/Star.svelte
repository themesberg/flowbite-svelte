<script lang="ts">
  import generateId from '$lib/utils/generateId';

  export let fillPercent: number = 100;
  export let fillColor: string = '#F5CA14';
  export let strokeColor: string = '#F5CA14';
  export let size: number = 24;
  export let ariaLabel: string = 'star';
  export let id: string = generateId();
  export let role = 'img';
</script>

<svg
  width={size}
  height={size}
  {...$$restProps}
  class={$$props.class}
  aria-label={ariaLabel}
  viewBox="100 100 120 120"
  {role}
  on:click>
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
  ## Features
  [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
  ## Props
  @prop fillPercent: number = 100;
  @prop fillColor: string = '#F5CA14';
  @prop strokeColor: string = '#F5CA14';
  @prop size: number = 24;
  @prop ariaLabel: string = 'star';
  @prop id: string = generateId();
  ## Event
  - on:click
  ## Example
  ```
  <script>
    import { Rating } from 'flowbite-svelte';
  </script>

  <Rating id="example-1" total={5} size={50} rating={1.4} />
  <Rating id="example-1b" total={5} size={50} rating={4.66} />
  ```
-->
