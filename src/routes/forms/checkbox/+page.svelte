<script lang="ts">
	import {
		Checkbox,
		checkbox,
		Helper,
		Label,
		Radio,
		Button,
		uiHelpers,
		type RadioColorType,
		type CheckboxProps
	} from '$lib';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import { isGeneratedCodeOverflow } from '../../utils/helpers';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'forms/checkbox';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;

	const colors = Object.keys(checkbox.variants.color);
	let checkboxColor: CheckboxProps['color'] = $state('primary');

	// const checkedStates = [ 'false', 'true', 'indeterminate' ];
	let checkedState = $state(false);
	const changeCheckedState = () => {
		checkedState = !checkedState;
		indeterminateState = false;
	};
	let indeterminateState = $state(false);
	const changeIntermidiateState = () => {
		indeterminateState = !indeterminateState;
		checkedState = false;
	};
	let disabledState = $state(false);
	const changeDisabledState = () => {
		disabledState = !disabledState;
	};
	let helperState = $state(false);
	const changeHelperState = () => {
		helperState = !helperState;
	};

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (checkedState) props.push(' checked');
			if (indeterminateState) props.push(' indeterminate');
			if (disabledState) props.push(' disabled');

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Checkbox${propsString}>My Checkbox</Checkbox>
${helperState ? `<Helper class="ps-6">Helper text</Helper>` : ''}`;
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

<H1>Checkbox</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Checkbox Builder</H2>
<CodeWrapper>
	<div class="md:h-8">
		<Checkbox
			checked={checkedState}
			indeterminate={indeterminateState}
			color={checkboxColor}
			disabled={disabledState}
		>
			{#if disabledState}This is disabled{:else}Default checkbox{/if}
		</Checkbox>
		{#if helperState}
			<Helper id="helper-checkbox-text" class="ps-6"
				>For orders shipped from $25 in books or $29 in other categories</Helper
			>
		{/if}
	</div>
	<div class="mt-4 mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Color</Label>
		{#each colors as colorOption}
			<Radio
				labelClass="w-24 my-1"
				name="checkbox_color"
				bind:group={checkboxColor}
				color={colorOption as RadioColorType}
				onchange={() => (checkedState = true)}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-48" color="primary" onclick={changeCheckedState}
			>{checkedState ? 'Remove checked' : 'Add checked'}</Button
		>
		<Button class="w-48" color="secondary" onclick={changeIntermidiateState}
			>{indeterminateState ? 'Remove indeterminate' : 'Add indeterminate'}</Button
		>
		<Button class="w-48" color="pink" onclick={changeDisabledState}
			>{disabledState ? 'Remove disabled' : 'Add disabled'}</Button
		>
		<Button class="w-48" color="lime" onclick={changeHelperState}
			>{helperState ? 'Remove helper' : 'Add helper'}</Button
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

<H2>Bordered</H2>
<CodeWrapper>
	<ExampleComponents.Bordered />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Bordered.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Button</H2>
<CodeWrapper>
	<ExampleComponents.Button />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Button.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Dropdown</H2>
<CodeWrapper>
	<ExampleComponents.Dropdown />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Dropdown.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Group variable</H2>
<CodeWrapper>
	<ExampleComponents.GroupVariable />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/GroupVariable.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Horizontal list</H2>
<CodeWrapper>
	<ExampleComponents.HorizontalList />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/HorizontalList.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Inline layout</H2>
<CodeWrapper>
	<ExampleComponents.InlineLayout />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/InlineLayout.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Link</H2>
<CodeWrapper>
	<ExampleComponents.Link />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Link.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>List group</H2>
<CodeWrapper>
	<ExampleComponents.ListGroup />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/ListGroup.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Table</H2>
<CodeWrapper>
	<ExampleComponents.Table />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Table.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Advanced</H2>
<CodeWrapper>
	<ExampleComponents.Advanced />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Advanced.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
