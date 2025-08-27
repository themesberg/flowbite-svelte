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

<H1>Radio</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disabled</H2>
<CodeWrapper>
  <ExampleComponents.Disabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Disabled.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Alternative Syntax</H2>
<CodeWrapper>
  <ExampleComponents.AlternativeSyntax />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/AlternativeSyntax.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Link</H2>
<CodeWrapper>
  <ExampleComponents.Link />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Link.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Helper Text</H2>
<CodeWrapper>
  <ExampleComponents.HelperText />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/HelperText.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Bordered</H2>
<CodeWrapper>
  <ExampleComponents.Bordered />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Bordered.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>ListGroup</H2>
<CodeWrapper>
  <ExampleComponents.ListGroup />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ListGroup.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Horizontal</H2>
<CodeWrapper>
  <ExampleComponents.Horizontal />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Horizontal.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown</H2>
<CodeWrapper>
  <ExampleComponents.Dropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Inline</H2>
<CodeWrapper>
  <ExampleComponents.Inline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Inline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Inline 2</H2>
<CodeWrapper>
  <ExampleComponents.Inline2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Inline2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colors</H2>
<CodeWrapper>
  <ExampleComponents.Colors />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colors.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Advanced</H2>
<CodeWrapper>
  <ExampleComponents.Advanced />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Advanced.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>RadioButton</H2>
<CodeWrapper>
  <ExampleComponents.RadioButton />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/RadioButton.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>RadioButton Style</H2>
<CodeWrapper>
  <ExampleComponents.RadioButtonStyle />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/RadioButtonStyle.svelte"] as string} />
  {/snippet}
</CodeWrapper>
