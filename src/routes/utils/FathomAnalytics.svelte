<script lang="ts">
  import { PUBLIC_FATHOM_ID } from "$env/static/public";
</script>

<svelte:head>
  <script src="https://cdn.usefathom.com/script.js" data-site={PUBLIC_FATHOM_ID} defer></script>
</svelte:head>
{#if !PUBLIC_FATHOM_ID}
  <h2>You need to provide PUBLIC_FATHOM_ID in .env file.</h2>
{/if}
