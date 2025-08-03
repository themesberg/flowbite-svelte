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

<H1>Modal</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Pop-up modal </H2>
<CodeWrapper>
  <ExampleComponents.Popup />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Popup.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Form element</H2>
<CodeWrapper>
  <ExampleComponents.Form />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Form.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Crypto wallet</H2>
<CodeWrapper>
  <ExampleComponents.Crypto />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Crypto.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Clicking outside</H2>
<CodeWrapper>
  <ExampleComponents.Outside />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Outside.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Focus trap</H2>
<CodeWrapper>
  <ExampleComponents.Focus />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Focus.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
<CodeWrapper>
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Placement</H2>
<CodeWrapper>
  <ExampleComponents.Placement />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Placement.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Scrolling behaviour</H2>
<CodeWrapper>
  <ExampleComponents.Scrolling />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Scrolling.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Non-modal case</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>No internal form</H2>
<CodeWrapper>
  <ExampleComponents.NoForm />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/NoForm.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Modal events</H2>
<CodeWrapper>
  <ExampleComponents.Events />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Events.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Full-Screen Modal</H2>
<CodeWrapper>
  <ExampleComponents.Full />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Full.svelte"] as string} />
  {/snippet}
</CodeWrapper>
