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

<H1>Drawer</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Drawer navigation</H2>
<CodeWrapper>
  <ExampleComponents.Navigation />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Navigation.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Contact form</H2>
<CodeWrapper>
  <ExampleComponents.Contact />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Contact.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Form elements</H2>
<CodeWrapper>
  <ExampleComponents.Form />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Form.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Left drawer</H2>
<CodeWrapper>
  <ExampleComponents.Left />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Left.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Right drawer</H2>
<CodeWrapper>
  <ExampleComponents.Right />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Right.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Top drawer</H2>
<CodeWrapper>
  <ExampleComponents.Top />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Top.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Bottom drawer</H2>
<CodeWrapper>
  <ExampleComponents.Bottom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Bottom.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Enabled (default)</H2>
<CodeWrapper>
  <ExampleComponents.Enabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Enabled.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disabled</H2>
<CodeWrapper>
  <ExampleComponents.Disabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Disabled.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Position</H2>
<CodeWrapper>
  <ExampleComponents.Position />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Position.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disabling outside click and backdrop</H2>
<CodeWrapper>
  <ExampleComponents.DisablingOutside />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/DisablingOutside.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disabling only outside click</H2>
<CodeWrapper>
  <ExampleComponents.OnlyOutside />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/OnlyOutside.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Body scrolling</H2>
<CodeWrapper>
  <ExampleComponents.Scrolling />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Scrolling.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Swipeable Edge</H2>
<CodeWrapper>
  <ExampleComponents.SwipeableEdge />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/SwipeableEdge.svelte"] as string} />
  {/snippet}
</CodeWrapper>
