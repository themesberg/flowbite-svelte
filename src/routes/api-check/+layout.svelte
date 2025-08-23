<script lang="ts">
  import type { PageData } from "../$types";
  import FlowbiteSvelteLayout from "../layouts/FlowbiteSvelteLayout.svelte";
  import ComponentsLayout from "../layouts/ComponentsLayout.svelte";
  import type { Snippet } from "svelte";
  import Paging from "./Paging.svelte";

  let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data} submenu="api-check">
    <div id="mainContent" class="mb-32 px-8">
      {@render children()}
      <Paging />
    </div>
  </ComponentsLayout>
</FlowbiteSvelteLayout>
