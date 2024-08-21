<script lang="ts">
  import Label from '../label/Label.svelte';
  import { type CheckboxProps as Props, checkbox } from '.';

  let { children, aria_describedby, color = 'primary', custom, inline, tinted, rounded, group = $bindable([]), choices = [], checked = $bindable(false), classLabel, indeterminate, class: className, ...restProps }: Props = $props();

  const { base, label } = $derived(checkbox({ color, tinted, custom, rounded, inline }));
</script>

{#if choices.length > 0}
  {#each choices as { value, checkboxLabel }, i}
    <Label class={label({ class: classLabel })} for={`checkbox-${i}`}>
      {checkboxLabel}
      <input id={`checkbox-${i}`} type="checkbox" {value} bind:group {...restProps} class={base({ class: className })} />
      {#if children}
        {@render children()}
      {/if}
    </Label>
  {/each}
{:else}
  <Label class={label({ class: classLabel })}>
    <input type="checkbox" bind:checked aria-describedby={aria_describedby} {indeterminate} {...restProps} class={base({ class: className })} />
    {#if children}
      {@render children()}
    {/if}
  </Label>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop aria_describedby
@prop color = 'primary'
@prop custom
@prop inline
@prop tinted
@prop rounded
@prop group = $bindable([])
@prop choices = []
@prop checked = $bindable(false)
@prop spacing
@prop classLabel
@prop indeterminate
@prop class: className
@prop ...restProps
-->
