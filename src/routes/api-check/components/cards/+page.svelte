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

<H1>Cards</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card with action button</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Action />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Action.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card with link</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Link />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Link.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card with image</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Image />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Image.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Horizontal card</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Horizontal />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Horizontal.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>User profile card</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Profile />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Profile.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card with form inputs</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Form />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Form.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>E-commerce card</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Ecommerce />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Ecommerce.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Call to action card</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Call />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Call.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Default</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card with list</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.List />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/List.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Pricing card</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Pricing />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Pricing.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Testimonial card</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Testimonial />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Testimonial.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom size</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Size />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Size.svelte"] as string} />
  {/snippet}
</CodeWrapper>
