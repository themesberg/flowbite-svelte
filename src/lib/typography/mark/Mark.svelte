<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type MarkProps as Props, markVariants } from './index'

  let {
    children,
    class: className,
    ...attributes
  }: Props = $props();
</script>

<mark {...attributes} class={twMerge(markVariants(), className)}>
  {@render children()}
</mark>
