<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import Label from '../Label.svelte';
  import { labelCls, inputCls } from '../Radio.svelte';
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
    toggleSpanVariants({color, size: toggleSize}),
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

