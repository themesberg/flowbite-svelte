<script lang="ts">
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  // for Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "footer";

  import * as ExampleComponents from "./examples";
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

<H2>Logo</H2>
<CodeWrapper>
  <ExampleComponents.Logo />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Logo.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sitemap link</H2>
<CodeWrapper>
  <ExampleComponents.SitemapLink />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/SitemapLink.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Social media</H2>
<CodeWrapper>
  <ExampleComponents.SocialMedia />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/SocialMedia.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sticky</H2>
<CodeWrapper>
  <ExampleComponents.Sticky />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sticky.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
