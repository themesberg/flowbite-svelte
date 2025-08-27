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

<H1>Tabs</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Underline</H2>
<CodeWrapper>
  <ExampleComponents.Underline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Underline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icons</H2>
<CodeWrapper>
  <ExampleComponents.Icons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Pills</H2>
<CodeWrapper>
  <ExampleComponents.Pills />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Pills.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Full</H2>
<CodeWrapper>
  <ExampleComponents.Full />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Full.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>CompoIn</H2>
<CodeWrapper>
  <ExampleComponents.CompoIn />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CompoIn.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Snapshot</H2>
<CodeWrapper>
  <ExampleComponents.Snapshot />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Snapshot.svelte"] as string} />
  {/snippet}
</CodeWrapper>
