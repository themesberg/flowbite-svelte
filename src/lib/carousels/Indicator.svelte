<script lang="ts">
  export let name: string = '';
  export let selected: boolean = false;
  export let indicatorClass: string = '';
</script>

<button type="button" class={indicatorClass} class:active={selected} aria-label={name} on:click />

<style>
  .active {
    opacity: 1;
  }
</style>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let name: string = '';
@prop export let selected: boolean = false;
@prop export let indicatorClass: string = '';
-->
