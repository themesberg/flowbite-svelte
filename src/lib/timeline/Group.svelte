<script lang="ts">
  import { type GroupProps as Props, group } from ".";

  let { children, divClass, timeClass, date, olClass, ...restProps }: Props = $props();
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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop divClass
@prop timeClass
@prop date
@prop olClass
@prop ...restProps
-->
