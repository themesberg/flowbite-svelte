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

<H1>Breadcrumb</H1>
<H2>Default</H2>
<CodeWrapper>
  <ExampleComponents.Default />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Solid Breadcrumb</H2>
<CodeWrapper>
  <ExampleComponents.Solid />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Solid.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Icons</H2>
<CodeWrapper>
  <ExampleComponents.Icons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Icons.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Class and olClass</H2>
<CodeWrapper>
  <ExampleComponents.Class />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Class.svelte'] as string} />
	{/snippet}
</CodeWrapper>
