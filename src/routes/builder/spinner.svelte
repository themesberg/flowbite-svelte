<script lang="ts">
	import {
		Spinner,
		spinner,
		Button,
		Label,
		Radio,
		uiHelpers,
		type SpinnerProps
	} from '$lib';
  import type { RadioColorType } from './types'
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import HighlightCompo from './utils/HighlightCompo.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import H2 from './utils/H2.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';

	// color, size, class
	const colors: SpinnerProps['color'][] = Object.keys(
		spinner.variants.color
	) as SpinnerProps['color'][];
	let spinnerColor: SpinnerProps['color'] = $state('primary');
	const sizes: SpinnerProps['size'][] = ['4', '5', '6', '8', '10', '12', '16'];
	let spinnerSize: SpinnerProps['size'] = $state('8');
	let spinnerClass: SpinnerProps['class'] = $state('');
	const changeClass = () => {
		spinnerClass = spinnerClass === '' ? 'ml-4' : '';
	};
	const alignments = [
		{ name: 'left', class: 'text-left' },
		{ name: 'center', class: 'text-center' },
		{ name: 'right', class: 'text-right' }
	];

	let selectedAlignment: string | number = $state('left');
	let currentSpinner = $derived(
		alignments.find((t) => t.name === selectedAlignment) || alignments[0]
	);

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (spinnerSize !== '8') props.push(` size="${spinnerSize}"`);
			if (spinnerColor !== 'primary') props.push(` color="${spinnerColor}"`);
			if (spinnerClass !== '') props.push(` class="${spinnerClass}"`);

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			// alignment needs div wrapper
			if (selectedAlignment !== 'left') {
				return `<div class="${currentSpinner.class}">\n  <Spinner${propsString}/>\n</div>`;
			} else {
				return `<Spinner${propsString}/>`;
			}
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

<H1>Spinner Builder</H1>

<CodeWrapper>
	<div class="h-20">
		<div class={currentSpinner.class}>
			<Spinner color={spinnerColor} size={spinnerSize} class={spinnerClass} />
		</div>
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Color</Label>
		{#each colors as color}
			<Radio
				labelClass="w-24 my-1"
				name="spinnercolor"
				bind:group={spinnerColor}
				color={color as RadioColorType}
				value={color}>{color}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each sizes as size}
			<Radio labelClass="w-12 my-1" name="spinnersize" bind:group={spinnerSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Alignment</Label>
		{#each alignments as option}
			<Radio
				labelClass="w-16 my-1"
				name="alignment"
				bind:group={selectedAlignment}
				value={option.name}>{option.name}</Radio
			>
		{/each}
	</div>
	<Button class="w-36" onclick={changeClass}>{spinnerClass ? 'Remove class' : 'Add class'}</Button>
	{#snippet codeblock()}
		<DynamicCodeBlockHighlight
			handleExpandClick={handleBuilderExpandClick}
			expand={builderExpand}
			showExpandButton={showBuilderExpandButton}
			code={generatedCode}
		/>
	{/snippet}
</CodeWrapper>
