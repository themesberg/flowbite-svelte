<script lang="ts">
  export let fillPercent: number = 100;
  export let fillColor: string = '#ff0000';
  export let strokeColor: string = '#ff0000';
  export let size: number = 24;
  export let ariaLabel: string = 'heart';
  export let id: string = 'heart';
  export let role = 'img';
</script>

<svg
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  {role}
  stroke-width="1.5"
  stroke="currentColor"
  fill="none"
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
  <path
    fill="url(#{id})"
    stroke={strokeColor}
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

<!--
  @component
  ## Features
  [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
  ## Props
  @prop fillPercent: number = 100;
  @prop fillColor: string = '#ff0000';
  @prop strokeColor: string = '#ff0000';
  @prop size: number = 24;
  @prop ariaLabel: string = 'heart';
  @prop id: string = 'heart';
  ## Event
  - on:click
-->
