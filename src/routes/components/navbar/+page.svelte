<script lang="ts">
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  // for Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "nav";

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Navbar</H1>

<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Breakpoint</H2>
<CodeWrapper>
  <ExampleComponents.Breakpoint />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Breakpoint.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Cta button</H2>
<CodeWrapper>
  <ExampleComponents.CtaButton />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CtaButton.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sticky</H2>
<CodeWrapper>
  <ExampleComponents.Sticky />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sticky.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Search navbar</H2>
<CodeWrapper>
  <ExampleComponents.SearchNavbar />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/SearchNavbar.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown</H2>
<CodeWrapper>
  <ExampleComponents.Dropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Background color</H2>
<CodeWrapper>
  <ExampleComponents.BackgroundColor />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/BackgroundColor.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>User dropdown</H2>
<CodeWrapper>
  <ExampleComponents.UserDropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/UserDropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
