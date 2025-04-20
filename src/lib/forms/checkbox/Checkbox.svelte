<script lang="ts">
  import Label from "../label/Label.svelte";
  import { checkbox } from ".";
  import type { CheckboxProps } from "$lib/types";
  import clsx from "clsx";

  let { children, color = "primary", custom, inline, tinted, rounded, group = $bindable([]), choices = [], checked = $bindable(false), indeterminate, class: className, value, ...restProps }: CheckboxProps = $props();

  const { base, label: labelStyle } = $derived(checkbox({ color, tinted, custom, rounded, inline }));

  // see the discussion for bind:group - https://github.com/sveltejs/svelte/issues/2308
</script>

{#if choices.length > 0}
  {#each choices as choice, i}
    <Label class={labelStyle({ class: clsx(className) })}>
      <input type="checkbox" value={choice.value} checked={choice.checked} bind:group {...restProps} class={base()} />
      {#if children}
        {@render children(choice)}
      {:else}
        {choice.label}
      {/if}
    </Label>
  {/each}
{:else}
  <Label class={labelStyle({ class: clsx(className) })}>
    <input type="checkbox" {value} bind:checked {indeterminate} {...restProps} class={base()} />
    {#if children}
      {@render children({ value, checked })}
    {/if}
  </Label>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[CheckboxProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L637)
## Props
@prop children
@prop color = "primary"
@prop custom
@prop inline
@prop tinted
@prop rounded
@prop group = $bindable([])
@prop choices = []
@prop checked = $bindable(false)
@prop indeterminate
@prop class: className
@prop value
@prop ...restProps
-->
