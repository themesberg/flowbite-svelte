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

<H1>Navbar</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Active class</H2>
<CodeWrapper>
  <ExampleComponents.Active />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Active.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>activeClass</H2>
<CodeWrapper>
  <ExampleComponents.ActiveClass />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ActiveClass.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Fly transition</H2>
<CodeWrapper>
  <ExampleComponents.Fly />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Fly.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Fade transition</H2>
<CodeWrapper>
  <ExampleComponents.Fade />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Fade.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Scale transition</H2>
<CodeWrapper>
  <ExampleComponents.Scale />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Scale.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>closeOnClickOutside</H2>
<CodeWrapper>
  <ExampleComponents.Close />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Close.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Navbar with dropdown</H2>
<CodeWrapper>
  <ExampleComponents.Dropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Navbar with search</H2>
<CodeWrapper>
  <ExampleComponents.Search />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Search.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Navbar with CTA button</H2>
<CodeWrapper>
  <ExampleComponents.Cta />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Cta.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sticky navbar</H2>
<CodeWrapper>
  <ExampleComponents.Sticky />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sticky.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>User menu dropdown</H2>
<CodeWrapper>
  <ExampleComponents.User />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/User.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Solid background</H2>
<CodeWrapper>
  <ExampleComponents.Solid />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Solid.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Breakpoint</H2>
<CodeWrapper>
  <ExampleComponents.Breakpoint />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Breakpoint.svelte"] as string} />
  {/snippet}
</CodeWrapper>
