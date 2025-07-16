<script lang="ts">
  import { group, type GroupTheme } from ".";
  import type { GroupProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, divClass, timeClass, date, olClass, ...restProps }: GroupProps = $props();

  const theme = getTheme("group");

  const { div, time, ol } = $derived(group());
</script>

<div class={div({ class: clsx((theme as GroupTheme)?.div, divClass)})}>
  <time class={time({ class: clsx((theme as GroupTheme)?.time, timeClass)})}>{date}</time>
  <ol {...restProps} class={ol({ class: clsx((theme as GroupTheme)?.ol, olClass)})}>
    {@render children()}
  </ol>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1784)
## Props
@prop children
@prop divClass
@prop timeClass
@prop date
@prop olClass
@prop ...restProps
-->
