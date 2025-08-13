<script lang="ts">
  import type { PageData } from "../$types";
  import FlowbiteSvelteLayout from "../layouts/FlowbiteSvelteLayout.svelte";
  import ComponentsLayout from "../layouts/ComponentsLayout.svelte";
  import type { Snippet } from "svelte";
  // import MetaTag from "./utils/MetaTag.svelte"

  let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data}>
    {@render children()}
  </ComponentsLayout>
</FlowbiteSvelteLayout>
