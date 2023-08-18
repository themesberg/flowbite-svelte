<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let tag: 'ul' | 'ol' | 'dl' = 'ul';
  export let list: 'disc' | 'none' | 'decimal' | undefined = undefined;
  export let position: 'inside' | 'outside' = 'inside';

  let lists = {
    disc: 'list-disc',
    none: 'list-none',
    decimal: 'list-decimal'
  };

  let positions = {
    inside: 'list-inside',
    outside: 'list-outside'
  };

  let classList = twMerge(lists[list ?? (tag === 'ul' ? 'disc' : 'ol' ? 'decimal' : 'none')], positions[position], $$props.class);
</script>

<svelte:element this={tag} {...$$restProps} class={classList}>
  <slot />
</svelte:element>

<!--
  @component
  [Go to List](https://flowbite-svelte.com/docs/typography/list)
  ## Props
  @prop tag: 'ul' | 'ol' | 'dl' = 'ul';
  @prop list: 'disc' | 'none' | 'decimal' | undefined = undefined;
  @prop position: 'inside' | 'outside' = 'inside';
-->
