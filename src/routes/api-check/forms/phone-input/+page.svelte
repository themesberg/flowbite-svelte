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

<H1>Phone Input</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>CountryCode</H2>
<CodeWrapper>
  <ExampleComponents.CountryCode />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CountryCode.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Floating</H2>
<CodeWrapper>
  <ExampleComponents.Floating />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Floating.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Verification</H2>
<CodeWrapper>
  <ExampleComponents.Verification />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Verification.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Select</H2>
<CodeWrapper>
  <ExampleComponents.Select />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Select.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Authentication</H2>
<CodeWrapper>
  <ExampleComponents.Authentication />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Authentication.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Advanced</H2>
<CodeWrapper>
  <ExampleComponents.Advanced />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Advanced.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Classes</H2>
<CodeWrapper>
  <ExampleComponents.Classes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Classes.svelte"] as string} />
  {/snippet}
</CodeWrapper>
