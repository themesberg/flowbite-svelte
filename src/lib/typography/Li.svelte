<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let icon: boolean = false;
  export let liClass: string = '';
  let classLi: string = twMerge(liClass, icon && 'flex items-center', $$props.class);
</script>

<li {...$$restProps} class={classLi}>
  <slot />
</li>

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
  @prop icon: boolean = false;
  @prop liClass: string = '';
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
