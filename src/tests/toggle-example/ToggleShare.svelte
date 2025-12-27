<script lang="ts">
  let show = false;

  function toggle() {
    show = !show;
  }
</script>

<button type="button" aria-label="Toggle share button visibility" on:click={toggle}>Toggle</button>

{#if show}
  <button type="button">Share</button>
{/if}
