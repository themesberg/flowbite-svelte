<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import clsx from "clsx";
  import type { CheckboxButtonProps } from "$lib/types";
  import { checkButton } from "./theme";

  let { children, class: className, group = $bindable([]), value, checked, inline, pill, outline, size, color, shadow, ...restProps }: CheckboxButtonProps = $props();

  // react on external group changes
  function init(_: HTMLElement, _group: (string | number)[]) {
    group = _group ?? [];

    if (checked === undefined && value !== undefined) checked = group.includes(value);
    onChange();

    $effect(() => {
      if (value !== undefined) {
        checked = group.includes(value);
      }
    });
  }

  function onChange() {
    if (!value) return;

    // There's a bug in Svelte and bind:group is not working with wrapped checkbox
    // This workaround is taken from:
    // https://svelte.dev/repl/de117399559f4e7e9e14e2fc9ab243cc?version=3.12.1
    const index = group.indexOf(value);

    if (checked === undefined) checked = index >= 0;

    if (checked) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }

  let buttonClass: string = $derived(checkButton({ inline, checked, class: clsx(className) }));
</script>

<Button tag="label" {checked} {pill} {outline} {size} {color} {shadow} class={buttonClass}>
  <input use:init={group} type="checkbox" bind:checked {value} {...restProps} class="sr-only" onchange={onChange} />
  {@render children?.()}
</Button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CheckboxButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L677)
## Props
@prop children
@prop class: className
@prop group = $bindable([])
@prop value
@prop checked
@prop inline
@prop pill
@prop outline
@prop size
@prop color
@prop shadow
@prop ...restProps
-->
