<script lang="ts">
  import Breadcrumb from "$lib/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/breadcrumb/BreadcrumbItem.svelte";
</script>

<Breadcrumb>
  <BreadcrumbItem home href="/" data-testid="home-item">Home</BreadcrumbItem>
</Breadcrumb>
