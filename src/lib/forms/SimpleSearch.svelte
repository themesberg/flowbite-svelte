<script lang="ts">
  import Search from '$lib/forms/Search.svelte';
  import Button from '$lib/buttons/Button.svelte';
</script>

<form class="flex gap-2" on:submit>
  <Search size="md" {...$$restProps} />
  <Button class="!p-2.5">
    <svg
      class="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  </Button>
</form>
