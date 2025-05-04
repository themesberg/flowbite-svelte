<script lang="ts" generics="T">
  import Button from "$lib/buttons/Button.svelte";
  import clsx from "clsx";
  import { radioButton } from ".";
  import type { RadioButtonProps } from "$lib/types";

  let { children, group = $bindable<T>(), value = $bindable<T>(), inline, pill, outline, size, color, shadow, class: className, ...restProps }: RadioButtonProps<T> = $props();

  let inputEl: HTMLInputElement;
  let base = $derived(radioButton({ inline, checked: value == group, class: clsx(className) }));

  function clickHandler() {
    inputEl?.click(); // manually trigger the click on the hidden input
  }
</script>

<Button tag="label" onclick={clickHandler} {pill} {outline} {size} {color} {shadow} class={base}>
  <input bind:this={inputEl} type="radio" class="sr-only" {value} bind:group {...restProps} />
  {@render children?.()}
</Button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
