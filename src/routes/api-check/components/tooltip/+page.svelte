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

<H1>Tooltip</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex items-end h-32">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Default 2</H2>
<CodeWrapper innerClass="h-32 flex items-end gap-2">
  <ExampleComponents.Default2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Tooltip Types</H2>
<CodeWrapper innerClass="flex items-end h-32 gap-2">
  <ExampleComponents.TooltipTypes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TooltipTypes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Placement</H2>
<CodeWrapper innerClass="flex items-center justify-center gap-2 h-36">
  <ExampleComponents.Placement />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Placement.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Triggering</H2>
<CodeWrapper innerClass="flex items-end gap-2 h-32">
  <ExampleComponents.Triggering />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Triggering.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disable Arrow</H2>
<CodeWrapper innerClass="flex items-end gap-2 h-32">
  <ExampleComponents.DisableArrow />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/DisableArrow.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>External</H2>
<CodeWrapper innerClass="flex gap-4 flex-col justify-center items-center h-72">
  <ExampleComponents.External />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/External.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Animations</H2>
<CodeWrapper innerClass="flex items-end gap-2 h-32">
  <ExampleComponents.Animations />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Animations.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom</H2>
<CodeWrapper innerClass="flex items-center h-64 gap-2">
  <ExampleComponents.Custom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Custom.svelte"] as string} />
  {/snippet}
</CodeWrapper>
