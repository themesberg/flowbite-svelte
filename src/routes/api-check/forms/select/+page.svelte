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

<H1>Select</H1>
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

<H2>Disabled</H2>
<CodeWrapper>
  <ExampleComponents.Disabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Disabled.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Underline</H2>
<CodeWrapper>
  <ExampleComponents.Underline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Underline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown</H2>
<CodeWrapper>
  <ExampleComponents.Dropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
<CodeWrapper>
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom</H2>
<CodeWrapper>
  <ExampleComponents.Custom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Custom.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>ElementRef</H2>
<CodeWrapper>
  <ExampleComponents.ElementRef />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ElementRef.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Multi</H2>
<CodeWrapper>
  <ExampleComponents.Multi />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Multi.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Placeholder</H2>
<CodeWrapper>
  <ExampleComponents.Placeholder />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Placeholder.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>MultiDisabled</H2>
<CodeWrapper>
  <ExampleComponents.MultiDisabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/MultiDisabled.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>MultiOption</H2>
<CodeWrapper>
  <ExampleComponents.MultiOption />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/MultiOption.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Preselect</H2>
<CodeWrapper>
  <ExampleComponents.Preselect />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Preselect.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Customization</H2>
<CodeWrapper>
  <ExampleComponents.Customization />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Customization.svelte"] as string} />
  {/snippet}
</CodeWrapper>
