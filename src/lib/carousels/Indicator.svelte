<script lang="ts">
  export let name: string = '';
  export let selected: boolean = false;
</script>

<button type="button" class="w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60" class:active={selected} aria-label={name} on:click />

<style>
  .active {
    opacity: 1;
  }
</style>
