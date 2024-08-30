<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { codewrapper } from './theme';
  interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: Snippet;
    codeblock?: Snippet;
    innderClass?: string;
  }
  let { children, codeblock, innderClass, class: classname }: Props = $props();
  const {base, inner} = $derived(codewrapper());
</script>

<div class={base({class: classname})}>
  {#if children}
    <div class={inner({ class: innderClass})}>
      {@render children()}
    </div>
  {/if}
  {#if codeblock}
    {@render codeblock()}
  {/if}
</div>
