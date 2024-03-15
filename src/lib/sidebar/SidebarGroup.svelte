<script lang="ts">
  interface Props {
    children?: any;
    ulclass?: string | undefined;
    borderClass?: string | undefined;
    border?: boolean;
  }
  import { twMerge } from 'tailwind-merge';

  let {
    children,
    ulclass,
    borderClass,
    border = false,
    ...attributes
  }: Props = $props();

  let ulCls: string = $state(twMerge('space-y-2', ulclass));
  let borderCls: string = twMerge(
    'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700',
    borderClass
  );
  // export let border: boolean = false;

  // if (border) {
  // 	ulCls += ' ' + borderCls;
  // }
</script>

<ul {...attributes} class={border ? borderCls : ulCls}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:ulclass?: string | undefined;
@props:borderClass?: string | undefined;
@props:border?:  boolean; = false;
-->
