<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let href: string = '#';
  export let color: string = 'text-primary-600 dark:text-primary-500';
  export let aClass: string = 'inline-flex items-center hover:underline';
</script>

<a {...$$restProps} {href} class={twMerge(aClass, color, $$props.class)} on:click>
  <slot />
</a>

<!--
  @component
  ## Features
  [Go to Link](https://flowbite-svelte.com/docs/typography/link)
  - Setup
  - Default link
  - Button
  - Paragraph
  - Icon link
  - CTA link
  - Card link
  - Image link
  ## Props
  @prop italic: boolean = false;
  @prop underline: boolean = false;
  @prop linethrough: boolean = false;
  @prop uppercase: boolean = false;
  @prop gradient: boolean = false;
  @prop highlight: boolean = false;
  @prop highlightClass: string = 'text-blue-600 dark:text-blue-500';
  @prop decorationClass: string = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
  @prop gradientClass: string =
    'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
  ## Example
  ```
  <script>
    import { A } from 'flowbite-svelte';
  </script>

  <A class="font-medium hover:underline">Read more</A>
  ```
-->
