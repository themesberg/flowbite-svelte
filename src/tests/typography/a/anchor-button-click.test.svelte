<script lang="ts" module>
  export let testState = $state({ clickCount: 0, defaultPrevented: false });
</script>

<script lang="ts">
  import A from "$lib/typography/a/A.svelte";

  function handleClick(event: MouseEvent) {
    testState.clickCount++;
    testState.defaultPrevented = event.defaultPrevented;
  }
</script>

<A asButton={true} onclick={handleClick}>Button mode click</A>
