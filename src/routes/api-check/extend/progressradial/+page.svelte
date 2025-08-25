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

<H1>Progressradial</H1>
<H2>Default</H2>
<CodeWrapper innerClass="grid grid-cols-2 sm:grid-cols-4">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colors</H2>
<CodeWrapper innerClass="grid grid-cols-2 sm:grid-cols-4">
  <ExampleComponents.Colors />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colors.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Radius</H2>
<CodeWrapper innerClass="grid grid-cols-2 sm:grid-cols-4">
  <ExampleComponents.Radius />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Radius.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Thickness</H2>
<CodeWrapper innerClass="grid grid-cols-2 sm:grid-cols-4">
  <ExampleComponents.Thickness />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Thickness.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Size</H2>
<CodeWrapper innerClass="grid grid-cols-2 sm:grid-cols-4">
  <ExampleComponents.Size />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Size.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Animation</H2>
<CodeWrapper innerClass="grid grid-cols-1">
  <ExampleComponents.Animation />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Animation.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Starting Position</H2>
<CodeWrapper innerClass="grid grid-cols-2 sm:grid-cols-4">
  <ExampleComponents.StartingPosition />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/StartingPosition.svelte"] as string} />
  {/snippet}
</CodeWrapper>
