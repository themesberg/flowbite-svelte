<script lang="ts">
  import Label from "../label/Label.svelte";
  import { type CheckboxProps as Props, checkbox } from ".";
  import clsx from "clsx";

  let { children, color = "primary", custom, inline, tinted, rounded, group = $bindable([]), choices = [], checked = $bindable(false), indeterminate, class: className, value, ...restProps }: Props = $props();

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
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:color: any = "primary";
@props:custom: any;
@props:inline: any;
@props:tinted: any;
@props:rounded: any;
@props:group: any = $bindable([]);
@props:choices: any = [];
@props:checked: any = $bindable(false);
@props:indeterminate: any;
@props:class: string;
@props:value: any;
-->
