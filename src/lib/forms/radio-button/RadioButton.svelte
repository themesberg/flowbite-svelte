<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';
  import { type RadioButtonProps as Props, radioButton } from '.';

  let { children, group = $bindable(), value, inline = true, pill, outline, buttonSize, color, shadow, class: className, ...restProps }: Props = $props();

  const base = $derived(radioButton({ inline, className }));

  // let buttonCls: string = twMerge(inline ? 'inline-flex' : 'flex', btnClass);
  // $inspect('group: ', group, value, value === group)
</script>

<Button tag="label" checked={value === group} {pill} {outline} size={buttonSize} {color} {shadow} class={base}>
  <input type="radio" bind:group {value} {...restProps} class="sr-only" />
  {@render children()}
</Button>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop group = $bindable()
@prop value
@prop inline = true
@prop pill
@prop outline
@prop buttonSize
@prop color
@prop shadow
@prop class: className
@prop ...restProps
-->
