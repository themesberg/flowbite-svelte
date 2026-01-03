<script lang="ts">
  import Toast from "$lib/toast/Toast.svelte";
</script>

{#snippet CheckIcon()}
  <svg data-testid="check-icon" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>
{/snippet}

<Toast data-testid="icon-toast" icon={CheckIcon}>Toast with icon</Toast>

<Toast data-testid="no-icon-toast">Toast without icon</Toast>
