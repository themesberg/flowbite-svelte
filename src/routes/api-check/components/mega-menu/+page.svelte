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

<H1>Megamenu</H1>
<H2>Default</H2>
<CodeWrapper innerClass="h-72">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Mega menu with icons</H2>
<CodeWrapper innerClass="h-72">
  <ExampleComponents.Icons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Transition</H2>
<CodeWrapper innerClass="h-72">
  <ExampleComponents.Transition />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Transition.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Full width dropdown</H2>
<CodeWrapper innerClass="h-[450px]">
  <ExampleComponents.Dropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Full width with CTA</H2>
<CodeWrapper innerClass="h-72">
  <ExampleComponents.Cta />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Cta.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Full width with image</H2>
<CodeWrapper innerClass="h-72">
  <ExampleComponents.Image />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Image.svelte"] as string} />
  {/snippet}
</CodeWrapper>
