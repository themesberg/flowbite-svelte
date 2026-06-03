<script lang="ts">
  import { env } from "$env/dynamic/public";
  const PUBLIC_FATHOM_ID = env.PUBLIC_FATHOM_ID;
</script>

<svelte:head>
  <script src="https://cdn.usefathom.com/script.js" data-site={PUBLIC_FATHOM_ID} defer></script>
</svelte:head>
{#if !PUBLIC_FATHOM_ID}
  <h2>You need to provide PUBLIC_FATHOM_ID in .env file.</h2>
{/if}
