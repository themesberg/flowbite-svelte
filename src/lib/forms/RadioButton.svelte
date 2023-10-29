<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';

  export let group: string | number = '';
  export let value: string | number = '';

  // properties forwarding
  export let pill: boolean = false;
  export let outline: boolean = false;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = group ? 'sm' : 'md';
  export let color: ButtonColor = undefined;
  export let shadow: boolean = false;
</script>

<Button tag="label" checked={value === group} {pill} {outline} {size} {color} {shadow} class={$$props.class}>
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
@prop export let color: FormColorType = 'primary';
@prop export let custom: boolean = false;
@prop export let inline: boolean = false;
@prop export let group: (string | number)[] = [];
@prop export let value: string | number = 'on';
@prop export let checked: boolean | undefined = undefined;
@prop export let spacing: string = 'mr-2';
-->
