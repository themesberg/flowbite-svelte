<script lang="ts">
  import Dashboard from '../../../utils/dashboard/Dashboard.svelte';
  import MetaTag from '../../../utils/MetaTag.svelte';

  const path: string = '/layouts/stacked';
  const description: string = 'Stacked layout examaple - Flowbite Svelte Admin Dashboard';
  const title: string = 'Flowbite Svelte Admin Dashboard - Stacked Layout';
  const subtitle: string = 'Stacked Layout';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="py-4">
  <h1 class="hidden">Layouts: Stacked</h1>
  <Dashboard />
</main>
