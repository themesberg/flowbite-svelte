<script lang="ts">
  import type { HTMLTdAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';

  interface $$Props extends HTMLTdAttributes {
    tdClass?: string;
  }

  export let tdClass: $$Props['tdClass'] = 'px-6 py-4 whitespace-nowrap font-medium ';

  let color = 'default';
  color = getContext('color');
  let tdClassfinal: string;
  $: tdClassfinal = twMerge(tdClass, color === 'default' ? 'text-gray-900 dark:text-white' : 'text-blue-50 whitespace-nowrap dark:text-blue-100', $$props.class);
</script>

<td {...$$restProps} class={tdClassfinal}>
  {#if $$props.onclick}
  <button on:click={$$props.onclick}>
    <slot />
  </button>
  {:else}
    <slot />
  {/if}
</td>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let tdClass: $$Props['tdClass'] = 'px-6 py-4 whitespace-nowrap font-medium ';
-->
