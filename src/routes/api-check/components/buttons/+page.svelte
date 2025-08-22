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

<H1>Buttons</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button with link</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Link />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Link.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button pills</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Pills />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Pills.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Gradient monochrome</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Monochrome />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Monochrome.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Gradient duotone</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Duotone />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Duotone.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Gradient outline</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.GradientOutline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/GradientOutline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Colored shadows</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Colored />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Colored.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Outline buttons</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Outline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Outline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button sizes with icons</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button with icon</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button with label</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Label />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Label.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon buttons</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.IconButton />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/IconButton.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Loader</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Loader />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Loader.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disabled</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Disabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Disabled.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Events</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Events />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Events.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Loading State with Spinner</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <ExampleComponents.Loading />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Loading.svelte"] as string} />
  {/snippet}
</CodeWrapper>
