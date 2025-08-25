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

<H1>Number Input</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>ZIP code input</H2>
<CodeWrapper>
  <ExampleComponents.Zip />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Zip.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Phone number</H2>
<CodeWrapper>
  <ExampleComponents.Phone />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Phone.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Control buttons</H2>
<CodeWrapper>
  <ExampleComponents.Control />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Control.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Control button with Icon</H2>
<CodeWrapper>
  <ExampleComponents.ControlIcon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ControlIcon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Counter input</H2>
<CodeWrapper>
  <ExampleComponents.Counter />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Counter.svelte"] as string} />
  {/snippet}
</CodeWrapper>
