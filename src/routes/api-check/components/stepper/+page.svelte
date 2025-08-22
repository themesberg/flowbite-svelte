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

<H1>Stepper</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Progress</H2>
<CodeWrapper>
  <ExampleComponents.Progress />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Progress.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Detailed</H2>
<CodeWrapper>
  <ExampleComponents.Detailed />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Detailed.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Vertical</H2>
<CodeWrapper>
  <ExampleComponents.Vertical />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Vertical.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Breadcrumb</H2>
<CodeWrapper>
  <ExampleComponents.Breadcrumb />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Breadcrumb.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Timeline</H2>
<CodeWrapper>
  <ExampleComponents.Timeline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Timeline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Form</H2>
<CodeWrapper>
  <ExampleComponents.Form />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Form.svelte"] as string} />
  {/snippet}
</CodeWrapper>