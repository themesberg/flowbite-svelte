<script lang="ts">
  import { group } from ".";
  import type { GroupProps } from "$lib/types";
  let { children, divClass, timeClass, date, olClass, ...restProps }: GroupProps = $props();
  const { div, time, ol } = $derived(group());
</script>

<div class={div({ class: divClass })}>
  <time class={time({ class: timeClass })}>{date}</time>
  <ol {...restProps} class={ol({ class: olClass })}>
    {@render children()}
  </ol>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1626)
## Props
@prop children
@prop divClass
@prop timeClass
@prop date
@prop olClass
@prop ...restProps
-->
