<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';

  interface Props {
    children: Snippet;
    icon?: boolean;
    liclass?: string | undefined;
  }

  let { children, icon, liclass, ...attributes }: Props = $props();
  const ctxclass: string = getContext('ctxclass');
  let classLi: string = twMerge(liclass, ctxclass, icon && 'flex items-center');
</script>

<li {...attributes} class={classLi}>
  {@render children()}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:icon?: boolean;
@props:liclass?: string | undefined;
-->
