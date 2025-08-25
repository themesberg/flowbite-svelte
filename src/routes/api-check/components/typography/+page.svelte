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

<H1>Typography</H1>
<H2>Font Size</H2>
<CodeWrapper>
  <ExampleComponents.FontSize />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/FontSize.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Font Weight</H2>
<CodeWrapper>
  <ExampleComponents.FontWeight />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/FontWeight.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Line Height</H2>
<CodeWrapper>
  <ExampleComponents.LineHeight />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/LineHeight.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Lists</H2>
<CodeWrapper>
  <ExampleComponents.Lists />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Lists.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>List Position</H2>
<CodeWrapper>
  <ExampleComponents.ListPosition />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ListPosition.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Text Decoration</H2>
<CodeWrapper>
  <ExampleComponents.TextDecoration />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TextDecoration.svelte"] as string} />
  {/snippet}
</CodeWrapper>
