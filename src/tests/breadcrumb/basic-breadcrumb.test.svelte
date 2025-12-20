<script lang="ts">
  import Breadcrumb from "$lib/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/breadcrumb/BreadcrumbItem.svelte";
</script>

<Breadcrumb>
  {#snippet children()}
    <BreadcrumbItem home href="/">
      {#snippet children()}Home{/snippet}
    </BreadcrumbItem>
    <BreadcrumbItem href="/projects">
      {#snippet children()}Projects{/snippet}
    </BreadcrumbItem>
    <BreadcrumbItem>
      {#snippet children()}Current Page{/snippet}
    </BreadcrumbItem>
  {/snippet}
</Breadcrumb>
