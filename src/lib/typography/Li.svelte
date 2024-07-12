<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type { HTMLLiAttributes } from 'svelte/elements';

  interface Props extends HTMLLiAttributes{
    children: Snippet;
    icon?: boolean;
    class?: string | undefined;
  }

  let { children, icon, class: className, ...attributes }: Props = $props();
  const ctxclass: string = getContext('ctxclass');
</script>

<li {...attributes} class={twMerge(className, ctxclass, icon && 'flex items-center')}>
  {@render children()}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop icon
@prop class: className
@prop ...attributes
-->
