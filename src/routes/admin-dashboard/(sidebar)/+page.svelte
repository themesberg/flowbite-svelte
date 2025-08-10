<script lang="ts">
  import Dashboard from '../utils/dashboard/Dashboard.svelte';
  import MetaTag from '../utils/MetaTag.svelte';

  const path: string = '';
  const description: string = 'Admin Dashboard example using Flowbite Svelte';
  const title: string = 'Flowbite Svelte Admin Dashboard - Home';
  const subtitle: string = 'Admin Dashboard';
</script>

<MetaTag {path} {description} {title} {subtitle} />
<main class="p-4">
  <h1 class="hidden">Dashboard</h1>
  <Dashboard />
</main>
