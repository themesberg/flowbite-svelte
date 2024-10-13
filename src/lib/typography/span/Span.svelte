<script lang="ts">
  import { type SpanProps as Props, span } from "./index";

  let { children, class: className, italic, underline, linethrough, uppercase, gradient, highlight, decoration, decorationColor, decorationThickness, ...restProps }: Props = $props();

  let classSpan = $derived(
    span({
      italic,
      underline,
      linethrough,
      uppercase,
      gradient,
      highlight,
      decoration,
      decorationColor,
      decorationThickness,
      className
    })
  );
</script>

<span {...restProps} class={classSpan}>
  {#if children}
    {@render children()}
  {/if}
</span>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:class: string;
@props:italic: boolean;
@props:underline: boolean;
@props:linethrough: boolean;
@props:uppercase: boolean;
@props:gradient: "skyToEmerald" | "purpleToBlue" | "pinkToOrange" | "tealToLime" | "redToYellow" | "indigoToCyan" | "fuchsiaToRose" | "amberToEmerald" | "violetToRed" | "blueToGreen" | "orangeToPurple" | "yellowToRed" | "none" | undefined;
@props:highlight: "none" | "blue" | "green" | "red" | "yellow" | "purple" | "pink" | "indigo" | "teal" | "orange" | "cyan" | "fuchsia" | "amber" | "lime" | undefined;
@props:decoration: "none" | "solid" | "double" | "dotted" | "dashed" | "wavy" | undefined;
@props:decorationColor: "none" | "blue" | "green" | "red" | "yellow" | "purple" | "pink" | "indigo" | "teal" | "orange" | "cyan" | "fuchsia" | "lime" | "primary" | "secondary" | "gray" | "emerald" | "sky" | "violet" | "rose" | undefined;
@props:decorationThickness: "1" | "2" | "4" | "8" | "0" | undefined;
-->
