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

<H1>Avatar</H1>

<H2>Default</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon avatar</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom Dot</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.CustomDot />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CustomDot.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Bordered</H2>
<CodeWrapper innerClass="flex justify-center gap-4">
  <ExampleComponents.Bordered />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Bordered.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Placeholder</H2>
<CodeWrapper innerClass="flex justify-center gap-4">
  <ExampleComponents.Placeholder />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Placeholder.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Placeholder initial</H2>
<CodeWrapper innerClass="flex justify-center gap-4">
  <ExampleComponents.PlaceholderInitial />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/PlaceholderInitial.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Avatar with tooltip</H2>
<CodeWrapper innerClass="flex justify-center gap-4">
  <ExampleComponents.AvatarWithTooltip />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/AvatarWithTooltip.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dot indicator</H2>
<CodeWrapper innerClass="flex justify-center gap-4">
  <ExampleComponents.DotIndicator />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/DotIndicator.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Stacked</H2>
<CodeWrapper>
  <ExampleComponents.Stacked />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Stacked.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Avatar text</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.AvatarText />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/AvatarText.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>User dropdown</H2>
<CodeWrapper innerClass="flex justify-center h-96">
  <ExampleComponents.UserDropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/UserDropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
<CodeWrapper innerClass="flex justify-center h-96">
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>
