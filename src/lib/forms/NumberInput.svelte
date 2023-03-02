<script lang="ts">
  import Input from './Input.svelte';

  export let value: number = 0;
</script>

<Input let:props {...$$restProps}>
  <input
    {...props}
    type="number"
    bind:value
    on:blur
    on:change
    on:click
    on:contextmenu
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:input />
</Input>
