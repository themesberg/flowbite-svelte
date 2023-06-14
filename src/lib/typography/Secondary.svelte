<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let color: string = 'text-gray-500 dark:text-gray-400';
  export let secondaryClass: string = 'font-semibold';
</script>

<small {...$$restProps} class={twMerge(color, secondaryClass, $$props.class)}>
  <slot />
</small>

<!--
  @component
  ## Features
  [Go to Heading Secondary](https://flowbite-svelte.com/docs/typography/heading#Second-level_heading)
  - Setup
  - Default heading
  - Second-level heading
  - Highlighted heading
  - Heading mark
  - Heading gradient
  - Heading underline
  - Breadcrumb context
  - Badge context
  - Secondary text
  - Sizes
  ## Props
  @prop color: string = 'text-gray-500 dark:text-gray-400';
  @prop secondaryClass: string = 'font-semibold';
  ## Example
  ```
  <script>
    import {  Heading, Secondary } from 'flowbite-svelte'
  </script>
  
  <Heading tag="h1" customSize="text-5xl font-extrabold">Flowbite <Secondary class="ml-2">This is secondary text</Secondary></Heading>
  ```
-->
