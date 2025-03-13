<script lang="ts">
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'rating';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<H1>Rating</H1>

<H2>Default</H2>
<CodeWrapper>
	<ExampleComponents.Default />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Star</H2>
<CodeWrapper>
	<ExampleComponents.Star />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Star.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Text</H2>
<CodeWrapper>
	<ExampleComponents.Text />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Text.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Count</H2>
<CodeWrapper>
	<ExampleComponents.Count />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Count.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper>
	<ExampleComponents.Icon />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Icon.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Custom icon</H2>
<CodeWrapper>
	<ExampleComponents.CustomIcon />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/CustomIcon.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Advanced rating</H2>
<CodeWrapper>
	<ExampleComponents.AdvancedRating />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/AdvancedRating.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Advanced rating and icon</H2>
<CodeWrapper>
	<ExampleComponents.AdvancedRatingAndIcon />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/AdvancedRatingAndIcon.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Score rating</H2>
<CodeWrapper>
	<ExampleComponents.ScoreRating />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ScoreRating.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Rating comment</H2>
<CodeWrapper>
	<ExampleComponents.RatingComment />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/RatingComment.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Review content</H2>
<CodeWrapper>
	<ExampleComponents.ReviewContent />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ReviewContent.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
