<script lang="ts">
  let show = false;

  function toggle() {
    show = !show;
  }
</script>

<button on:click={toggle}>
  Toggle
</button>

{#if show}
  <button>Share</button>
{/if}
