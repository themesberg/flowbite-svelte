<script lang="ts">
  import type { PageData } from "../$types";
  import FlowbiteSvelteLayout from "../layouts/FlowbiteSvelteLayout.svelte";
  import ComponentsLayout from "../layouts/ComponentsLayout.svelte";
  import type { Snippet } from "svelte";

  let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data} showapicheck>
    <div class="mx-auto max-w-7xl p-8">
      {@render children()}
    </div>
  </ComponentsLayout>
</FlowbiteSvelteLayout>
