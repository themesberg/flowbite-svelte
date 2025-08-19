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

<H1>Footer</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Footer with logo</H2>
<CodeWrapper>
  <ExampleComponents.Logo />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Logo.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Social media icons media icons</H2>
<CodeWrapper>
  <ExampleComponents.Social />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Social.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sitemap links</H2>
<CodeWrapper>
  <ExampleComponents.Sitemap />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sitemap.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sticky footer</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Sticky />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sticky.svelte"] as string} />
  {/snippet}
</CodeWrapper>
