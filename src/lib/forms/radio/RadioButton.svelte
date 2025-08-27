<script lang="ts" generics="T">
  import clsx from "clsx";
  import { Button, type RadioButtonProps } from "$lib";
  import { radioButton } from ".";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, group = $bindable<T>(), value = $bindable<T>(), inline, pill, outline, size, color, shadow, checkedClass, class: className, ...restProps }: RadioButtonProps<T> = $props();

  const theme = getTheme("radioButton");

  let inputEl: HTMLInputElement;
  let isChecked = $derived(value == group);
  let base = $derived(radioButton({ inline, class: clsx(isChecked && checkedClass, theme, className) }));

  function clickHandler() {
    inputEl?.click(); // manually trigger the click on the hidden input
  }
</script>

<Button tag="label" {pill} {outline} {size} {color} {shadow} class={base}>
  <input type="radio" class="sr-only" {value} bind:group {...restProps} />
  {@render children?.()}
</Button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
