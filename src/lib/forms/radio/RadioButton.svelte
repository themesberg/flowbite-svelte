<script lang="ts" generics="T">
  import { Button, type RadioButtonProps, cn } from "$lib";
  import { radiobutton } from ".";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, group = $bindable<T>(), value = $bindable<T>(), inline, pill, outline, size, color, shadow, checkedClass, class: className, ...restProps }: RadioButtonProps<T> = $props();

  const theme = getTheme("radioButton");

  let inputEl: HTMLInputElement;
  let isChecked = $derived(value == group);
  let base = $derived(cn(radiobutton({ inline }), className, isChecked && checkedClass, theme));

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
