<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from '$lib/buttons/Button.svelte';
  import type { ButtonColorType, SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children: Snippet;
    group?: string | number;
    value?: string | number;
    inline?: boolean;
    btnclass?: string;
    pill?: boolean;
    outline?: boolean;
    size?: SizeType | undefined;
    color?: ButtonColorType | undefined;
    shadow?: boolean;
  }
  let {
    children,
    group,
    value,
    inline = true,
    btnclass,
    pill,
    outline,
    size,
    color,
    shadow,
    ...attributes
  }: Props = $props();

  let buttonCls: string = twMerge(inline ? 'inline-flex' : 'flex', btnclass);
</script>

<Button
  tag="label"
  checked={value === group}
  {pill}
  {outline}
  {size}
  {color}
  {shadow}
  btnclass={buttonCls}
>
  <input type="radio" bind:group {value} {...attributes} class="sr-only" />

    {@render children()}

</Button>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:group?: string | number;
@props:value?: string | number;
@props:inline?:  boolean; = true;
@props:btnclass?: string;
@props:pill?: boolean;
@props:outline?: boolean;
@props:size?: SizeType | undefined;
@props:color?: ButtonColorType | undefined;
@props:shadow?: boolean;
-->
