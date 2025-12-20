<script lang="ts">
  import Breadcrumb from "$lib/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/breadcrumb/BreadcrumbItem.svelte";
</script>

<Breadcrumb>
  {#snippet children()}
    <BreadcrumbItem home href="/">
      {#snippet children()}Home{/snippet}
    </BreadcrumbItem>
    <BreadcrumbItem href="/docs">
      {#snippet icon()}
        <svg data-testid="custom-separator" class="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" />
        </svg>
      {/snippet}
      {#snippet children()}Docs{/snippet}
    </BreadcrumbItem>
  {/snippet}
</Breadcrumb>
