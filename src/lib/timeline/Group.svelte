<script lang="ts">
  import { group, type GroupTheme } from ".";
  import type { GroupProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, divClass, timeClass, date, olClass, ...restProps }: GroupProps = $props();

  const theme = getTheme('group');

  const { div, time, ol } = $derived(group());
</script>

<div class={cn(div({ class: divClass }), (theme as GroupTheme)?.div)}>
  <time class={cn(time({ class: timeClass }), (theme as GroupTheme)?.time)}>{date}</time>
  <ol {...restProps} class={cn(ol({ class: olClass }), (theme as GroupTheme)?.ol)}>
    {@render children()}
  </ol>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1792)
## Props
@prop children
@prop divClass
@prop timeClass
@prop date
@prop olClass
@prop ...restProps
-->
