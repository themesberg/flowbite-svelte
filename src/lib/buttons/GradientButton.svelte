<script lang="ts">
  import Button from './Button.svelte';
  // import { getContext } from 'svelte';
  import { type GradientButtonProps as Props, gradientButton } from '.';

  // const group = getContext('group');

  let { children, outline, pill, color = 'blue', shadow, class: className,  href, target, rel, type, disabled, name, ...restProps }: Props = $props();

  const disabledValue = disabled !== null ? disabled : undefined;

  const { base, outlineWrapper } = $derived(gradientButton({ color, outline, pill, shadow, disabled: disabledValue }));
</script>

{#if outline}
  <div class={base({ className })}>
    <Button {...restProps} color="none" class={outlineWrapper()} {disabled} {name} {type} {href} {target} {rel}>
      {@render children()}
    </Button>
  </div>
{:else}
  <Button {...restProps} color="none" class={base({ className })} {disabled} {name} {type} {href} {target} {rel}>
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
@prop onclick
@prop href
@prop target
@prop rel
@prop type
@prop disabled
@prop name
@prop ...restProps
-->
