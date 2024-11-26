<script lang="ts">
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  // for Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "pagination";

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Pagination</H1>

<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Event</H2>
<CodeWrapper>
  <ExampleComponents.Event />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Event.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icons</H2>
<CodeWrapper>
  <ExampleComponents.Icons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Previous and next</H2>
<CodeWrapper>
  <ExampleComponents.PreviousAndNext />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/PreviousAndNext.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Previous and next with icons</H2>
<CodeWrapper>
  <ExampleComponents.PreviousAndNextWithIcons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/PreviousAndNextWithIcons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table data pagination</H2>
<CodeWrapper>
  <ExampleComponents.TableDataPagination />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TableDataPagination.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table data with icons</H2>
<CodeWrapper>
  <ExampleComponents.TableDataWithIcons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TableDataWithIcons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
