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

<H1>List</H1>
<H2>Unordered</H2>
<CodeWrapper>
  <ExampleComponents.Unordered />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Unordered.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Unordered Icons</H2>
<CodeWrapper>
  <ExampleComponents.UnorderedIcons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/UnorderedIcons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Unordered Nested</H2>
<CodeWrapper>
  <ExampleComponents.UnorderedNested />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/UnorderedNested.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Unordered Unstyled</H2>
<CodeWrapper>
  <ExampleComponents.UnorderedUnstyled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/UnorderedUnstyled.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Ordered</H2>
<CodeWrapper>
  <ExampleComponents.Ordered />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Ordered.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Ordered Nested</H2>
<CodeWrapper>
  <ExampleComponents.OrderedNested />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/OrderedNested.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Description</H2>
<CodeWrapper>
  <ExampleComponents.Description />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Description.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper>
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Advanced</H2>
<CodeWrapper>
  <ExampleComponents.Advanced />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Advanced.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Horizontal</H2>
<CodeWrapper>
  <ExampleComponents.Horizontal />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Horizontal.svelte"] as string} />
  {/snippet}
</CodeWrapper>