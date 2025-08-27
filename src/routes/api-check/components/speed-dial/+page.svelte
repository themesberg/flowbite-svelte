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

<H1>Speed Dial</H1>
<H2>Default</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colors</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.Colors />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colors.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Square</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.Square />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Square.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Text Inside</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.TextInside />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TextInside.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Text Outside</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.TextOutside />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TextOutside.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.Dropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Alternative</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.Alternative />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Alternative.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Alignment</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.Alignment />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Alignment.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Transition</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.Transition />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Transition.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Triggering</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.Triggering />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Triggering.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom</H2>
<CodeWrapper innerClass="relative h-96">
  <ExampleComponents.Custom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Custom.svelte"] as string} />
  {/snippet}
</CodeWrapper>
