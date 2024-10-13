<script lang="ts">
  import { type ParagraphProps as Props, paragraph } from "./index";

  let { children, class: className = "text-gray-900 dark:text-white", height = "normal", align = "left", justify = false, italic, firstUpper = false, whitespace = "normal", size = "base", space = "normal", weight = "normal", ...restProps }: Props = $props();

  let classP = $derived(paragraph({ height, size, weight, space, align, justify, italic, firstUpper, whitespace, className }));
</script>

<p {...restProps} class={classP}>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:class: string = "text-gray-900 dark:text-white";
@props:height: "normal" | "tight" | "none" | "snug" | "relaxed" | "loose" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | undefined = "normal";
@props:align: "left" | "center" | "right" | undefined = "left";
@props:justify: boolean = false;
@props:italic: boolean;
@props:firstUpper: boolean = false;
@props:whitespace: "normal" | "nowrap" | "pre" | "preline" | "prewrap" | undefined = "normal";
@props:size: "sm" | "lg" | "xl" | "2xl" | "xs" | "base" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined = "base";
@props:space: "normal" | "tighter" | "tight" | "wide" | "wider" | "widest" | undefined = "normal";
@props:weight: "normal" | "thin" | "extralight" | "light" | "medium" | "semibold" | "bold" | "extrabold" | "black" | undefined = "normal";
-->
