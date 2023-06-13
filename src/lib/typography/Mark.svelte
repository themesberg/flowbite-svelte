<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let color: string = 'text-white dark:bg-blue-500';
  export let bgColor: string = 'bg-blue-600';
  export let markClass: string = 'px-2 rounded';
</script>

<mark {...$$restProps} class={twMerge(markClass, bgColor, color, $$props.class)}>
  <slot />
</mark>

<!--
  @component
  ## Features
  [Go to Heading](https://flowbite-svelte.com/docs/typography/heading)
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
  @prop color: string = 'text-white dark:bg-blue-500';
  @prop bgColor: string = 'bg-blue-600';
  @prop markClass: string = 'px-2 rounded';
  ## Example
  ```
  <script>
    import {  Heading, P, Mark } from 'flowbite-svelte'
  </script>
  
  <Heading tag="h1" class='mb-4'>Regain <Mark>control</Mark> over your days</Heading>
  <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
  ```
-->
