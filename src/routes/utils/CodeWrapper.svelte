<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { codewrapper } from './theme';
  interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: Snippet;
    codeblock?: Snippet;
    innerClass?: string;
    class?: string;
    codeClass?: string;
  }
  let { children, codeblock, innerClass, codeClass, class: classname }: Props = $props();
  const { base, inner } = $derived(codewrapper());
  const codeCls = children ? 'border-t border-gray-200 dark:border-gray-600' : '';
</script>

<div class={base({ class: classname })}>
  {#if children}
    <div class={inner({ class: innerClass })}>
      {@render children()}
    </div>
  {/if}
  {#if codeblock}
    <div class="{codeCls} {codeClass}">
      {@render codeblock()}
    </div>
  {/if}
</div>