<script lang="ts">
  import type { HTMLAttributes } from'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLSpanElement> {
    italic?: boolean;
    underline?: boolean;
    linethrough?: boolean;
    uppercase?: boolean;
    gradient?: boolean;
    highlight?: boolean;
    highlightClass?: string;
    decorationClass?: string;
    gradientClass?: string;
  }

  export let italic: $$Props['italic'] = false;
  export let underline: $$Props['underline'] = false;
  export let linethrough: $$Props['linethrough'] = false;
  export let uppercase: $$Props['uppercase'] = false;
  export let gradient: $$Props['gradient'] = false;
  export let highlight: $$Props['highlight'] = false;
  export let highlightClass: $$Props['highlightClass'] = 'text-blue-600 dark:text-blue-500';
  export let decorationClass: $$Props['decorationClass'] = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
  export let gradientClass: $$Props['gradientClass'] = 'text-transparent bg-clip-text bg-linear-to-r to-emerald-600 from-sky-400';

  let underlineClass = twMerge('underline', decorationClass);
  let classSpan: string = twMerge(italic && 'italic', underline && underlineClass, linethrough && 'line-through', uppercase && 'uppercase', gradient ? gradientClass : 'font-semibold text-gray-900 dark:text-white', highlight && highlightClass, $$props.class);
</script>

<span {...$$restProps} class={classSpan}>
  <slot />
</span>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let italic: $$Props['italic'] = false;
@prop export let underline: $$Props['underline'] = false;
@prop export let linethrough: $$Props['linethrough'] = false;
@prop export let uppercase: $$Props['uppercase'] = false;
@prop export let gradient: $$Props['gradient'] = false;
@prop export let highlight: $$Props['highlight'] = false;
@prop export let highlightClass: $$Props['highlightClass'] = 'text-blue-600 dark:text-blue-500';
@prop export let decorationClass: $$Props['decorationClass'] = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
@prop export let gradientClass: $$Props['gradientClass'] = 'text-transparent bg-clip-text bg-linear-to-r to-emerald-600 from-sky-400';
-->
