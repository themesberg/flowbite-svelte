<script lang="ts">
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'timeline';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<H1>Timeline</H1>

<H2>Default timeline</H2>
<CodeWrapper>
	<ExampleComponents.DefaultTimeline />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/DefaultTimeline.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Date format</H2>
<CodeWrapper>
	<ExampleComponents.DateFormat />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/DateFormat.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Vertical timeline</H2>
<CodeWrapper>
	<ExampleComponents.VerticalTimeline />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/VerticalTimeline.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Horizontal timeline</H2>
<CodeWrapper>
	<ExampleComponents.HorizontalTimeline />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/HorizontalTimeline.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Activity log</H2>
<CodeWrapper>
	<ExampleComponents.ActivityLog />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ActivityLog.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Grouped timeline</H2>
<CodeWrapper>
	<ExampleComponents.GroupedTimeline />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/GroupedTimeline.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
