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

  let classList = twMerge(
    lists[list ?? (tag === 'ul' ? 'disc' : 'ol' ? 'decimal' : 'none')],
    positions[position],
    $$props.class
  );
</script>

<svelte:element this={tag} {...$$restProps} class={classList}>
  <slot />
</svelte:element>

<!--
  @component
  ## Features
  [Go to List](https://flowbite-svelte.com/docs/typography/list)
  - Setup
  - Unordored list
  - Icons
  - Nested
  - Unstyled
  - Ordered list
  - Nested
  - Description List
  - List with icon
  - Advanced layout
  - Horizontal List
  ## Props
  @prop tag: 'ul' | 'ol' | 'dl' = 'ul';
  @prop list: 'disc' | 'none' | 'decimal' | undefined = undefined;
  @prop position: 'inside' | 'outside' = 'inside';
  ## Example
  ```
  <script>
    import { Li, List, Heading } from 'flowbite-svelte';
  </script>
  
  <Heading
    tag="h2"
    customSize="text-lg font-semibold"
    class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
  <List tag="ul" class="space-y-1">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>
  ```
-->
