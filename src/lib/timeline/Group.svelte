<script lang="ts">
  import { group } from "./theme";
  import type { GroupProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, date, class: className, classes, ...restProps }: GroupProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("group"));

  const { card, time, list } = $derived(group());
</script>

<div class={card({ class: clsx(theme?.card, className) })} data-scope="group" data-part="card">
  <time class={time({ class: clsx(theme?.time, styling?.time) })} data-part="time">{date}</time>
  <ol {...restProps} class={list({ class: clsx(theme?.list, styling?.list) })} data-part="list">
    {@render children()}
  </ol>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1764)
## Props
@prop children
@prop date
@prop class: className
@prop classes
@prop ...restProps
-->
