<script lang="ts">
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";

  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Blockquote</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Solid</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Solid />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Solid.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Paragraph</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Paragraph />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Paragraph.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Testimonial</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Testimonial />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Testimonial.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Review</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Review />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Review.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Left</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Left />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Left.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Center</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Center />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Center.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Right</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Right />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Right.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Small</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Small />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Small.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Medium</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Medium />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Medium.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Large</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Large />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Large.svelte"] as string} />
  {/snippet}
</CodeWrapper>
