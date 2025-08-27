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

<H1>Button Toggle</H1>
<H2>Default</H2>
<CodeWrapper innerClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button Color</H2>
<CodeWrapper innerClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <ExampleComponents.ButtonColor />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ButtonColor.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Group Color</H2>
<CodeWrapper innerClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <ExampleComponents.GroupColor />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/GroupColor.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Rounded Size</H2>
<CodeWrapper innerClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <ExampleComponents.RoundedSize />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/RoundedSize.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Ctx</H2>
<CodeWrapper innerClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <ExampleComponents.Ctx />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Ctx.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom</H2>
<CodeWrapper innerClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <ExampleComponents.Custom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Custom.svelte"] as string} />
  {/snippet}
</CodeWrapper>
