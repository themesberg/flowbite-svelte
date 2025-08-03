<script lang="ts">
  import HighlightCompo from "../../../utils/api-check/HighlightCompo.svelte";
  import CodeWrapper from "../../../utils/api-check/CodeWrapper.svelte";
  import H1 from "../../../utils/api-check/H1.svelte";
  import H2 from "../../../utils/api-check/H2.svelte";

  import * as ExampleComponents from "./examples/";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Pagination</H1>
<H2>Default: PaginationNav</H2>
<CodeWrapper innerClass="flex flex-col justify-center items-center gap-3">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Default: Pagination, PaginationItem</H2>
<CodeWrapper innerClass="flex flex-col justify-center items-center gap-3">
  <ExampleComponents.Default2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Pagination with icons: PaginationNav</H2>
<CodeWrapper innerClass="flex flex-col justify-center items-center gap-3">
  <ExampleComponents.Icons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Pagination with icons: Pagination, PaginationItem</H2>
<CodeWrapper>
  <ExampleComponents.Icons2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icons2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Previous and next: PaginationNav</H2>
<CodeWrapper innerClass="flex flex-col justify-center items-center gap-3">
  <ExampleComponents.PreviousNext />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/PreviousNext.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Previous and next: Pagination, PaginationItem</H2>
<CodeWrapper innerClass="flex flex-col justify-center items-center gap-3">
  <ExampleComponents.PreviousNext2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/PreviousNext2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Previous and next with icons: PaginationNav</H2>
<CodeWrapper innerClass="flex flex-col justify-center items-center gap-3">
  <ExampleComponents.PreviousNextIcons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/PreviousNextIcons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Previous and next with icons: Pagination, PaginationItem</H2>
<CodeWrapper innerClass="flex flex-col justify-center items-center gap-3">
  <ExampleComponents.PreviousNextIcons2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/PreviousNextIcons2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table data pagination: PaginationNav</H2>
<CodeWrapper innerClass="flex flex-col justify-center items-center gap-3">
  <ExampleComponents.TableData />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TableData.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table data pagination: Pagination, PaginationItem</H2>
<CodeWrapper>
  <ExampleComponents.TableData2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TableData2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table data pagination with icons: PaginationNav</H2>
<CodeWrapper innerClass="flex flex-col justify-center items-center">
  <ExampleComponents.TableDataIcons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TableDataIcons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Table data pagination with icons: Pagination, PaginationItem</H2>
<CodeWrapper>
  <ExampleComponents.TableDataIcons2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TableDataIcons2.svelte"] as string} />
  {/snippet}
</CodeWrapper>
