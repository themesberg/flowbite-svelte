<script lang="ts">
  import Router, { link } from "svelte-spa-router";
  import { routes } from "./routes.js";
  import { onMount } from "svelte";
  import { DarkMode } from "flowbite-svelte";
  let data;
  async function fetchData() {
    const response = await fetch(import.meta.env.VITE_API_ENDPOINT);
    data = await response.json();
  }
  onMount(fetchData);
</script>

<DarkMode />
<div class="p-8 overflow-hidden bg-gray-50 dark:bg-gray-900">
  <Router {routes} />

  {#if data}
    <p>Data:</p>
    <ul>
      {#each Object.entries(data) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/if}
  </div>
