<script lang="ts">
  interface Props{
    children?: HTMLElement; 
    ulClass: string | undefined;
  }

  import { twMerge } from 'tailwind-merge';
  
  let { ulClass, children, ...attributes } = $props<Props>();
 
</script>

<ul {...attributes} class={twMerge('text-gray-600 dark:text-gray-400', ulClass)}>
  {@render children()}
</ul>