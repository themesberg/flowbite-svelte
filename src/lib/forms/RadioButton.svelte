<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import Button from '$lib/buttons/Button.svelte';
  import type { ButtonColorType, SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends Omit<HTMLInputAttributes, 'size'> {
    group: string | number;
    value: string | number;
    inline?: boolean;
    pill?: boolean;
    outline?: boolean;
    size?: SizeType | undefined;
    color?: ButtonColorType | undefined;
    shadow?: boolean;
  }

  export let group: $$Props['group'] = '';
  export let value: $$Props['value'] = '';
  export let inline: $$Props['inline'] = true;
  export let pill: $$Props['pill'] = false;
  export let outline: $$Props['outline'] = false;
  export let size: $$Props['size'] = undefined;
  export let color: $$Props['color'] = undefined;
  export let shadow: $$Props['shadow'] = false;

  let buttonClass: string;
  $: buttonClass = twMerge(inline ? 'inline-flex' : 'flex', $$props.class);
</script>

<Button tag="label" checked={value === group} {pill} {outline} {size} {color} {shadow} class={buttonClass}>
  <input
    type="radio"
    bind:group
    {value}
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
    on:change />
  <slot />
</Button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let group: $$Props['group'] = '';
@prop export let value: $$Props['value'] = '';
@prop export let inline: $$Props['inline'] = true;
@prop export let pill: $$Props['pill'] = false;
@prop export let outline: $$Props['outline'] = false;
@prop export let size: $$Props['size'] = undefined;
@prop export let color: $$Props['color'] = undefined;
@prop export let shadow: $$Props['shadow'] = false;
-->
