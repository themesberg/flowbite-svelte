<script lang="ts">
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'sidebar';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<H1>Sidebar</H1>

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

<H2>Close button</H2>
<CodeWrapper>
	<ExampleComponents.CloseButton />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/CloseButton.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Active class</H2>
<CodeWrapper>
	<ExampleComponents.ActiveClass />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ActiveClass.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Overriding active</H2>
<CodeWrapper>
	<ExampleComponents.OverridingActive />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/OverridingActive.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Using object</H2>
<CodeWrapper>
	<ExampleComponents.UsingObject />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/UsingObject.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Multilevel</H2>
<CodeWrapper>
	<ExampleComponents.Multilevel />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Multilevel.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Single selection</H2>
<CodeWrapper>
	<ExampleComponents.SingleSelection />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/SingleSelection.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>All open</H2>
<CodeWrapper>
	<ExampleComponents.AllOpen />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/AllOpen.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Content separator</H2>
<CodeWrapper>
	<ExampleComponents.ContentSeparator />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ContentSeparator.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper>
	<ExampleComponents.Icon />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Icon.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Cta</H2>
<CodeWrapper>
	<ExampleComponents.Cta />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Cta.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Logo branding</H2>
<CodeWrapper>
	<ExampleComponents.LogoBranding />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/LogoBranding.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Branding with children</H2>
<CodeWrapper>
	<ExampleComponents.BrandingWithChildren />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/BrandingWithChildren.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Dropdown transition</H2>
<CodeWrapper>
	<ExampleComponents.DropdownTransition />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/DropdownTransition.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Static positioning</H2>
<CodeWrapper>
	<ExampleComponents.StaticPositioning />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/StaticPositioning.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
