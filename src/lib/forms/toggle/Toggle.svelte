<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { Label } from '../label';
  import { labelCls, inputCls } from '../radio/Radio.svelte';
  import { type ToggleProps as Props, toggleSpanVariants } from './index';

  let {
    children,
    toggleSize = 'default',
    value,
    checked = $bindable(),
    class: className,
    color = 'primary',
    inline = false,
    labelClass = '',
    aria_describedby,
    spacing = 'me-2',
    custom = true,
    inputClass = '',
    ...attributes
  }: Props = $props();

  let spanCls: string = twMerge(
    toggleSpanVariants({ color, size: toggleSize }),
    className
  );
</script>

<Label class={labelCls(inline, labelClass)}>
  <input
    type="checkbox"
    bind:checked
    {value}
    aria-describedby={aria_describedby}
    {...attributes}
    class={twMerge(spacing, inputCls(custom, color, true, false, inputClass))}
  />
  <span class={spanCls}></span>
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
@prop class: className
@prop color = 'primary'
@prop inline = false
@prop labelClass = ''
@prop aria_describedby
@prop spacing = 'me-2'
@prop custom = true
@prop inputClass = ''
@prop ...attributes
-->
