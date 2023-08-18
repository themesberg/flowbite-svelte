<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let italic: boolean = false;
  export let underline: boolean = false;
  export let linethrough: boolean = false;
  export let uppercase: boolean = false;
  export let gradient: boolean = false;
  export let highlight: boolean = false;
  export let highlightClass: string = 'text-blue-600 dark:text-blue-500';
  export let decorationClass: string = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
  export let gradientClass: string = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';

  let underlineClass = twMerge('underline', decorationClass);
  let classSpan: string = twMerge(italic && 'italic', underline && underlineClass, linethrough && 'line-through', uppercase && 'uppercase', gradient ? gradientClass : 'font-semibold text-gray-900 dark:text-white', highlight && highlightClass, $$props.class);
</script>

<span {...$$restProps} class={classSpan}>
  <slot />
</span>

<!--
  @component
  [Go to Heading Span](https://flowbite-svelte.com/docs/typography/heading)
  ## Props
  @prop italic: boolean = false;
  @prop underline: boolean = false;
  @prop linethrough: boolean = false;
  @prop uppercase: boolean = false;
  @prop gradient: boolean = false;
  @prop highlight: boolean = false;
  @prop highlightClass: string = 'text-blue-600 dark:text-blue-500';
  @prop decorationClass: string = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
  @prop gradientClass: string = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
-->
