<script lang="ts">
  import { getContext } from 'svelte';
  import type { SizeType } from '$lib/types';
  import { type ButtonProps as Props, button } from '.';

  const group: SizeType = getContext('group');

  let { children, pill = false, outline = false, size = group ? 'sm' : 'md', href, type = 'button', color = group ? (outline ? 'dark' : 'alternative') : 'primary', shadow = false, tag = 'button', disabled, class: className, ...restProps }: Props = $props();

  // const disabledValue = disabled !== null ? disabled : undefined;
  const isGroup = !!group;
  const base = $derived(button({ color, size, disabled, pill, group: isGroup, outline, shadow, className }));

  // $inspect('group: ', group, 'isGroup: ', isGroup);
</script>

{#if href}
  <a {href} {...restProps} class={base} role="button">
    {@render children()}
  </a>
{:else if tag === 'button'}
  <button {type} {...restProps} class={base} {disabled}>
    {@render children()}
  </button>
{:else}
  <svelte:element this={tag} {...restProps} class={base}>
    {@render children()}
  </svelte:element>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop pill = false
@prop outline = false
@prop size = group ? 'sm' : 'md'
@prop href = undefined
@prop target = undefined
@prop rel = undefined
@prop type = 'button'
@prop color = group ? (outline ? 'dark' : 'alternative') : 'primary'
@prop shadow = false
@prop tag = 'button'
@prop disabled
@prop name = undefined
@prop class: className
@prop onclick
@prop onmouseenter
@prop ...restProps
-->
