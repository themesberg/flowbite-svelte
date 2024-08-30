<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { codewrapper } from './theme';
  interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: Snippet;
  }
  let { children, class: classname }: Props = $props();
  const base = $derived(codewrapper({class: classname}));
</script>

<div class={base}>
  {#if children}
    {@render children()}
  {/if}
</div>
