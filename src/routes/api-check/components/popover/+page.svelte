<script lang="ts">
  import HighlightCompo from "../../../utils/api-check/HighlightCompo.svelte";
  import CodeWrapper from "../../../utils/api-check/CodeWrapper.svelte";
  import H1 from "../../../utils/api-check/H1.svelte";
  import H2 from "../../../utils/api-check/H2.svelte";

  import * as ExampleComponents from "./examples/";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<H1>Popover</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex h-44 items-end justify-center">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>User profile</H2>
<CodeWrapper innerClass="flex h-74 items-end justify-center">
  <ExampleComponents.User />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/User.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Company profile</H2>
<CodeWrapper innerClass="flex h-100 items-end justify-center">
  <ExampleComponents.Company />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Company.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Image popover</H2>
<CodeWrapper innerClass="flex h-96 items-end">
  <ExampleComponents.Image />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Image.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Description popover</H2>
<CodeWrapper innerClass="h-96">
  <ExampleComponents.Description />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Description.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Progress popover</H2>
<CodeWrapper innerClass="h-60 flex justify-center items-end">
  <ExampleComponents.Progress />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Progress.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Password strength</H2>
<CodeWrapper>
  <ExampleComponents.Password />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Password.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Placement</H2>
<CodeWrapper innerClass="flex gap-4 flex-col justify-center items-center h-96">
  <ExampleComponents.Placement />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Placement.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Triggering</H2>
<CodeWrapper innerClass="flex h-44 items-end justify-center gap-4">
  <ExampleComponents.Triggering />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Triggering.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Offset</H2>
<CodeWrapper innerClass="flex h-56 items-end justify-center">
  <ExampleComponents.Offset />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Offset.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Animation</H2>
<CodeWrapper innerClass="flex h-44 items-end justify-center gap-8">
  <ExampleComponents.Animation />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Animation.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disable arrow</H2>
<CodeWrapper innerClass="flex h-44 items-end justify-center">
  <ExampleComponents.DisableArrow />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/DisableArrow.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>External reference </H2>
<CodeWrapper innerClass="flex gap-4 flex-col justify-end items-center h-64">
  <ExampleComponents.External />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/External.svelte"] as string} />
  {/snippet}
</CodeWrapper>


