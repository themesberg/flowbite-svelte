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

<H1>Dropdown</H1>
<H2>Default</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Default.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Adding links and active class</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Links />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Links.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Active class</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Active />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Active.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown divider</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Divider />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Divider.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown header</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Header />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Header.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Multi-level dropdown</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Multilevel />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Multilevel.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Programatic open/close</H2>
<CodeWrapper innerClass="flex flex-col h-96 items-center gap-4 justify-start">
  <ExampleComponents.Programatic />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Programatic.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown with checkbox</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Checkbox />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Checkbox.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Background hover</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.CheckboxBackground />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CheckboxBackground.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Helper text</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.CheckboxHelper />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CheckboxHelper.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown with radio</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Radio />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Radio.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Background hover</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.RadioBackground />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/RadioBackground.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Helper text</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.RadioHelper />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/RadioHelper.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown with toggle switch</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Toggle />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Toggle.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown navbar</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Navbar />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Navbar.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown with scrolling</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Scrolling />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Scrolling.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dropdown with search</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Search />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Search.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Menu icon</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Menu />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Menu.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Notification bell</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Notification />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Notification.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>User avatar</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.User />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/User.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Avatar with name</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Avatar />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Avatar.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Sizes />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Sizes.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Placement</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Placement />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Placement.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Double placement</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Double />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Double.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Transition</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Transition />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Transition.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Events</H2>
<CodeWrapper innerClass="flex justify-center items-start h-64">
  <ExampleComponents.Events />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Events.svelte"] as string} />
  {/snippet}
</CodeWrapper>
