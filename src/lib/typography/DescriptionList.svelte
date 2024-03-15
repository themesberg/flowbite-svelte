<script lang="ts">
  interface Props {
    children?: any;
    tag: 'dt' | 'dd';
    dtclass?: string | undefined;
    ddclass?: string | undefined;
  }
  import { twMerge } from 'tailwind-merge';
  let { children, tag, dtclass, ddclass, ...attributes }: Props = $props();
  // export let tag: 'dt' | 'dd';
  const dtCls: string = twMerge(
    'text-gray-500 md:text-lg dark:text-gray-400',
    dtclass
  );
  const ddCls: string = twMerge('text-lg font-semibold', ddclass);

  let classDesc = twMerge(tag === 'dt' ? dtCls : ddCls);
</script>

<svelte:element this={tag} {...attributes} class={classDesc}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:tag: 'dt' | 'dd';
@props:dtclass?: string | undefined;
@props:ddclass?: string | undefined;
-->
