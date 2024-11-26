<script lang="ts">
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  // for Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "gallery";

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Gallery</H1>

<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Monsory grid</H2>
<CodeWrapper>
  <ExampleComponents.MansoryGrid />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/MansoryGrid.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Featured image</H2>
<CodeWrapper>
  <ExampleComponents.FeaturedImage />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/FeaturedImage.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Quad</H2>
<CodeWrapper>
  <ExampleComponents.Quad />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Quad.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Gallery with tag</H2>
<CodeWrapper>
  <ExampleComponents.GalleryWithTag />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/GalleryWithTag.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Heterogeneous</H2>
<CodeWrapper>
  <ExampleComponents.Heterogeneous />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Heterogeneous.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom image rendering</H2>
<CodeWrapper>
  <ExampleComponents.CustomImageRendering />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CustomImageRendering.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
