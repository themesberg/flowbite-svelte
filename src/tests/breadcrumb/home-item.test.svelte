<script lang="ts">
  import Breadcrumb from "$lib/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/breadcrumb/BreadcrumbItem.svelte";
</script>

<Breadcrumb>
  {#snippet children()}
    <BreadcrumbItem home href="/" data-testid="home-item">
      {#snippet children()}Home{/snippet}
    </BreadcrumbItem>
  {/snippet}
</Breadcrumb>
