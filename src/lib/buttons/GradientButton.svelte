<script lang="ts">
  import Button from './Button.svelte';
  import { getContext } from 'svelte';
  import { type GradientButtonProps as Props, gradientButton } from '.';
  import type { SizeType } from '$lib/types';

  const group: SizeType = getContext('group');

  let { children, outline, pill, color = 'blue', shadow, class: className, href, target, rel, type, disabled, size, name, ...restProps }: Props = $props();

  const { base, outlineWrapper } = $derived(gradientButton({ color, outline, pill, shadow, disabled, group: !!group }));
</script>

{#if outline}
  <div class={base({ className })}>
    <Button {...restProps} class={outlineWrapper()} {disabled} {href} {size}>
      {@render children()}
    </Button>
  </div>
{:else}
  <Button {...restProps} class={base({ className })} {disabled} {href} {size}>
    {@render children()}
  </Button>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop outline
@prop pill
@prop color = 'blue'
@prop shadow
@prop class: className
@prop href
@prop target
@prop rel
@prop type
@prop disabled
@prop size
@prop name
@prop ...restProps
-->
