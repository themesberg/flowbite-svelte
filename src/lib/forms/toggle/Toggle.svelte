<script lang="ts">
  import { Label } from '../label';
  import { type ToggleProps as Props, toggle } from './index';

  let { children, toggleSize = 'default', value, checked = $bindable(), color = 'primary', aria_describedby, labelClass, inputClass, spanClass, leftLabel, ...restProps }: Props = $props();

  const { input, label, span } = $derived(toggle({ color, checked, size: toggleSize }));
</script>

<Label class={label({ class: labelClass })}>
  {#if leftLabel}
    {@render leftLabel()}
  {/if}
  <input type="checkbox" bind:checked {value} aria-describedby={aria_describedby} {...restProps} class={input({ class: inputClass })} />
  <span class={span({ class: spanClass })}></span>
  {@render children()}
</Label>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop toggleSize = 'default'
@prop value
@prop checked = $bindable()
@prop color = 'primary'
@prop aria_describedby
@prop labelClass
@prop inputClass
@prop spanClass
@prop ...restProps
-->
