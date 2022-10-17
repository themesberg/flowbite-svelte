<script lang="ts">
  export let thumbImg: string = '';
  export let altTag: string = '';
  export let titleLink: string = '';
  export let id: number;
  export let thumbWidth: number;
  export let selected: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<img
  class="opacity-40"
  class:active={selected}
  id={id.toString()}
  src={thumbImg}
  alt={altTag}
  title="Image from {titleLink}"
  on:click
  width="{thumbWidth}%" />

<style>
  .active {
    opacity: 1;
  }
</style>
