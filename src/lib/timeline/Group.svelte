<script lang="ts">
  import { group } from "./theme";
  import type { GroupProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { untrack } from "svelte";

  let { children, divClass, timeClass, date, olClass, class: className, classes, ...restProps }: GroupProps = $props();

  warnThemeDeprecation(
    "Group",
    untrack(() => ({ divClass, timeClass, olClass })),
    {
      divClass: "class",
      timeClass: "time",
      olClass: "ol"
    }
  );

  const styling = $derived({
    time: timeClass,
    ol: olClass
  });

  const theme = $derived(getTheme("group"));

  const { div, time, ol } = $derived(group());
</script>

<div class={div({ class: clsx(theme?.div, className ?? divClass) })}>
  <time class={time({ class: clsx(theme?.time, styling.time) })}>{date}</time>
  <ol {...restProps} class={ol({ class: clsx(theme?.ol, styling.ol) })}>
    {@render children()}
  </ol>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1924)
## Props
@prop children
@prop divClass
@prop timeClass
@prop date
@prop olClass
@prop class: className
@prop classes
@prop ...restProps
-->
