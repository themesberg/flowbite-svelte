<script lang="ts">
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'bottom-navigation';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<H1>Bottom navigation</H1>

<H2>Default</H2>
<CodeWrapper>
	<ExampleComponents.Default />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Animated icons</H2>
<CodeWrapper>
	<ExampleComponents.AnimatedIcons />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/AnimatedIcons.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Link and active class</H2>
<CodeWrapper>
	<ExampleComponents.LinkAndActiveClass />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/LinkAndActiveClass.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Overwriting active class</H2>
<CodeWrapper>
	<ExampleComponents.OverwritingActiveClass />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/OverwritingActiveClass.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Icon color</H2>
<CodeWrapper>
	<ExampleComponents.IconColor />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/IconColor.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Border</H2>
<CodeWrapper>
	<ExampleComponents.Border />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Border.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Application bar</H2>
<CodeWrapper>
	<ExampleComponents.ApplicationBar />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ApplicationBar.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Pagination</H2>
<CodeWrapper>
	<ExampleComponents.Pagination />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Pagination.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Button group</H2>
<CodeWrapper>
	<ExampleComponents.ButtonGroup />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ButtonGroup.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Card</H2>
<CodeWrapper>
	<ExampleComponents.Card />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Card.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
