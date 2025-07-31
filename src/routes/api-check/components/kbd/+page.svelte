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

<H1>KBD</H1>
<H2>Default KBD</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>KBD inside text</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Text />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Text.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>KBD inside table</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Table />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Table.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Arrow keys</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Arrow />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Arrow.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Letter keys</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Letter />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Letter.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Number keys</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Number />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Number.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Function keys</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Function />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Function.svelte"] as string} />
  {/snippet}
</CodeWrapper>

