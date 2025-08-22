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

<H1>Input Field</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Clearable</H2>
<CodeWrapper>
  <ExampleComponents.Clearable />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Clearable.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Event</H2>
<CodeWrapper>
  <ExampleComponents.Event />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Event.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>EventHandlers</H2>
<CodeWrapper>
  <ExampleComponents.EventHandlers />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/EventHandlers.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>ElementRef</H2>
<CodeWrapper>
  <ExampleComponents.ElementRef />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ElementRef.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Combobox</H2>
<CodeWrapper>
  <ExampleComponents.Combobox />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Combobox.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>ComboboxIcon</H2>
<CodeWrapper>
  <ExampleComponents.ComboboxIcon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ComboboxIcon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
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

<H2>Validation</H2>
<CodeWrapper>
  <ExampleComponents.Validation />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Validation.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper>
  <ExampleComponents.Icon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Icon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Group</H2>
<CodeWrapper>
  <ExampleComponents.Group />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Group.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon Click Handler</H2>
<CodeWrapper>
  <ExampleComponents.IconClickHandler />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/IconClickHandler.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Helper Text</H2>
<CodeWrapper>
  <ExampleComponents.HelperText />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/HelperText.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Number</H2>
<CodeWrapper>
  <ExampleComponents.Number />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Number.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Search</H2>
<CodeWrapper>
  <ExampleComponents.Search />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Search.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown</H2>
<CodeWrapper>
  <ExampleComponents.Dropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Dropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Advanced</H2>
<CodeWrapper>
  <ExampleComponents.Advanced />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Advanced.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Snapshot</H2>
<CodeWrapper>
  <ExampleComponents.Snapshot />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Snapshot.svelte"] as string} />
  {/snippet}
</CodeWrapper>