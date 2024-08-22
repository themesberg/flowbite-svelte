<script lang="ts">
  import { type GroupProps as Props, group } from '.';

  let { children, divClass, timeClass, date, olClass, ...restProps }: Props = $props();
  const { div, time, ol } = $derived(group());
</script>

<div class={div({ class: divClass })}>
  <time class={time({ class: timeClass })}>{date}</time>
  <ol class={ol({ class: olClass })} {...restProps}>
    {@render children()}
  </ol>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop divClass
@prop timeClass
@prop date
@prop olClass
@prop ...restProps
-->
