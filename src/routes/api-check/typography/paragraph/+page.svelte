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

<H1>Paragraph</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>ContentEditable</H2>
<CodeWrapper>
  <ExampleComponents.ContentEditable />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ContentEditable.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Leading</H2>
<CodeWrapper>
  <ExampleComponents.Leading />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Leading.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>First letter</H2>
<CodeWrapper>
  <ExampleComponents.FirstLetter />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/FirstLetter.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Link</H2>
<CodeWrapper>
  <ExampleComponents.Link />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Link.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Bold</H2>
<CodeWrapper>
  <ExampleComponents.Bold />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Bold.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Underline</H2>
<CodeWrapper>
  <ExampleComponents.Underline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Underline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Italic</H2>
<CodeWrapper>
  <ExampleComponents.Italic />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Italic.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Popover</H2>
<CodeWrapper>
  <ExampleComponents.Popover />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Popover.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Layout</H2>
<CodeWrapper innerClass="space-y-6">
  <ExampleComponents.Layout />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Layout.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Alignments</H2>
<CodeWrapper innerClass="space-y-6">
  <ExampleComponents.Alignments />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Alignments.svelte"] as string} />
  {/snippet}
</CodeWrapper>