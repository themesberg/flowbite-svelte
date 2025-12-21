<script lang="ts">
  import DarkMode from "$lib/darkmode/DarkMode.svelte";
</script>

<DarkMode>
  {#snippet lightIcon()}
    <svg data-testid="custom-light-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8" />
    </svg>
  {/snippet}
  {#snippet darkIcon()}
    <svg data-testid="custom-dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <rect x="2" y="2" width="16" height="16" />
    </svg>
  {/snippet}
</DarkMode>
