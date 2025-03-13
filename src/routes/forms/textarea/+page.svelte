<script lang="ts">
	import { type Component } from 'svelte';
	import { Label, uiHelpers, Radio, Textarea, Button, Helper, type TextareaProps } from '$lib';
	import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import {
		isGeneratedCodeOverflow,
		isSvelteOverflow,
		getExampleFileName
	} from '../../utils/helpers';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'forms/textarea';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;

	const exampleArr = [
		// { name: 'Default', component: ExampleComponents.Default },
		{ name: 'Wysiwyg editor', component: ExampleComponents.WysiwygEditor },
		{ name: 'Comment box', component: ExampleComponents.CommentBox },
		{ name: 'Chatroom input', component: ExampleComponents.ChatroomInput }
	];
	let selectedExample: string | number = $state(exampleArr[0].name);
	let svelteCode = $derived(getExampleFileName(selectedExample, exampleArr));

	function findObject(arr: { name: string; component: Component }[], name: string) {
		const matchingObject = arr.find((obj) => obj.name === name);
		return matchingObject ? matchingObject.component : null;
	}
	const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
	// end of dynamic svelte component

	// props
	let value = $state('');
	const changeValue = () => {
		value =
			value !== ''
				? ''
				: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
	};
	let disabled: TextareaProps['disabled'] = $state(false);
	const changeDisabled = () => {
		disabled = !disabled;
	};
	let required: TextareaProps['required'] = $state(false);
	const changeRequired = () => {
		required = !required;
	};
	let placeholder: TextareaProps['placeholder'] = $state('');
	const changePlaceholder = () => {
		placeholder = placeholder !== '' ? '' : 'Your message';
		value =
			placeholder !== ''
				? ''
				: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
	};
	let rows: TextareaProps['rows'] = $state();
	const changeRows = () => {
		rows = rows !== undefined ? undefined : 5;
	};
	let maxlength: TextareaProps['maxlength'] = $state();
	const changeMaxlength = () => {
		maxlength = maxlength !== undefined ? undefined : 20;
		value =
			maxlength === 20
				? ''
				: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
	};
	let textAreaClass: TextareaProps['class'] = $state('');
	const changeClass = () => {
		textAreaClass = textAreaClass === '' ? 'w-48' : '';
	};
	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (required) props.push(`required`);
			if (placeholder) props.push(`placeholder="${placeholder}"`);
			if (rows !== undefined) props.push(`rows="${rows}"`);
			if (maxlength) props.push(`maxlength="${maxlength}"`);
			if (textAreaClass) props.push(`class="${textAreaClass}"`);
			if (disabled) props.push(`disabled`);
			if (value) props.push(`value="${value}"`);

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Textarea${propsString} />`;
		})()
	);
	// end of code generator

	// for interactive builder
	let builder = uiHelpers();
	let builderExpand = $state(false);
	let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
	const handleBuilderExpandClick = () => {
		builderExpand = !builderExpand;
	};
	// for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the svelteCode content.

	// for examples DynamicCodeBlockHighlight
	let codeBlock = uiHelpers();
	let exampleExpand = $state(false);
	let showExpandButton = $derived(isSvelteOverflow(svelteCode, exampleModules));
	const handleExpandClick = () => {
		exampleExpand = !exampleExpand;
	};
	// end of DynamicCodeBlock setup
	$effect(() => {
		exampleExpand = codeBlock.isOpen;
		builderExpand = builder.isOpen;
	});
</script>

<H1>Textarea</H1>

<H2>Interactive Textarea Bilder</H2>

<CodeWrapper>
	<div class="mb-4 h-64">
		<Label for="textarea-id" class="mb-2">
			Your message {#if required}
				<Helper color="red" class="inline">* Required</Helper>
			{/if}
		</Label>
		<Textarea
			id="textarea-id"
			name="message"
			{value}
			{required}
			{rows}
			{maxlength}
			{placeholder}
			divClass={textAreaClass}
			{disabled}
		/>
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-48" color="blue" onclick={changeRequired}
			>{required ? 'Remove required' : 'Add required'}</Button
		>
		<Button class="w-48" color="red" onclick={changePlaceholder}
			>{placeholder ? 'Remove placeholder' : 'Add placeholder'}</Button
		>
		<Button class="w-48" color="yellow" onclick={changeRows}
			>{rows !== undefined ? 'Remove rows' : 'Add rows'}</Button
		>
		<Button class="w-48" color="green" onclick={changeMaxlength}
			>{maxlength ? 'Remove maxlength' : 'Add maxlength'}</Button
		>
		<Button class="w-48" color="pink" onclick={changeClass}
			>{textAreaClass !== '' ? 'Remove class' : 'Add class'}</Button
		>
		<Button class="w-48" color="purple" onclick={changeDisabled}
			>{disabled ? 'Remove disabled' : 'Add disabled'}</Button
		>
		<Button class="w-48" color="orange" onclick={changeValue}
			>{value ? 'Remove value' : 'Add value'}</Button
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

<H2>Examples</H2>

<CodeWrapper>
	<div class="mb-12 flex flex-wrap">
		<Label class="mb-4 w-full font-bold">Example</Label>
		{#each exampleArr as style}
			<Radio
				labelClass="w-40 my-1"
				onclick={() => (exampleExpand = false)}
				name="block_style"
				bind:group={selectedExample}
				value={style.name}>{style.name}</Radio
			>
		{/each}
	</div>
	<SelectedComponent />
	{#snippet codeblock()}
		<DynamicCodeBlockHighlight
			replaceLib
			{handleExpandClick}
			expand={exampleExpand}
			{showExpandButton}
			code={exampleModules[`./examples/${svelteCode}`] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
