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

<H1>Badge</H1>

<H2>Default</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Large</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Large />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Large.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Bordered badge</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Bordered />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Bordered.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Pills badge</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Pills />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Pills.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Badges as links</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Links />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Links.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Badges with icon</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Notification badge</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Notification />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Notification.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button with badge</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.ButtonBadge />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ButtonBadge.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Badge with icon only</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.IconOnly />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/IconOnly.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dismissable badges</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Dismissable />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dismissable.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dismissable badges 2</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Dismissable2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dismissable2.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dismissable badges 3</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Dismissable3 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dismissable3.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dynamic color</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Dynamic />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dynamic.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Opening badge</H2>
<CodeWrapper innerClass="flex justify-center gap-2">
  <ExampleComponents.Opening />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Opening.svelte"] as string} />
  {/snippet}
</CodeWrapper>
