<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { SizeType } from '$lib/types';

  interface Props {
    children: Snippet;
    size?: SizeType;
    class?: string | undefined;
  }

  let { children, size = 'md', class: divClass, ...attributes }: Props = $props();

  // export let size: SizeType = 'md';
  const divCls: string = 'inline-flex rounded-lg shadow-sm';

  setContext('group', { size });
</script>

<div {...attributes} class={twMerge(divCls, divClass)} role="group">

  {@render children()}

</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop size = 'md'
@prop divClass = ''
@prop ...attributes
-->
