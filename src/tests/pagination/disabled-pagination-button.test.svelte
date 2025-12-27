<script lang="ts">
  import PaginationButton from "$lib/pagination/PaginationButton.svelte";

  let clicked = $state(false);

  function handleClick() {
    clicked = true;
  }
</script>

<PaginationButton disabled={true} onclick={handleClick}>Disabled Button</PaginationButton>

{#if clicked}
  <div data-testid="click-indicator">Clicked</div>
{/if}
