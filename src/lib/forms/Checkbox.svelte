<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type { FormColorType } from '../types';
  import { labelClass, inputClass } from './Radio.svelte';
  import Label from './Label.svelte';

  // properties forwarding
  export let color: FormColorType = 'primary';
  export let custom: boolean = false;
  export let inline: boolean = false;
  export let group: (string | number)[] = [];
  export let value: string | number = 'on';
  export let checked: boolean | undefined = undefined;
  export let spacing: string = 'mr-2';

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  // react on external group changes
  function init(_: HTMLElement, _group: (string | number)[]) {
    if (checked === undefined) checked = _group.includes(value);
    onChange();

    return {
      update(_group: (string | number)[]) {
        checked = _group.includes(value);
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
</script>

<Label class={labelClass(inline, $$props.class)} show={$$slots.default}>
  <input
    use:init={group}
    type="checkbox"
    bind:checked
    on:keyup
    on:keydown
    on:keypress
    on:focus
    on:blur
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:change={onChange}
    on:change
    {value}
    {...$$restProps}
    class={twMerge(
      spacing,
      inputClass(custom, color, true, background, $$slots.default || $$props.class)
    )} /><slot />
</Label>

<!--
  @component
  ## Feature
  [Go to Checkbox](https://flowbite-svelte.com/docs/forms/checkbox)
  - Setup
  - Checkbox examples
  - Disabled state
  - Alternative syntax
  - Checkbox with a link
  - Helper text
  - Bordered
  - Checkbox list group
  - Horizontal list group
  - Checkbox dropdown
  - Inline layout
  - Colors
  - Advanced layout
  - Group variable
  ## Props
  @prop color: FormColorType = 'primary';
  @prop custom: boolean = false;
  @prop inline: boolean = false;
  @prop group: (string | number)[] = [];
  @prop value: string | number = 'on';
  @prop checked: boolean | undefined = undefined;
  ## Event
  - on:keyup
  - on:keydown
  - on:keypress
  - on:focus
  - on:blur
  - on:click
  - on:mouseover
  - on:mouseenter
  - on:mouseleave
  - on:paste
  - on:change
  ## Example
  ```
  <script>
    import { Checkbox } from 'flowbite-svelte'
  </script>
  
  <Checkbox>Default checkbox</Checkbox>
  <Checkbox checked>Checked state</Checkbox>
  ```
-->
