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

<H1>Toast</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex justify-center h-28">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colors</H2>
<CodeWrapper innerClass="flex flex-col items-center gap-4 h-[750px]">
  <ExampleComponents.Colors />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colors.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Simple</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Simple />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Simple.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icons</H2>
<CodeWrapper innerClass="flex flex-col items-center gap-4 h-52">
  <ExampleComponents.Icons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Autohide</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Autohide />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Autohide.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Transitions</H2>
<CodeWrapper innerClass="flex flex-col items-center gap-4 h-80">
  <ExampleComponents.Transitions />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Transitions.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Blur</H2>
<CodeWrapper innerClass="flex flex-col items-center gap-4 h-52">
  <ExampleComponents.Blur />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Blur.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Fly</H2>
<CodeWrapper innerClass="flex flex-col items-center gap-4 h-52">
  <ExampleComponents.Fly />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Fly.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Undo</H2>
<CodeWrapper innerClass="flex justify-center h-40" >
  <ExampleComponents.Undo />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Undo.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Advanced examples: Toast</H2>
<CodeWrapper innerClass="flex justify-center h-52">
  <ExampleComponents.Toast />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Toast.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Push notification</H2>
<CodeWrapper innerClass="flex justify-center h-52">
  <ExampleComponents.Push />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Push.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Interactive</H2>
<CodeWrapper innerClass="flex justify-center h-52">
  <ExampleComponents.Interactive />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Interactive.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Positioning</H2>
<CodeWrapper>
  <ExampleComponents.Positioning />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Positioning.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Events</H2>
<CodeWrapper>
  <ExampleComponents.Events />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Events.svelte"] as string} />
  {/snippet}
</CodeWrapper>
