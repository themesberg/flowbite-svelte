<script lang="ts">
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'darkmode';
	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});
	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<H1>Darkmode</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Initial theme</H2>

Add the following to `app.html`:

<HighlightCompo code={modules['./md/initialtheme.md'] as string} />

<H2>Default</H2>
<CodeWrapper>
	<ExampleComponents.Default />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper>
	<ExampleComponents.Icon />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Icon.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Style</H2>
<CodeWrapper>
	<ExampleComponents.Style />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Style.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
