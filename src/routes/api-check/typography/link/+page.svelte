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

<H1>Link</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button</H2>
<CodeWrapper>
  <ExampleComponents.Button />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Button.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Paragraph</H2>
<CodeWrapper>
  <ExampleComponents.Paragraph />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Paragraph.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper>
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Cta</H2>
<CodeWrapper>
  <ExampleComponents.Cta />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Cta.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card</H2>
<CodeWrapper>
  <ExampleComponents.Card />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Card.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Image</H2>
<CodeWrapper>
  <ExampleComponents.Image />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Image.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Onclick</H2>
<CodeWrapper>
  <ExampleComponents.Onclick />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Onclick.svelte"] as string} />
  {/snippet}
</CodeWrapper>
