<script lang="ts">
  // import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  // import type { SizeType } from '$lib/types';
  import { type ButtonGroupProps as Props, buttonGroupVariants } from './index'

  // interface Props {
  //   children: Snippet;
  //   size?: SizeType;
  //   class?: string | undefined;
  // }

  let {
    children,
    size = 'md',
    class: divClass,
    ...attributes
  }: Props = $props();

  // export let size: SizeType = 'md';
  // const divCls: string = 'inline-flex rounded-lg shadow-sm';
  let groupClass = buttonGroupVariants({ size, class: divClass });
  setContext('group', { size });
</script>

<div {...attributes} class={groupClass} role="group">
  {@render children()}
</div>
