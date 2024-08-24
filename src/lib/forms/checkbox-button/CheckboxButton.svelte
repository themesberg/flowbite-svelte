<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';
  import { twMerge } from 'tailwind-merge';
  import { type CheckboxButtonProps as Props } from '.';

  let { children, class: className, group = [], value = 'on', checked, inline = true, pill, outline, size, color, shadow, ...restProps }: Props = $props();

  // react on external group changes
  function init(_: HTMLElement, _group: (string | number)[]) {
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

  let buttonClass: string = $derived(twMerge(inline ? 'inline-flex' : 'flex', className));
</script>

<Button tag="label" {checked} {pill} {outline} {size} {color} {shadow} class={buttonClass}>
  <input use:init={group} type="checkbox" bind:checked {value} {...restProps} class="sr-only" onchange={onChange} />
  {@render children()}
</Button>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop group = []
@prop value = 'on'
@prop checked
@prop inline = true
@prop pill
@prop outline
@prop size
@prop color
@prop shadow
@prop ...restProps
-->
