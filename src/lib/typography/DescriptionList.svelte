<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children: Snippet;
    tag: 'dt' | 'dd';
    dtClass?: string | undefined;
    ddClass?: string | undefined;
  }

  let { children, tag, dtClass, ddClass, ...attributes }: Props = $props();
  
  const dtCls: string = twMerge(
    'text-gray-500 md:text-lg dark:text-gray-400',
    dtClass
  );
  const ddCls: string = twMerge('text-lg font-semibold', ddClass);

  let classDesc = twMerge(tag === 'dt' ? dtCls : ddCls);
</script>

<svelte:element this={tag} {...attributes} class={classDesc}>
 
    {@render children()}
  
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop tag
@prop dtClass
@prop ddClass
@prop ...attributes
-->
