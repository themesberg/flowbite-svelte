<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from '$lib/buttons/Button.svelte';
  import type { ButtonColorType, SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes {
    children: Snippet;
    group?: string | number;
    value?: string | number;
    inline?: boolean;
    btnClass?: string | undefined | null;
    pill?: boolean;
    outline?: boolean;
    buttonSize?: SizeType | undefined;
    color?: ButtonColorType | undefined;
    shadow?: boolean;
  }
  let {
    children,
    group = $bindable(),
    value,
    inline = true,
    btnClass,
    pill,
    outline,
    buttonSize,
    color,
    shadow,
    ...attributes
  }: Props = $props();

  let buttonCls: string = twMerge(inline ? 'inline-flex' : 'flex', btnClass);
  // $inspect('group: ', group, value, value === group)
</script>

<Button
  tag="label"
  checked={value === group}
  {pill}
  {outline}
  size={buttonSize}
  {color}
  {shadow}
  class={buttonCls}
>
  <input type="radio" bind:group {value} {...attributes} class="sr-only" />
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
@prop btnClass
@prop pill
@prop outline
@prop buttonSize
@prop color
@prop shadow
@prop ...attributes
-->
