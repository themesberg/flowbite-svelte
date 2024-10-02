<script lang="ts">
  import type { SizeType } from '$lib/types';
  import { getContext } from 'svelte';
  import { type InputProps as Props, input, clampSize } from '.';

  let { children, left, right, value = $bindable<unknown>(), size, color = 'default', class: className, classLeft, classRight, ...restProps }: Props<unknown> = $props();

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  let group: { size: SizeType } = getContext('group');
  let isGroup = !!group;
  let _size = $derived(size || clampSize(group?.size) || 'md');
  const _color = $derived(color === 'default' && background ? 'tinted' : color);

  const { input: inputCls, left: leftCls, right: rightCls } = $derived(input({ size: _size, color: _color, group: isGroup, class: className }));
</script>

{#snippet inputContent()}
  {#if left}
    <div class={leftCls({ class: classLeft })}>
      {@render left()}
    </div>
  {/if}
  {#if children}
    {@render children({ ...restProps, class: inputCls() })}
  {:else}
    <input {...restProps} bind:value class={inputCls({ class: className })} />
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
@props: 
-->
