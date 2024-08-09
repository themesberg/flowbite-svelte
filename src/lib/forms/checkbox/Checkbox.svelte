<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { labelCls, inputCls } from '../radio/Radio.svelte';
  import Label from '../label/Label.svelte';
  import { type CheckboxProps as Props, checkbox } from '.';

  let {
    children,
    aria_describedby,
    color = 'primary',
    custom,
    inline,
    tinted,
    rounded,
    group = [],
    checked = $bindable(false),
    spacing,
    groupLabelClass,
    indeterminate,
    class: className,
    ...attributes
  }: Props = $props();

  const { base, label } = $derived(checkbox({ color, tinted, custom, rounded, inline }));
</script>

<Label class={label({class: groupLabelClass})}>
  <input
    type="checkbox"
    bind:checked
    aria-describedby={aria_describedby}
    {indeterminate}
    {...attributes}
    class={base({ class: className})}
  />
  {#if children}
    {@render children()}
  {/if}
</Label>


<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop aria_describedby
@prop color = 'primary'
@prop custom = false
@prop inline = false
@prop group = []
@prop checked = $bindable(false)
@prop spacing = 'me-2'
@prop groupLabelClass = ''
@prop groupInputClass = ''
@prop indeterminate = false
@prop class: className
@prop ...attributes
-->
