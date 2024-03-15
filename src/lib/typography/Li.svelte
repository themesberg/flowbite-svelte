<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    icon?: boolean;
    liclass?: string | undefined;
  }

  let { children, icon, liclass, ...attributes }: Props = $props();
  let classLi: string = twMerge(liclass, icon && 'flex items-center');
</script>

<li {...attributes} class={classLi}>
  {#if children}
  {@render children()}
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:icon?: boolean;
@props:liclass?: string | undefined;
-->
