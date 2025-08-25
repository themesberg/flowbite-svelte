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

<H1>File Input</H1>
<H2>Helper Text</H2>
<CodeWrapper>
  <ExampleComponents.HelperText />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/HelperText.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Clearable</H2>
<CodeWrapper>
  <ExampleComponents.Clearable />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Clearable.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
<CodeWrapper>
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Events</H2>
<CodeWrapper>
  <ExampleComponents.Events />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Events.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>ElementRef</H2>
<CodeWrapper>
  <ExampleComponents.ElementRef />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ElementRef.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropzone</H2>
<CodeWrapper>
  <ExampleComponents.Dropzone />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dropzone.svelte"] as string} />
  {/snippet}
</CodeWrapper>
