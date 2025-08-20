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

<H1>Skeleton</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Image</H2>
<CodeWrapper>
  <ExampleComponents.Image />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Image.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Video</H2>
<CodeWrapper>
  <ExampleComponents.Video />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Video.svelte"] as string} />
  {/snippet}Text
</CodeWrapper>

<H2>Text</H2>
<CodeWrapper>
  <ExampleComponents.Text />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Text.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card</H2>
<CodeWrapper>
  <ExampleComponents.Card />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Card.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Widget</H2>
<CodeWrapper>
  <ExampleComponents.Widget />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Widget.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>List</H2>
<CodeWrapper>
  <ExampleComponents.List />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/List.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Testimonial</H2>
<CodeWrapper>
  <ExampleComponents.Testimonial />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Testimonial.svelte"] as string} />
  {/snippet}
</CodeWrapper>