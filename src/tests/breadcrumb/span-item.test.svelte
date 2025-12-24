<script lang="ts">
  import Breadcrumb from "$lib/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/breadcrumb/BreadcrumbItem.svelte";
</script>

<Breadcrumb>
  <BreadcrumbItem home href="/">Home</BreadcrumbItem>
  <BreadcrumbItem data-testid="span-item">Current Page</BreadcrumbItem>
</Breadcrumb>
