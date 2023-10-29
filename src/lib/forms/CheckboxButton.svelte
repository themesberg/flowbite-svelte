<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';

  export let group: (string | number)[] = [];
  export let value: string | number = 'on';
  export let checked: boolean | undefined = undefined;

  // properties forwarding
  export let pill: boolean = false;
  export let outline: boolean = false;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = group ? 'sm' : 'md';
  // export let color: ButtonColor = group ? (outline ? 'dark' : 'alternative') : 'primary';
  export let color: ButtonColor = undefined;
  export let shadow: boolean = false;

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

<Button tag="label" {checked} {pill} {outline} {size} {color} {shadow} class={$$props.class}>
  <input
    use:init={group}
    type="checkbox"
    bind:checked
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
    on:change={onChange}
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
