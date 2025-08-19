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

<H1>Darkmode</H1>
<H2>Switcher style</H2>
<CodeWrapper>
  <ExampleComponents.Switcher />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Switcher.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Mode icon</H2>
<CodeWrapper>
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>
