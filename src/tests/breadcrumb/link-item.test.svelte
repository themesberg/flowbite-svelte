<script lang="ts">
  import Breadcrumb from "$lib/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/breadcrumb/BreadcrumbItem.svelte";
</script>

<Breadcrumb>
  {#snippet children()}
    <BreadcrumbItem home href="/">
      {#snippet children()}Home{/snippet}
    </BreadcrumbItem>
    <BreadcrumbItem href="/about" data-testid="link-item">
      {#snippet children()}About{/snippet}
    </BreadcrumbItem>
  {/snippet}
</Breadcrumb>
