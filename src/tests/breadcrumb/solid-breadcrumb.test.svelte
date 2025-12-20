<script lang="ts">
  import Breadcrumb from "$lib/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/breadcrumb/BreadcrumbItem.svelte";
</script>

<Breadcrumb solid>
  {#snippet children()}
    <BreadcrumbItem home href="/">
      {#snippet children()}Home{/snippet}
    </BreadcrumbItem>
    <BreadcrumbItem href="/docs">
      {#snippet children()}Docs{/snippet}
    </BreadcrumbItem>
  {/snippet}
</Breadcrumb>
