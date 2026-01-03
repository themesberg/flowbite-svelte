<script lang="ts">
  import type { CheckboxButtonProps } from "$lib";
  import Button from "$lib/buttons/Button.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import Checkbox from "./Checkbox.svelte";
  import { checkboxButton } from "./theme";

  let { children, class: className, group = $bindable(), checked = $bindable(false), inline, pill, outline, size, color, shadow, ...restProps }: CheckboxButtonProps = $props();

  const theme = $derived(getTheme("checkboxButton"));

  let buttonClass: string = $derived(checkboxButton({ inline, checked, class: clsx(theme, className) }));
</script>

<Button tag="label" {pill} {outline} {size} {color} {shadow} class={buttonClass} data-scope="checkbox-button" data-part="base">
  <Checkbox bind:group bind:checked {...restProps} class="sr-only"></Checkbox>
  {@render children?.()}
</Button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CheckboxButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L743)
## Props
@prop children
@prop class: className
@prop group = $bindable()
@prop checked = $bindable(false)
@prop inline
@prop pill
@prop outline
@prop size
@prop color
@prop shadow
@prop ...restProps
-->
