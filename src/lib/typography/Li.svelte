<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';

  interface Props {
    children: Snippet;
    icon?: boolean;
    liClass?: string | undefined;
  }

  let { children, icon, liClass, ...attributes }: Props = $props();
  const ctxclass: string = getContext('ctxclass');
  let classLi: string = twMerge(liClass, ctxclass, icon && 'flex items-center');
</script>

<li {...attributes} class={classLi}>
  {@render children()}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop icon
@prop liClass
@prop ...attributes
-->
