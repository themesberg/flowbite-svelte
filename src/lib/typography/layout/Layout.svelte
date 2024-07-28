<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type LayoutProps as Props, layoutVariants } from './index';

  let { children, class: className, ...attributes }: Props = $props();

  let classDiv = twMerge(layoutVariants(), className);
</script>

<div {...attributes} class={classDiv}>
  {@render children()}
</div>

