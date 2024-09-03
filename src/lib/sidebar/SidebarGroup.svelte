<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLUListElement> {
    children: Snippet;
    borderClass?: string;
    border?: boolean;
  }

  let { children, class: className = 'space-y-2', borderClass = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700', border = false, ...restProps }: Props = $props();
</script>

<ul {...restProps} class={border ? borderClass : className}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className = 'space-y-2'
@prop borderClass = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700'
@prop border = false
@prop ...restProps
-->
