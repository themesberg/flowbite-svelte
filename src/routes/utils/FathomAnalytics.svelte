<script lang="ts">
  let { FATHOM_ID = "" } = $props();
</script>

<svelte:head>
  <script src="https://cdn.usefathom.com/script.js" data-site={FATHOM_ID} defer></script>
</svelte:head>
{#if !FATHOM_ID}
  <h2>You need to provide FATHOM_ID in .env file.</h2>
{/if}
