<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Input from './Input.svelte';

  interface $$Props extends ComponentProps<Input> {
    value?: number;
  }

  export let value: $$Props['value'] = 0;
</script>

<Input let:props {...$$restProps}>
  <input {...props} type="number" bind:value on:blur on:change on:click on:contextmenu on:focus on:keydown on:keypress on:keyup on:mouseover on:mouseenter on:mouseleave on:paste on:input />
</Input>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let value: $$Props['value'] = 0;
-->
