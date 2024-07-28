<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type SecondaryProps as Props, secondaryVariants } from './index';

  let {
    children,
    class: className,
    ...attributes
  }: Props = $props();
</script>

<small {...attributes} class={twMerge(secondaryVariants(), className)}>
  {@render children()}
</small>

