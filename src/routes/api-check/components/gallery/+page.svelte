<script lang="ts">
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";

  import * as ExampleComponents from "./examples/";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Gallery</H1>
<H2>Default gallery</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Masonry grid</H2>
<CodeWrapper>
  <ExampleComponents.Masonry />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Masonry.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Featured image</H2>
<CodeWrapper>
  <ExampleComponents.Featured />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Featured.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Quad gallery</H2>
<CodeWrapper>
  <ExampleComponents.Quad />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Quad.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Gallery with tag filters</H2>
<CodeWrapper>
  <ExampleComponents.Filters />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Filters.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Heterogeneous gallery</H2>
<CodeWrapper>
  <ExampleComponents.Heterogeneous />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Heterogeneous.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom image rendering</H2>
<CodeWrapper>
  <ExampleComponents.Custom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Custom.svelte"] as string} />
  {/snippet}
</CodeWrapper>
