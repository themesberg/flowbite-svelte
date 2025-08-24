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

<H1>Toggle</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colors</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Colors />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colors.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Label</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Label />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Label.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disabled</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Disabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Disabled.svelte"] as string} />
  {/snippet}
</CodeWrapper>