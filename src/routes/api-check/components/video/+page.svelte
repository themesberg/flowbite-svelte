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

<H1>Video</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Autoplay</H2>
<CodeWrapper>
  <ExampleComponents.Autoplay />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Autoplay.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Muted</H2>
<CodeWrapper>
  <ExampleComponents.Muted />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Muted.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Width</H2>
<CodeWrapper>
  <ExampleComponents.Width />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Width.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Height</H2>
<CodeWrapper>
  <ExampleComponents.Height />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Height.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Responsive</H2>
<CodeWrapper>
  <ExampleComponents.Responsive />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Responsive.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom</H2>
<CodeWrapper>
  <ExampleComponents.Custom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Custom.svelte"] as string} />
  {/snippet}
</CodeWrapper>Autoplay
