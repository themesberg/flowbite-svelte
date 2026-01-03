<script lang="ts" module>
  export let testState = $state({ clickCount: 0 });
</script>

<script lang="ts">
  import A from "$lib/typography/a/A.svelte";

  function handleClick() {
    testState.clickCount++;
  }
</script>

<A href="/test" onclick={handleClick}>Clickable link</A>
