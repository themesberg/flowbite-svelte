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

<H1>Toolbar</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colored</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Colored />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colored.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Groups</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Groups />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Groups.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Editor</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Editor />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Editor.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>CommentBox</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.CommentBox />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CommentBox.svelte"] as string} />
  {/snippet}
</CodeWrapper>
