<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type DescriptionListProps as Props, descriptionListVariants } from './index';

  let { children, tag, dtClass, ddClass, class: className, ...attributes }: Props = $props();

  let classDesc = descriptionListVariants({ 
    tag, 
    class: className
  });
</script>

<svelte:element this={tag} {...attributes} class={classDesc}>
  {@render children()}
</svelte:element>


