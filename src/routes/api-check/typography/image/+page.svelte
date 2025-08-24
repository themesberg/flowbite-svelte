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

<H1>Images</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Caption</H2>
<CodeWrapper>
  <ExampleComponents.Caption />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Caption.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>RoundedCorners</H2>
<CodeWrapper innerClass="space-y-4">
  <ExampleComponents.RoundedCorners />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/RoundedCorners.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Shadow</H2>
<CodeWrapper>
  <ExampleComponents.Shadow />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Shadow.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Retina</H2>
<CodeWrapper>
  <ExampleComponents.Retina />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Retina.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Effects</H2>
<CodeWrapper innerClass="space-y-4">
  <ExampleComponents.Effects />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Effects.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Alignment</H2>
<CodeWrapper innerClass="space-y-4">
  <ExampleComponents.Alignment />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Alignment.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
<CodeWrapper innerClass="space-y-4">
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Enhanced</H2>
<CodeWrapper>
  <ExampleComponents.Enhanced />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Enhanced.svelte"] as string} />
  {/snippet}
</CodeWrapper>

