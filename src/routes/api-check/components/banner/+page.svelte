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

<H1>Banner</H1>

<H2>Default</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Bottom banner position</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Bottom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Bottom.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Marketing CTA banner</H2>

<CodeWrapper innerClass="relative">
  <ExampleComponents.Cta />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Cta.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Newsletter sign-up banner</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Newsletter />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Newsletter.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Informational banner</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Informational />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Informational.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Transition</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Transition />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Transition.svelte"] as string} />
  {/snippet}
</CodeWrapper>
