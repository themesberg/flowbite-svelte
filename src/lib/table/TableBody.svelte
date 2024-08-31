<script lang="ts" generics="T">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  export let tableBodyClass: string | undefined = undefined;

  let sorting = getContext('sorting') as Writable<{ items: T[]; direction: -1 | 1; sorter: string }>;
</script>

<tbody class={tableBodyClass}>
  <slot />
  {#each $sorting?.items || [] as item}
  <slot name="row" {item} />
  {/each}
</tbody>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let tableBodyClass: string | undefined = undefined;
-->
