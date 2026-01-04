<script lang="ts" module>
  export let testState = $state({ clickCount: 0 });
</script>

<script lang="ts">
  import A from "$lib/typography/a/A.svelte";

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    testState.clickCount++;
  }
</script>

<A href="https://example.com" onclick={handleClick} data-sveltekit-preload-data="off">Clickable link</A>
