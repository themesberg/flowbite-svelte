<script lang="ts">
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'kbd';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<H1>KBD (Keyboard)</H1>

<H2>Default</H2>
<CodeWrapper>
	<ExampleComponents.Default />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Letter keys</H2>
<CodeWrapper>
	<ExampleComponents.LetterKeys />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/LetterKeys.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Inside text</H2>
<CodeWrapper>
	<ExampleComponents.InsideText />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/InsideText.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Inside table</H2>
<CodeWrapper>
	<ExampleComponents.InsideTable />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/InsideTable.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Arrow keys</H2>
<CodeWrapper>
	<ExampleComponents.ArrowKeys />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/ArrowKeys.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
