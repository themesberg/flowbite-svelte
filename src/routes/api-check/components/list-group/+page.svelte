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

<H1>List Group</H1>
<H2>Default list group</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>List group with links</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Links />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Links.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>List group with buttons</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Buttons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Buttons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>List group with icons</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Icons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Horizontal list group</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Group />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Group.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Horizontal list with tooltip</H2>
<CodeWrapper innerClass="space-x-8 h-64 flex justify-center items-center">
  <ExampleComponents.Tooltip />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Tooltip.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Advanced</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Advanced />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Advanced.svelte"] as string} />
  {/snippet}
</CodeWrapper>
