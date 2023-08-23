<script lang="ts">
  export let thumbImg: string = '';
  export let altTag: string = '';
  export let titleLink: string = '';
  export let id: number;
  export let thumbWidth: number = 100;
  export let selected: boolean = false;
  export let thumbClass: string = '';
  export let thumbBtnClass: string = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button on:click aria-label="Click to view image" class={thumbBtnClass}>
  <img class={thumbClass} class:active={selected} id={id.toString()} src={thumbImg} alt={altTag} title="Image from {titleLink}" width="{thumbWidth}%" />
</button>

<style>
  .active {
    opacity: 1;
  }
</style>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let thumbImg: string = '';
@prop export let altTag: string = '';
@prop export let titleLink: string = '';
@prop export let id: number;
@prop export let thumbWidth: number = 100;
@prop export let selected: boolean = false;
@prop export let thumbClass: string = '';
@prop export let thumbBtnClass: string = '';
-->
