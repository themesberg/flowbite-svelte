<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';

  interface Props {
    children: Snippet;
    tag?: 'ul' | 'ol' | 'dl';
    list?: 'disc' | 'none' | 'decimal' | undefined;
    position?: 'inside' | 'outside';
    ctxclass?: string | undefined | null;
    class?: string | undefined;
  }

  let {
    children,
    tag = 'ul',
    list,
    position = 'inside',
    ctxclass = '',
    class: classname,
    ...attributes
  }: Props = $props();

  setContext('ctxclass', ctxclass);

  let lists = {
    disc: 'list-disc',
    none: 'list-none',
    decimal: 'list-decimal'
  };

  let positions = {
    inside: 'list-inside',
    outside: 'list-outside'
  };

  let classList = twMerge(
    lists[list ?? (tag === 'ul' ? 'disc' : 'ol' ? 'decimal' : 'none')],
    positions[position],
    classname
  );
</script>

<svelte:element this={tag} {...attributes} class={classList}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop tag = 'ul'
@prop list
@prop position = 'inside'
@prop ctxclass=''
@prop class: classname
@prop ...attributes
-->
