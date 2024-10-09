<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Button from '$lib/buttons/Button.svelte';
  import type { ButtonColorType, SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';

  type $$Props = ComponentProps<Button> & {
    group?: (string | number)[];
    value?: string | number;
    checked?: boolean;
    inline?: boolean;
    pill?: boolean;
    outline?: boolean;
    size?: SizeType;
    color?: ButtonColorType;
    shadow?: boolean;
  }

  export let group: $$Props['group'] = [];
  export let value: $$Props['value'] = 'on';
  export let checked: $$Props['checked'] = undefined;
  export let inline: $$Props['inline'] = true;
  export let pill: $$Props['pill'] = false;
  export let outline: $$Props['outline'] = false;
  export let size: $$Props['size'] = undefined;
  export let color: $$Props['color'] = undefined;
  export let shadow: $$Props['shadow'] = false;

  function init(node: HTMLElement, _group: (string | number)[] | undefined) {
    function update(_group: (string | number)[] | undefined) {
      if (_group && value !== undefined) {
        checked = _group.includes(value);
      }
    }

    update(_group);
    return { update };
  }

  function onChange() {
    if (group && value !== undefined) {
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
  }

  let buttonClass: string;
  $: buttonClass = twMerge(inline ? 'inline-flex' : 'flex', $$props.class);
</script>

<Button {checked} {pill} {outline} {size} {color} {shadow} class={buttonClass}>
  <input
    use:init={group}
    type="checkbox"
    bind:checked
    value={value !== undefined ? value : 'on'}
    {...$$restProps}
    class="sr-only"
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
    on:change />
  <slot />
</Button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let group: $$Props['group'] = [];
@prop export let value: $$Props['value'] = 'on';
@prop export let checked: $$Props['checked'] = undefined;
@prop export let inline: $$Props['inline'] = true;
@prop export let pill: $$Props['pill'] = false;
@prop export let outline: $$Props['outline'] = false;
@prop export let size: $$Props['size'] = undefined;
@prop export let color: $$Props['color'] = undefined;
@prop export let shadow: $$Props['shadow'] = false;
-->
