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

<H1>Textarea</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Clearable</H2>
<CodeWrapper>
  <ExampleComponents.Clearable />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Clearable.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Event</H2>
<CodeWrapper>
  <ExampleComponents.Event />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Event.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>ElementRef</H2>
<CodeWrapper>
  <ExampleComponents.ElementRef />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ElementRef.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Editor</H2>
<CodeWrapper>
  <ExampleComponents.Editor />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Editor.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Comment</H2>
<CodeWrapper>
  <ExampleComponents.Comment />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Comment.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Chatroom</H2>
<CodeWrapper>
  <ExampleComponents.Chatroom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Chatroom.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Snapshot</H2>
<CodeWrapper>
  <ExampleComponents.Snapshot />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Snapshot.svelte"] as string} />
  {/snippet}
</CodeWrapper>

