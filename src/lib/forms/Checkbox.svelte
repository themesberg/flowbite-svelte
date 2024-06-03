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
@props: children?: Snippet;
@props:color?:  FormColorType; = 'primary';
@props:custom?:  boolean; = false;
@props:inline?:  boolean; = false;
@props:group?:  (string | number)[]; = [];
@props:value?:  string | number; = 'on';
@props:checked?: boolean | undefined;
@props:spacing?:  string; = 'me-2';
@props:labelclass?:  string; = '';
@props:inputclass?:  string; = '';
-->
