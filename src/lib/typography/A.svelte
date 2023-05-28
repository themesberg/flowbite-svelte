<script lang="ts">
  import classNames from 'classnames';

  export let href: string = '#';
  export let color: string = 'text-blue-600 dark:text-blue-500';
  export let aClass: string = 'inline-flex items-center hover:underline';
</script>

<a {...$$restProps} {href} class={classNames(aClass, color, $$props.class)}>
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
