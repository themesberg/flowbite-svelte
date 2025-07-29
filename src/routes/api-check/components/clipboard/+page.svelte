<script lang="ts">
  import HighlightCompo from "../../../utils/api-check/HighlightCompo.svelte";
  import CodeWrapper from "../../../utils/api-check/CodeWrapper.svelte";
  import H1 from "../../../utils/api-check/H1.svelte";
  import H2 from "../../../utils/api-check/H2.svelte";

  import * as ExampleComponents from "./examples/";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Clipboard</H1>

<H2>Default</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Input with copy button</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Input />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Input.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Copy button with text</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.CopyButton />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CopyButton.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Input group with copy</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.InputGroup />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/InputGroup.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>URL shortener input group</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Url />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Url.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Copy source code block</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Source />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Source.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card with API keys</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.ApiKeys />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ApiKeys.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Copy Textarea</H2>
<CodeWrapper>
  <ExampleComponents.Textarea />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Textarea.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Copy contact details</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Contact />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Contact.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Copy button with modal</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Modal />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Modal.svelte"] as string} />
  {/snippet}
</CodeWrapper>
