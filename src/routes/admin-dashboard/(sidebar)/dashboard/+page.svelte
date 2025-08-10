<script lang="ts">
  import Dashboard from '../../utils/dashboard/Dashboard.svelte';
  import MetaTag from '../../utils/MetaTag.svelte';
  import Footer from '../Footer.svelte';
  // import type { PageProps } from './$types';
  // let { data }: PageProps = $props();
  // $inspect('data in dashboard/+page', data)

  const path: string = '/dashboard';
  const description: string = 'Admin Dashboard example using Flowbite Svelte';
  const title: string = 'Flowbite Svelte Admin Dashboard - Dashboard';
  const subtitle: string = 'Admin Dashboard';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="p-4">
  <h1 class="hidden">Dashboard</h1>
  <Dashboard />
</main>
<Footer />
