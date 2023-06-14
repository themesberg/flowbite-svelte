<script lang="ts">
  export let fillPercent: number = 100;
  export let fillColor: string = '#00b500';
  export let strokeColor: string = '#00b500';
  export let size: number = 24;
  export let ariaLabel: string = 'thumbup';
  export let id: string = 'thumbup';
  export let role = 'img';
</script>

<svg
  width={size}
  height={size}
  {...$$restProps}
  class={$$props.class}
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
    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>

<!--
  @component
  ## Features
  [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
  ## Props
  @prop fillPercent: number = 100;
  @prop fillColor: string = '#00b500';
  @prop strokeColor: string = '#00b500';
  @prop size: number = 24;
  @prop ariaLabel: string = 'thumbup';
  @prop id: string = 'thumbup';
  ## Event
  - on:click
  ## Example
  ```
  <script>
    import { Rating } from 'flowbite-svelte';
  </script>

  <Rating total={5} rating={4.7} id="example-5c" icon={Thumbup}/>
  <Rating total={10} rating={8.2} id="example-5d" icon={Thumbup}/>
  ```
-->
