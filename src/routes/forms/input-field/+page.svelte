<script lang="ts">
	import {
		Input,
		input,
		Radio,
		Label,
		Helper,
		Button,
		CloseButton,
		uiHelpers,
		type InputProps,
		type RadioColorType,
		type HelperProps,
		type LabelProps
	} from '$lib';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import { isGeneratedCodeOverflow } from '../../utils/helpers';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	let { text = $bindable('') } = $props();
	const dirName = 'forms/input';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;

	const sizes = ['sm', 'md', 'lg'];
	let inputSize: InputProps['size'] = $state('md');

	const colors = Object.keys(input.variants.color);
	let inputColor: InputProps['color'] = $state('default');
	let disabled = $state(false);
	const changeDisabled = () => {
		disabled = !disabled;
	};
	let helperColor: InputProps['color'] = $state('default');
	let helperSlot = $state(false);
	const changeHelperSlot = () => {
		helperSlot = !helperSlot;
		helperColor = 'default';
	};
	let closeBtnStatus = $state(false);
	const changeCloseBtnStatus = () => {
		closeBtnStatus = !closeBtnStatus;
	};

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (inputColor !== 'default') props.push(` color="${inputColor}"`);
			if (disabled) props.push(' disabled');
			if (inputSize !== 'md') props.push(` size="${inputSize}"`);

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Input${propsString}${
				closeBtnStatus
					? `>\n{#snippet right()}
  <CloseButton onclick={() => (text = '')} />
{/snippet}`
					: '/>'
			}
${closeBtnStatus ? `</Input>` : ''}${helperSlot ? `<Helper class="ps-6" color="${helperColor}">Helper text</Helper>` : ''}`;
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

<H1>Input field</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Input Builder</H2>

<CodeWrapper>
	<div class="mb-4 md:h-24">
		<Label for="color-example" color={inputColor as LabelProps['color']} class="mb-2 block"
			>Your name</Label
		>
		<Input
			id="color-example"
			bind:value={text}
			{disabled}
			color={inputColor}
			size={inputSize}
			placeholder={disabled ? 'Disabled ' : 'Placeholder'}
		>
			{#snippet right()}
				{#if closeBtnStatus}
					<CloseButton onclick={() => (text = '')} />
				{/if}
			{/snippet}
		</Input>
		{#if helperSlot}
			<Helper class="mt-2" color={helperColor as HelperProps['color']}>
				<span class="font-medium">Well done!</span>
				Some helper message.
			</Helper>
		{/if}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Color</Label>
		{#each colors as colorOption}
			<Radio
				labelClass="w-20 my-1"
				name="input_color"
				bind:group={inputColor}
				color={colorOption as RadioColorType}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each sizes as option}
			<Radio labelClass="w-20 my-1" name="input_size" bind:group={inputSize} value={option}
				>{option}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Button class="mb-4 w-40" color="secondary" onclick={changeHelperSlot}
			>{helperSlot ? 'Remove helper' : 'Add helper'}</Button
		>
		<Label class="mb-4 w-full font-bold">Helper Color</Label>
		{#each colors as colorOption}
			<Radio
				labelClass="w-20 my-1 {helperSlot ? '' : 'opacity-30 cursor-not-allowed'}"
				disabled={helperSlot ? false : true}
				name="helper_color"
				bind:group={helperColor}
				color={colorOption as RadioColorType}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-44" onclick={changeDisabled}
			>{disabled ? 'Remove disabled' : 'Add disabled'}</Button
		>
		<Button class="w-44" color="secondary" onclick={changeCloseBtnStatus}
			>{closeBtnStatus ? 'Remove close button' : 'Add close button'}</Button
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

<H2>Click handler</H2>
<CodeWrapper>
	<ExampleComponents.ClickHandler />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ClickHandler.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Dropdown</H2>
<CodeWrapper>
	<ExampleComponents.Dropdown />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Dropdown.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Form</H2>
<CodeWrapper>
	<ExampleComponents.Form />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Form.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Group</H2>
<CodeWrapper>
	<ExampleComponents.Group />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Group.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Icon</H2>
<CodeWrapper>
	<ExampleComponents.Icon />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Icon.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Number</H2>
<CodeWrapper>
	<ExampleComponents.Number />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Number.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Search</H2>
<CodeWrapper>
	<ExampleComponents.Search />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Search.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Clearable</H2>
<CodeWrapper>
	<ExampleComponents.Clearable />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Clearable.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Advanced usage</H2>
<CodeWrapper>
	<ExampleComponents.AdvancedUsage />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/AdvancedUsage.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
