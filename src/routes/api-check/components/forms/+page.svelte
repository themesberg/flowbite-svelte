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

<H1>Forms</H1>
<H2>Input Sizes</H2>
<CodeWrapper>
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Disabled</H2>
<CodeWrapper>
  <ExampleComponents.Disabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Disabled.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Helper text</H2>
<CodeWrapper>
  <ExampleComponents.Helper />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Helper.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Input element with icon</H2>
<CodeWrapper>
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Input element with addon</H2>
<CodeWrapper>
  <ExampleComponents.Addon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Addon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Form validation</H2>
<CodeWrapper>
  <ExampleComponents.Validation />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Validation.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Textarea</H2>
<CodeWrapper>
  <ExampleComponents.Textarea />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Textarea.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Select input</H2>
<CodeWrapper>
  <ExampleComponents.Select />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Select.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>MultiSelect</H2>
<CodeWrapper>
  <ExampleComponents.MultiSelect />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/MultiSelect.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Checkbox</H2>
<CodeWrapper>
  <ExampleComponents.Checkbox />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Checkbox.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Radio buttons</H2>
<CodeWrapper>
  <ExampleComponents.Radio />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Radio.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>File upload</H2>
<CodeWrapper>
  <ExampleComponents.File />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/File.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Toggle Switch</H2>
<CodeWrapper>
  <ExampleComponents.Toggle />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Toggle.svelte"] as string} />
  {/snippet}
</CodeWrapper>
