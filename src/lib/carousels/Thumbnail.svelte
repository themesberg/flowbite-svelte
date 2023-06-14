<script lang="ts">
  export let thumbImg: string = '';
  export let altTag: string = '';
  export let titleLink: string = '';
  export let id: number;
  export let thumbWidth: number = 100;
  export let selected: boolean = false;
  export let thumbClass: string = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button on:click aria-label="Click to view image">
  <img
    class={thumbClass}
    class:active={selected}
    id={id.toString()}
    src={thumbImg}
    alt={altTag}
    title="Image from {titleLink}"
    width="{thumbWidth}%" />
</button>

<!--
  @component
  ## Features
  [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
  ## Props
  @prop thumbImg: string = '';
  @prop altTag: string = '';
  @prop titleLink: string = '';
  @prop id: number;
  @prop thumbWidth: number;
  @prop selected: boolean = false;

-->

<style>
  .active {
    opacity: 1;
  }
</style>
