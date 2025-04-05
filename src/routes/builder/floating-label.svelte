<script lang="ts">
	import {
		FloatingLabelInput,
		Helper,
		Label,
		Radio,
		Toggle,
		floatingLabelInput,
		Button,
		type FloatingLabelInputProps,
		type HelperProps
	} from '$lib';
  import type { RadioColorType } from './types'
	import HighlightCompo from './utils/HighlightCompo.svelte';
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import H2 from './utils/H2.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
	import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Floating label builder"
	let description = "A quick way to create Floating label component"
	let title = "Floating label builder"
	let dir = "builder"

	const inputStyles = ['standard', 'filled', 'outlined'];
	let inputStyle: FloatingLabelInputProps['variant'] = $state('standard');
	let floatingSize: FloatingLabelInputProps['size'] = $state('default');
	const colors = Object.keys(floatingLabelInput.variants.color);
	let floatingColor: FloatingLabelInputProps['color'] = $state('default');
	let helperColor: FloatingLabelInputProps['color'] = $state('default');
	let disabled = $state(false);
	const changeDisabled = () => {
		disabled = !disabled;
	};
	let helperSlot = $state(false);
	const changeHelperSlot = () => {
		helperSlot = !helperSlot;
		helperColor = 'default';
	};

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (floatingColor !== 'default') props.push(` color="${floatingColor}"`);
			if (disabled) props.push(' disabled');
			if (inputStyle !== 'standard') props.push(` inputStyle="${inputStyle}"`);
			if (floatingSize !== 'default') props.push(` size="${floatingSize}"`);

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			let helperCode = '';
			if (helperSlot) {
				helperCode = `
<Helper class="pt-2" color="${helperColor}">
  Helper text
</Helper>`;
			}
			return `<FloatingLabelInput ${propsString}>
  Floating label
</FloatingLabelInput>${helperCode}`;
		})()
	);

	// for interactive builder
	let builderExpand = $state(false);
	let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
	const handleBuilderExpandClick = () => {
		builderExpand = !builderExpand;
	};
</script>
<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Floating label builder</H1>

<CodeWrapper>
	<div class="mb-4 md:h-20">
		<FloatingLabelInput
      variant={inputStyle}
			{disabled}
			size={floatingSize}
			color={floatingColor}
			id="floating_filled"
			type="text">Floating {inputStyle}</FloatingLabelInput
		>
		{#if helperSlot}
			<Helper class="pt-2" color={helperColor as HelperProps['color']}>
				Remember, contributions to this topic should follow our <a href="/">Community Guidelines</a>
				.
			</Helper>
		{/if}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Style</Label>
		{#each inputStyles as option}
			<Radio labelClass="w-24 my-1" name="style1" bind:group={inputStyle} value={option}
				>{option}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Color</Label>
		{#each colors as colorOption}
			<Radio
				labelClass="w-24 my-1"
				name="floating_color"
				bind:group={floatingColor}
				color={colorOption as RadioColorType}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Button class="mb-4 w-48" color="secondary" onclick={changeHelperSlot}
			>{helperSlot ? 'Remove helper slot' : 'Add helper slot'}</Button
		>
		<Label class="mb-4 w-full font-bold">Helper Color</Label>
		{#each colors as colorOption}
			<Radio
				labelClass="w-24 my-1 {helperSlot ? '' : 'opacity-30 cursor-not-allowed'}"
				disabled={helperSlot ? false : true}
				name="helper_color"
				bind:group={helperColor}
				color={colorOption as RadioColorType}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size</Label>
		<Toggle
			onclick={() => {
				floatingSize = floatingSize === 'default' ? 'small' : 'default';
			}}
		>
			{#snippet offLabel()}
				<span class="me-4">Default</span>
			{/snippet}
			Small
		</Toggle>
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-48" onclick={changeDisabled}
			>{disabled ? 'Remove disabled' : 'Add disabled'}</Button
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
