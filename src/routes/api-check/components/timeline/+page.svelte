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

<H1>Timeline</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Vertical</H2>
<CodeWrapper>
  <ExampleComponents.Vertical />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Vertical.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Horizontal</H2>
<CodeWrapper>
  <ExampleComponents.Horizontal />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Horizontal.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Activity</H2>
<CodeWrapper>
  <ExampleComponents.Activity />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Activity.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Grouped</H2>
<CodeWrapper>
  <ExampleComponents.Grouped />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Grouped.svelte"] as string} />
  {/snippet}
</CodeWrapper>
