<script lang="ts">
  import { group } from "./theme";
  import type { GroupProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, date, class: className, classes, ...restProps }: GroupProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("group"));

  const { div, time, ol } = $derived(group());
</script>

<div class={div({ class: clsx(theme?.div, className) })}>
  <time class={time({ class: clsx(theme?.time, styling?.time) })}>{date}</time>
  <ol {...restProps} class={ol({ class: clsx(theme?.ol, styling?.ol) })}>
    {@render children()}
  </ol>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1755)
## Props
@prop children
@prop date
@prop class: className
@prop classes
@prop ...restProps
-->
