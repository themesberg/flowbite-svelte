<script lang="ts">
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";

  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Text</H1>
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

<H2>TextColor</H2>
<CodeWrapper>
  <ExampleComponents.TextColor />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TextColor.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Letter Spacing</H2>
<CodeWrapper>
  <ExampleComponents.LetterSpacing />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/LetterSpacing.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Text Decoration</H2>
<CodeWrapper>
  <ExampleComponents.TextDecoration />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TextDecoration.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Font Style</H2>
<CodeWrapper>
  <ExampleComponents.FontStyle />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/FontStyle.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Line Height</H2>
<CodeWrapper>
  <ExampleComponents.LineHeight />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/LineHeight.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Text Align</H2>
<CodeWrapper>
  <ExampleComponents.TextAlign />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TextAlign.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Whitespace</H2>
<CodeWrapper>
  <ExampleComponents.Whitespace />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Whitespace.svelte"] as string} />
  {/snippet}
</CodeWrapper>
