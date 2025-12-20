<script lang="ts">
  import Breadcrumb from "$lib/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/breadcrumb/BreadcrumbItem.svelte";
</script>

<Breadcrumb class="custom-breadcrumb" ariaLabel="Custom navigation">
  {#snippet children()}
    <BreadcrumbItem home href="/">
      {#snippet children()}Home{/snippet}
    </BreadcrumbItem>
  {/snippet}
</Breadcrumb>
