<script lang="ts">
  import Layout from "$lib/typography/layout/Layout.svelte";
</script>

<Layout data-testid="complex-layout">
  <div data-testid="child-div">
    <h1 data-testid="heading">Heading</h1>
    <p data-testid="paragraph">Paragraph content</p>
    <button data-testid="button">Button</button>
  </div>
</Layout>

<Layout data-testid="nested-layout">
  <Layout data-testid="inner-layout">
    <p data-testid="nested-content">Nested content</p>
  </Layout>
</Layout>
