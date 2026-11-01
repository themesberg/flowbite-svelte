<script lang="ts">
  import type { PageData } from "../$types";
  import FlowbiteSvelteLayout from "$docs-ui/layouts/FlowbiteSvelteLayout.svelte";
  import ComponentsLayout from "$docs-ui/layouts/ComponentsLayout.svelte";
  import type { Snippet } from "svelte";

  let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data} submenu="illustrations">
    {@render children()}
  </ComponentsLayout>
</FlowbiteSvelteLayout>
