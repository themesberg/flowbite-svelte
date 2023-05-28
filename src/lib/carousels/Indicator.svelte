<script lang="ts">
  export let name: string = '';
  export let selected: boolean = false;
  export let indicatorClass: string = '';
</script>

<button type="button" class={indicatorClass} class:active={selected} aria-label={name} on:click />

<!--
  @component
  ## Features
  [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
  ## Props
  @prop name: string = '';
  @prop selected: boolean = false;
  @prop indicatorClass: string = '';

-->

<style>
  .active {
    opacity: 1;
  }
</style>
