<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { FormColorType } from '../types';
  import { labelCls, inputCls } from './Radio.svelte';
  import Label from './Label.svelte';

  interface Props {
    children?: Snippet;
    disabled?: boolean;
    aria_describedby?: string;
    color?: FormColorType;
    custom?: boolean;
    inline?: boolean;
    group?: (string | number)[];
    value?: string | number;
    checked?: boolean | undefined;
    spacing?: string;
    labelclass?: string;
    inputclass?: string;
    indeterminate?: boolean;
    id?: string;
  }

  let {
    children,
    disabled,
    aria_describedby,
    color = 'primary',
    custom = false,
    inline = false,
    group = [],
    value = 'on',
    checked = $bindable(false),
    spacing = 'me-2',
    labelclass = '',
    inputclass = '',
    indeterminate = false,
    id,
    ...attributes
  }: Props = $props();
</script>

<Label labelclass={labelCls(inline, labelclass)}>
  <input
    type="checkbox"
    bind:checked
    {value}
    aria-describedby={aria_describedby}
    {disabled}
    {indeterminate}
    {...attributes}
    class={twMerge(spacing, inputCls(custom, color, true, false, inputclass))}
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
@prop disabled
@prop aria_describedby
@prop color = 'primary'
@prop custom = false
@prop inline = false
@prop group = []
@prop value = 'on'
@prop checked = $bindable(false)
@prop spacing = 'me-2'
@prop labelclass = ''
@prop inputclass = ''
@prop ...attributes
-->
