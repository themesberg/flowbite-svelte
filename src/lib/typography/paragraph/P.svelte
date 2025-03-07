<script lang="ts">
  import clsx from "clsx";
  import { type ParagraphProps as Props, paragraph } from "./index";

  let { children, class: className = "text-gray-900 dark:text-white", height = "normal", align = "left", justify = false, italic, firstUpper = false, whitespace = "normal", size = "base", space = "normal", weight = "normal", ...restProps }: Props = $props();

  let classP = $derived(paragraph({ height, size, weight, space, align, justify, italic, firstUpper, whitespace, class: clsx(className) }));
</script>

<p {...restProps} class={classP}>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:class: string = "text-gray-900 dark:text-white";
@props:height: any = "normal";
@props:align: any = "left";
@props:justify: any = false;
@props:italic: any;
@props:firstUpper: any = false;
@props:whitespace: any = "normal";
@props:size: any = "base";
@props:space: any = "normal";
@props:weight: any = "normal";
-->
