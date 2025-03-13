<script lang="ts">
	import {
		Table,
		table,
		uiHelpers,
		Label,
		Radio,
		Button,
		type RadioColorType,
		type TableProps
	} from '$lib';
	import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import { isGeneratedCodeOverflow } from '../../utils/helpers';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'table';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;

	let color: TableProps['color'] = $state('default');
	const colors = Object.keys(table.variants.color);
	let striped = $state(false);
	const changeStriped = () => {
		striped = !striped;
	};
	let hoverable = $state(false);
	const changeHoverable = () => {
		hoverable = !hoverable;
	};
	// noborder, shadow,
	let noborder = $state(false);
	const changeNoborder = () => {
		noborder = !noborder;
	};
	let shadow = $state(false);
	const changeShadow = () => {
		shadow = !shadow;
	};

	const tableItems = [
		{ name: 'Apple MacBook Pro 17"', color: 'Sliver', type: 'Laptop', price: '$2999' },
		{ name: 'Microsoft Surface Pro', color: 'White', type: 'Laptop PC', price: '$1999' },
		{ name: 'Magic Mouse 2', color: 'Black', type: 'Accessories', price: '$99' },
		{ name: 'Google Pixel Phone', color: 'Gray', type: 'Phone', price: '$799' },
		{ name: 'Apple Watch 5', color: 'Red', type: 'Wearables', price: '$999' }
	];

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (color !== 'default') props.push(` color="${color}"`);
			if (striped) props.push(' striped');
			if (hoverable) props.push(' hoverable');
			if (!noborder) props.push(' noborder');
			if (shadow) props.push(' shadow');

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Table {tableItems}${propsString} />`;
		})()
	);
	// for interactive builder
	let builder = uiHelpers();
	let builderExpand = $state(false);
	let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
	const handleBuilderExpandClick = () => {
		builderExpand = !builderExpand;
	};

	$effect(() => {
		builderExpand = builder.isOpen;
	});
</script>

<H1>Table</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Table Builder</H2>
<CodeWrapper>
	<Table {tableItems} {hoverable} {color} {striped} {noborder} {shadow} />
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Color</Label>
		{#each colors as colorOption}
			<Radio
				labelClass="w-24 my-1"
				name="table_color"
				bind:group={color}
				color={colorOption as RadioColorType}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex gap-4">
		<Button class="w-40" onclick={changeStriped}>{striped ? 'Unstriped' : 'Striped'}</Button>
		<Button class="w-40" color="secondary" onclick={changeHoverable}
			>{hoverable ? 'Unhoverable' : 'Hoverable'}</Button
		>
		<Button class="w-40" color="indigo" onclick={changeNoborder}
			>{noborder ? 'Borderless' : 'Border'}</Button
		>
		<Button class="w-40" color="rose" onclick={changeShadow}
			>{shadow ? 'No Shadow' : 'Shadow'}</Button
		>
	</div>
	{#snippet codeblock()}
		<DynamicCodeBlockHighlight
			handleExpandClick={handleBuilderExpandClick}
			expand={builderExpand}
			showExpandButton={showBuilderExpandButton}
			code={generatedCode}
		/>
	{/snippet}
</CodeWrapper>

<H2>Table items</H2>
<CodeWrapper>
	<ExampleComponents.TableItems />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/TableItems.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Head body items</H2>
<CodeWrapper>
	<ExampleComponents.HeadBodyItems />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/HeadBodyItems.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Cells</H2>
<CodeWrapper>
	<ExampleComponents.Cells />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Cells.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Checkbox</H2>
<CodeWrapper>
	<ExampleComponents.Checkbox />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Checkbox.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Search</H2>
<CodeWrapper>
	<ExampleComponents.Search />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Search.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Header slot</H2>
<CodeWrapper>
	<ExampleComponents.HeaderSlot />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/HeaderSlot.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Footer slot</H2>
<CodeWrapper>
	<ExampleComponents.FooterSlot />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/FooterSlot.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Table caption</H2>
<CodeWrapper>
	<ExampleComponents.TableCaption />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/TableCaption.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Overflow</H2>
<CodeWrapper>
	<ExampleComponents.Overflow />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Overflow.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
