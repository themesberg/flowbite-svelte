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

<H1>Table</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Striped</H2>
<CodeWrapper>
  <ExampleComponents.Striped />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Striped.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Hover</H2>
<CodeWrapper>
  <ExampleComponents.Hover />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Hover.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Checkbox</H2>
<CodeWrapper>
  <ExampleComponents.Checkbox />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Checkbox.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table from Data</H2>
<CodeWrapper>
  <ExampleComponents.Data />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Data.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dynamic data</H2>
<CodeWrapper>
  <ExampleComponents.Dynamic />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dynamic.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table Head</H2>
<CodeWrapper>
  <ExampleComponents.Head />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Head.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table Foot</H2>
<CodeWrapper>
  <ExampleComponents.Foot />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Foot.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table Caption</H2>
<CodeWrapper>
  <ExampleComponents.Caption />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Caption.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>WithoutBorder</H2>
<CodeWrapper>
  <ExampleComponents.WithoutBorder />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/WithoutBorder.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Shadow</H2>
<CodeWrapper>
  <ExampleComponents.Shadow />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Shadow.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Scrolling</H2>
<CodeWrapper>
  <ExampleComponents.Scrolling />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Scrolling.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Search</H2>
<CodeWrapper>
  <ExampleComponents.Search />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Search.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colors 1</H2>
<CodeWrapper>
  <ExampleComponents.Colors1 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colors1.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colors 2</H2>
<CodeWrapper>
  <ExampleComponents.Colors2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colors2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>StripedColor</H2>
<CodeWrapper>
  <ExampleComponents.StripedColor />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/StripedColor.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>DoubleClick</H2>
<CodeWrapper>
  <ExampleComponents.DoubleClick />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/DoubleClick.svelte"] as string} />
  {/snippet}
</CodeWrapper>
