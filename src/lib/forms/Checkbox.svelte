<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { FormColorType } from '../types';
  import { labelCls, inputCls } from './Radio.svelte';
  import Label from './Label.svelte';
  interface Props {
    children?: any;
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
    color = 'primary',
    custom = false,
    inline = false,
    group = [],
    value = 'on',
    checked,
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
@props: children?: any;
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
