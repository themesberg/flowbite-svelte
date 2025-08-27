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

<H1>Rating</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Stars</H2>
<CodeWrapper>
  <ExampleComponents.Stars />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Stars.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Rating with Text</H2>
<CodeWrapper>
  <ExampleComponents.Text />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Text.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Rating Count</H2>
<CodeWrapper>
  <ExampleComponents.Count />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Count.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon And Size</H2>
<CodeWrapper>
  <ExampleComponents.IconAndSize />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/IconAndSize.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon And Size 2</H2>
<CodeWrapper>
  <ExampleComponents.IconAndSize2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/IconAndSize2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Advanced Rating component</H2>
<CodeWrapper>
  <ExampleComponents.Advanced />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Advanced.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Different icon</H2>
<CodeWrapper>
  <ExampleComponents.Different />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Different.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Score rating</H2>
<CodeWrapper>
  <ExampleComponents.Score />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Score.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Rating Comment</H2>
<CodeWrapper>
  <ExampleComponents.Comment />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Comment.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Review content</H2>
<CodeWrapper>
  <ExampleComponents.Review />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Review.svelte"] as string} />
  {/snippet}
</CodeWrapper>
