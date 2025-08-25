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

<H1>Progress</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Progressradial</H2>
<CodeWrapper>
  <ExampleComponents.Progressradial />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Progressradial.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
<CodeWrapper>
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Label Inside</H2>
<CodeWrapper>
  <ExampleComponents.LabelInside />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/LabelInside.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Label Outsidxe</H2>
<CodeWrapper>
  <ExampleComponents.LabelOutside />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/LabelOutside.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colors</H2>
<CodeWrapper>
  <ExampleComponents.Colors />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colors.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom Style</H2>
<CodeWrapper>
  <ExampleComponents.CustomStyle />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CustomStyle.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Animation</H2>
<CodeWrapper>
  <ExampleComponents.Animation />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Animation.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>CustomColor</H2>
<CodeWrapper>
  <ExampleComponents.CustomColor />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CustomColor.svelte"] as string} />
  {/snippet}
</CodeWrapper>
