<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let forward: boolean;
  export let name: string;

  let buttonCls: string;
  $: buttonCls = twMerge('flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-hidden text-white dark:text-gray-300', forward ? 'end-0' : 'start-0', $$props.class);
</script>

<button on:click type="button" class={buttonCls}>
  <slot>
    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-hidden">
      {#if forward}
        <svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      {:else}
        <svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      {/if}
      <span class="sr-only">{name}</span>
    </span>
  </slot>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let forward: boolean;
@prop export let name: string;
-->
