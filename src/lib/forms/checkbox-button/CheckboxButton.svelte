<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import clsx from "clsx";
  import { type CheckboxButtonProps as Props } from ".";
  import { checkButton } from "./theme";

  let { children, class: className, group = $bindable(), value, checked, inline, pill, outline, size, color, shadow, ...restProps }: Props = $props();

  // react on external group changes
  function init(_: HTMLElement, _group: (string | number)[]) {
    group = _group ?? [];

    if (checked === undefined && value !== undefined) checked = _group.includes(value);
    onChange();

    return {
      update(_group: (string | number)[]) {
        if (value !== undefined) {
          checked = _group.includes(value);
        }
      }
    };
  }

  function onChange() {
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
## Props
@props: children: any;
@props:class: string;
@props:group: any = $bindable();
@props:value: any;
@props:checked: any;
@props:inline: any;
@props:pill: any;
@props:outline: any;
@props:size: any;
@props:color: any;
@props:shadow: any;
-->
