<script lang="ts">
	import HighlightCompo from '../../../utils/api-check/HighlightCompo.svelte';
	import CodeWrapper from '../../../utils/api-check/CodeWrapper.svelte';
	import H1 from '../../../utils/api-check/H1.svelte';
	import H2 from '../../../utils/api-check/H2.svelte';

	import * as ExampleComponents from './examples/';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<H1>Carousel</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Date Range Selection </H2>
<CodeWrapper>
  <ExampleComponents.Range />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Range.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Inline Datepicker</H2>
<CodeWrapper>
  <ExampleComponents.Inline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Inline.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Color and classes</H2>
<CodeWrapper>
  <ExampleComponents.Color />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Color.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Localization</H2>
<CodeWrapper>
  <ExampleComponents.Localization />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Localization.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Custom Date Format</H2>
<CodeWrapper>
  <ExampleComponents.Format />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Format.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Action Buttons</H2>
<CodeWrapper>
  <ExampleComponents.Action />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Action.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Custom Title</H2>
<CodeWrapper>
  <ExampleComponents.Title />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Title.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Disabled State</H2>
<CodeWrapper>
  <ExampleComponents.Disabled />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Disabled.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Required Field</H2>
<CodeWrapper>
  <ExampleComponents.Required />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Required.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Custom First Day of Week</H2>
<CodeWrapper>
  <ExampleComponents.First />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/First.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Event Handling</H2>
<CodeWrapper>
  <ExampleComponents.Event />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Event.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Restricting the selectable date range</H2>
<CodeWrapper>
  <ExampleComponents.Restricting />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Restricting.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Local translation</H2>
<CodeWrapper>
  <ExampleComponents.Local />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Local.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Accessing Datepicker Element with elementRef</H2>
<CodeWrapper>
  <ExampleComponents.ElementRef />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/ElementRef.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Usage & Localization</H2>
<CodeWrapper>
  <ExampleComponents.Usage />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Usage.svelte'] as string} />
	{/snippet}
</CodeWrapper>
