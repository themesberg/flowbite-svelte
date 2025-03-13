<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, type BreadcrumbProps } from '$lib';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'breadcrumb';

	let navClass: BreadcrumbProps['class'] = $state('');
	const changeNavClass = () => {
		navClass = navClass === '' ? 'border border-red-500 p-2' : '';
	};
	let olClass: BreadcrumbProps['olClass'] = $state('');
	const changeOlClass = () => {
		olClass = olClass === '' ? 'border border-blue-500 p-2' : '';
	};
	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
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

<H2>Solid</H2>
<CodeWrapper>
	<ExampleComponents.Solid />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Solid.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper>
	<ExampleComponents.Icon />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Icon.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>navClass and olClass</H2>

<CodeWrapper innerClass="overflow-x-scroll p-2 sm:p-6">
	<div class="h-20">
		<Breadcrumb {navClass} {olClass}>
			<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/">Projects</BreadcrumbItem>
			<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
		</Breadcrumb>
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-48" onclick={changeNavClass}
			>{navClass ? 'Remove navClass' : 'Add navClass'}</Button
		>
		<Button class="w-48" color="green" onclick={changeOlClass}
			>{olClass ? 'Remove olClass' : 'Add olClass'}</Button
		>
	</div>
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
