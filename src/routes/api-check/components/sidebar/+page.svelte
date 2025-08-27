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

<H1>Sidebar</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Links And Active</H2>
<CodeWrapper>
  <ExampleComponents.LinksAndActive />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/LinksAndActive.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Links And Active 2</H2>
<CodeWrapper>
  <ExampleComponents.LinksAndActive2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/LinksAndActive2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Always Open</H2>
<CodeWrapper>
  <ExampleComponents.AlwaysOpen />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/AlwaysOpen.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>MultiLevel</H2>
<CodeWrapper>
  <ExampleComponents.MultiLevel />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/MultiLevel.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Multi Level 2</H2>
<CodeWrapper>
  <ExampleComponents.MultiLevel2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/MultiLevel2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Separator</H2>
<CodeWrapper>
  <ExampleComponents.Separator />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Separator.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Cta</H2>
<CodeWrapper>
  <ExampleComponents.Cta />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Cta.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Branding</H2>
<CodeWrapper>
  <ExampleComponents.Branding />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Branding.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Branding Using Children</H2>
<CodeWrapper>
  <ExampleComponents.BrandingUsingChildren />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/BrandingUsingChildren.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Close Button</H2>
<CodeWrapper>
  <ExampleComponents.CloseButton />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CloseButton.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Using Object</H2>
<CodeWrapper>
  <ExampleComponents.ObjectEx />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ObjectEx.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Single</H2>
<CodeWrapper>
  <ExampleComponents.Single />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Single.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>All TransitionOpen</H2>
<CodeWrapper>
  <ExampleComponents.AllOpen />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/AllOpen.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Transition</H2>
<CodeWrapper>
  <ExampleComponents.Transition />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Transition.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Static</H2>
<CodeWrapper>
  <ExampleComponents.Static />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Static.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Onclick Handler</H2>
<CodeWrapper>
  <ExampleComponents.OnClickHandler />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/OnClickHandler.svelte"] as string} />
  {/snippet}
</CodeWrapper>
