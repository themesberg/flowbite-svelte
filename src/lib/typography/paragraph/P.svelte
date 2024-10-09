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
@props:height: VariantProps<typeof paragraph>["height"] = "normal";
@props:align: VariantProps<typeof paragraph>["align"] = "left";
@props:justify: boolean = false;
@props:italic: boolean;
@props:firstUpper: boolean = false;
@props:whitespace: VariantProps<typeof paragraph>["whitespace"] = "normal";
@props:size: VariantProps<typeof paragraph>["size"] = "base";
@props:space: VariantProps<typeof paragraph>["space"] = "normal";
@props:weight: VariantProps<typeof paragraph>["weight"] = "normal";
-->
