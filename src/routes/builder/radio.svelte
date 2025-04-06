<script lang="ts">
	import { type Component } from 'svelte';
	import {
		Radio,
		radio,
		Helper,
		Label,
		Button,
		uiHelpers,
		type RadioProps
	} from '$lib';
  import type { RadioColorType } from './types'
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
  import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Radio builder"
	let description = "A quick way to create Radio component"
	let title = "Radio builder"
	let dir = "builder"
	
	// end of dynamic svelte component
	type GroupType = string;
	const colors = Object.keys(radio.variants.color) as RadioProps<GroupType>['color'][];
	let radioColor: RadioProps<GroupType>['color'] = $state('primary');
	// hack for demo purposes
	let demoRadioColor: RadioProps<GroupType>['color'] = $state('primary');
	let isChecked = $state(true);
	const handleOnchange = (colorOption: RadioProps<GroupType>['color']) => {
		demoRadioColor = colorOption;
		isChecked = false;
		isChecked = true;
	};
	// end of hack

	const inputClasses = ['', 'w-6 h-6'];
	let inputClass = $state(inputClasses[0]);
	const changeInputClass = () => {
		inputClass = inputClass === inputClasses[0] ? inputClasses[1] : inputClasses[0];
	};
	const labelClasses = ['w-24 m-2', ''];
	let labelClass = $state(labelClasses[0]);
	const changeLabelClass = () => {
		labelClass = labelClass === labelClasses[0] ? labelClasses[1] : labelClasses[0];
	};
	let disabled = $state(false);
	const changeDisabled = () => {
		disabled = !disabled;
	};
	let helperColor: RadioProps<GroupType>['color'] = $state('primary');
	let helperSlot = $state(false);
	const changeHelperSlot = () => {
		helperSlot = !helperSlot;
		// helperColor = 'gray';
	};

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (radioColor !== 'primary') props.push(`color="${radioColor}"`);
			if (labelClass !== '') props.push(`labelClass="${labelClass}"`);
			if (inputClass !== '') props.push(`inputClass="${inputClass}"`);
			if (disabled) props.push('disabled');
			// if (indeterminateState) props.push(' indeterminate');
			// if (disabledState) props.push(' disabled');

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Radio
  name="my_radio"${propsString}>Item 1</Radio>
${helperSlot ? `<Helper class="ps-6" color="${helperColor}">Helper text</Helper>` : ''}`;
		})()
	);

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

	const handleExpandClick = () => {
		exampleExpand = !exampleExpand;
	};
	// end of DynamicCodeBlock setup
	$effect(() => {
		exampleExpand = codeBlock.isOpen;
		builderExpand = builder.isOpen;
	});
</script>
<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Radio Builder</H1>
<CodeWrapper>
	<div class="mb-4">
		<Radio
			{inputClass}
			class={labelClass}
			name="radio_interactive"
			{disabled}
			color={demoRadioColor}
			checked={isChecked}>Radio</Radio
		>
		{#if helperSlot}
			<Helper id="helper-radio-text" color={helperColor} class="ps-6"
				>For orders shipped from $25 in books or $29 in other categories</Helper
			>
		{/if}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Color</Label>
		{#each colors as colorOption}
			<Radio
				class="w-24 my-1"
				name="radio_color"
				bind:group={radioColor}
				onchange={() => handleOnchange(colorOption)}
				color={colorOption as RadioColorType}
				value={colorOption}>{colorOption}</Radio
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
				class="w-24 my-1 {helperSlot ? '' : 'opacity-30 cursor-not-allowed'}"
				disabled={helperSlot ? false : true}
				name="helper_color"
				bind:group={helperColor}
				color={colorOption as RadioColorType}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-32" color="primary" onclick={changeInputClass}
			>{inputClass === inputClasses[0] ? 'inputClass=w-6 h-6' : 'Default size'}</Button
		>
		<Button class="w-32" color="secondary" onclick={changeLabelClass}
			>{labelClass === labelClasses[0] ? 'Default labelClass' : 'labelClass=w-24 m-2'}</Button
		>
		<Button class="w-32" color="lime" onclick={changeDisabled}
			>{disabled ? 'Enabled' : 'Disabled'}</Button
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
