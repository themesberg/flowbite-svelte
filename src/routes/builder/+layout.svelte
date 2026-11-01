<script lang="ts">
  import FlowbiteSvelteLayout from "$docs-ui/layouts/FlowbiteSvelteLayout.svelte";
  import ComponentsLayout from "$docs-ui/layouts/ComponentsLayout.svelte";

  let { data, children } = $props();
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data} submenu="builder">
    {@render children()}
  </ComponentsLayout>
</FlowbiteSvelteLayout>
