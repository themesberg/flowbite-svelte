<script context="module" lang="ts">
  import type { SizeType, FormSizeType } from '$lib/types';
  export function clampSize(s: SizeType) {
    return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
  }
</script>

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import { type InputProps as Props, input } from '.';

  let {
    children,
    left,
    right,
    value = $bindable(),
    size,
    defaultClass = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right',
    color = 'base',
    floatClass = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400',
    class: className,
    classLeft,
    classRight,
    show = false,
    ...attributes
  }: Props = $props();

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  let group: { size: SizeType } = getContext('group');
  let isGroup = !!group;
  let _size = $derived(size || clampSize(group?.size) || 'md');
  const _color = $derived(color === 'base' && background ? 'tinted' : color);

  const {
    input: inputCls,
    left: leftCls,
    right: rightCls
  } = $derived(
    input({ size: _size, color: _color, group: isGroup, class: className })
  );
</script>

{#snippet inputContent()}
  {#if left}
    <div class={leftCls({ class: classLeft })}>
      {@render left()}
    </div>
  {/if}
  <input {...attributes} bind:value class={inputCls({ class: className })} />
  {#if children}
    {@render children()}
  {/if}
  {#if right}
    <div class={rightCls({ class: classRight })}>
      {@render right()}
    </div>
  {/if}
{/snippet}

{#if group}
  {@render inputContent()}
{:else}
  <div class="relative w-full">
    {@render inputContent()}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop left
@prop right
@prop value = $bindable()
@prop size
@prop defaultClass = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right'
@prop color = 'base'
@prop floatClass = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400'
@prop class: className
@prop classLeft
@prop classRight
@prop show = false
@prop ...attributes
-->
