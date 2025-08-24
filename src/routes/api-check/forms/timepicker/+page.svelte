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

<H1>Timepicker</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>State And Bind</H2>
<CodeWrapper>
  <ExampleComponents.StateAndBind />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/StateAndBind.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper>
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom Props</H2>
<CodeWrapper>
  <ExampleComponents.CustomProps />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CustomProps.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown</H2>
<CodeWrapper>
  <ExampleComponents.Dropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Select</H2>
<CodeWrapper>
  <ExampleComponents.Select />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Select.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Range</H2>
<CodeWrapper>
  <ExampleComponents.Range />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Range.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Timerange</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Timerange.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Toggle</H2>
<CodeWrapper>
  <ExampleComponents.Toggle />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Toggle.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Inline</H2>
<CodeWrapper>
  <ExampleComponents.Inline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Inline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Modal</H2>
<CodeWrapper>
  <ExampleComponents.Modal />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Modal.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Drawer</H2>
<CodeWrapper>
  <ExampleComponents.Drawer />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Drawer.svelte"] as string} />
  {/snippet}
</CodeWrapper>