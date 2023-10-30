<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';
  import type { ButtonColorType, SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';

  export let group: string | number = '';
  export let value: string | number = '';
  export let inline: boolean = true;

  // Button properties forwarding
  export let pill: boolean = false;
  export let outline: boolean = false;
  export let size: SizeType | undefined = undefined;
  export let color: ButtonColorType | undefined = undefined;
  export let shadow: boolean = false;

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
@prop export let group: string | number = '';
@prop export let value: string | number = '';
@prop export let inline: boolean = true;
@prop export let pill: boolean = false;
@prop export let outline: boolean = false;
@prop export let size: SizeType | undefined = undefined;
@prop export let color: ButtonColorType | undefined = undefined;
@prop export let shadow: boolean = false;
-->
