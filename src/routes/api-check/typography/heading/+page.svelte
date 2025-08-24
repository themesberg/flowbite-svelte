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

<H1>Heading</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>SecondLevel</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.SecondLevel />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/SecondLevel.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Highlighted</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Highlighted />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Highlighted.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Mark</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Mark />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Mark.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Gradient</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Gradient />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Gradient.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Underline</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Underline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Underline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Breadcrumb</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Breadcrumb />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Breadcrumb.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Badge</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Badge />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Badge.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Secondary</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Secondary />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Secondary.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Default</H2>
<CodeWrapper innerClass="flex flex-col gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>