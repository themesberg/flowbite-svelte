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

<H1>Button Group</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disabled</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Disabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Disabled.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>More examples</H2>
<CodeWrapper>
  <ExampleComponents.More />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/More.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button group as links</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Links />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Links.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Group buttons with icons</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Icons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Outline</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Outline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Outline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Outline with icon</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.OutlineIcon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/OutlineIcon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Events</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Event />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Event.svelte"] as string} />
  {/snippet}
</CodeWrapper>
