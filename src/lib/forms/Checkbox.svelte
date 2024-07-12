<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { FormColorType } from '../types';
  import { labelCls, inputCls } from './Radio.svelte';
  import Label from './Label.svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes{
    children?: Snippet;
    aria_describedby?: string;
    color?: FormColorType;
    custom?: boolean;
    inline?: boolean;
    group?: (string | number)[];
    checked?: boolean | undefined | null;
    spacing?: string;
    groupLabelClass?: string;
    groupInputClass?: string;
    indeterminate?: boolean;
    class?: string;
  }

  let {
    children,
    aria_describedby,
    color = 'primary',
    custom = false,
    inline = false,
    group = [],
    checked = $bindable(false),
    spacing = 'me-2',
    groupLabelClass = '',
    groupInputClass = '',
    indeterminate = false,
    class: className,
    ...attributes
  }: Props = $props();
</script>

<Label class={labelCls(inline, groupLabelClass)}>
  <input
    type="checkbox"
    bind:checked
    aria-describedby={aria_describedby}
    {indeterminate}
    {...attributes}
    class={twMerge(spacing, inputCls(custom, color, true, false, groupInputClass), className)}
  />
  {#if children}
    {@render children()}
  {/if}
</Label>
