<script lang="ts">
  import Layout from "$lib/typography/layout/Layout.svelte";
</script>

<Layout data-testid="custom-props-layout" id="custom-layout-id" data-custom="custom-value" title="Custom layout title" aria-label="Custom layout label" role="region">
  <p>Content with custom props</p>
</Layout>
