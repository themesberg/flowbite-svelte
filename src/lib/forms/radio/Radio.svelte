<script lang="ts">
  import { getContext } from 'svelte';
  import Label from '../label/Label.svelte';
  import { type RadioProps as Props, radio } from '.';

  let { children, aria_describedby, labelClass, color = 'primary', group = $bindable(), value, inputClass, ...restProps }: Props = $props();
  const { input, label } = $derived(radio({ color, tinted: !!getContext('background') }));
</script>

<Label class={label({ class: labelClass })}>
  <input type="radio" bind:group {value} aria-describedby={aria_describedby} {...restProps} class={input({ class: inputClass })} />
  {@render children()}
</Label>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop aria_describedby
@prop labelClass
@prop color = 'primary'
@prop group = $bindable()
@prop value
@prop inputClass
@prop ...restProps
-->
