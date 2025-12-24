<script lang="ts">
  import Breadcrumb from "$lib/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/breadcrumb/BreadcrumbItem.svelte";
</script>

<Breadcrumb>
  <BreadcrumbItem home href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/about" data-testid="link-item">About</BreadcrumbItem>
</Breadcrumb>
