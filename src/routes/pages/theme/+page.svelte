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
  const customTheme = import.meta.glob("./examples/theme.ts", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Theme</H1>

<H2>Examples</H2>
<CodeWrapper>
  <ExampleComponents.Example1 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Example1.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom Theme</H2>
<HighlightCompo codeLang="ts" code={customTheme["./examples/theme.ts"]} />
