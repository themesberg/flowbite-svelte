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

<H1>Bottom Navigation</H1>

<H2>Default</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Adding links and active class</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Links />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Links.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Active class</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.ActiveLink />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/ActiveLink.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Icon color</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.IconColor />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/IconColor.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Menu items with border </H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Border />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Border.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Application bar example</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Application />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Application.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Example with pagination</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Pagination />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Pagination.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Button group bottom bar</H2>
<CodeWrapper innerClass="relative">
  <ExampleComponents.Bottom />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Bottom.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Card with bottom bar</H2>
<CodeWrapper innerClass="flex justify-center">
  <ExampleComponents.Card />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Card.svelte'] as string} />
	{/snippet}
</CodeWrapper>