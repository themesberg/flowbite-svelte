<script lang="ts">
  import Dashboard from "../../../utils/dashboard/Dashboard.svelte";
  import MetaTag from "../../../utils/MetaTag.svelte";
  import Footer from "../../Footer.svelte";
  import type { PageProps } from "../../../../$types";
  let { data }: PageProps = $props();

  const path: string = "/layouts/sidebar";
  const description: string = "Sidebar layout examaple - Flowbite Svelte Admin Dashboard";
  const title: string = "Flowbite Svelte Admin Dashboard - Sidebar Layout";
  const subtitle: string = "Sidebar Layout";
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="p-4">
  <h1 class="hidden">Layouts: Sidebar</h1>
  <Dashboard />
</main>
<Footer />
