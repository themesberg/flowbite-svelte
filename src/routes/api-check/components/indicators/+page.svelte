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

<H1>Indicators</H1>
<H2>Default indicator</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Legend indicator</H2>
<CodeWrapper>
  <ExampleComponents.Legend />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Legend.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Indicator count</H2>
<CodeWrapper>
  <ExampleComponents.Count />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Count.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Status indicator</H2>
<CodeWrapper innerClass="flex gap-2">
  <ExampleComponents.Status />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Status.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Badge indicator</H2>
<CodeWrapper>
  <ExampleComponents.Badge />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Badge.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Stepper indicator</H2>
<CodeWrapper>
  <ExampleComponents.Stepper />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Stepper.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Indicator position</H2>
<CodeWrapper>
  <ExampleComponents.Position />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Position.svelte"] as string} />
  {/snippet}
</CodeWrapper>
