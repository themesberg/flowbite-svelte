<script lang="ts">
	import {
		Progressbar,
		progressbar,
		Button,
		Label,
		Radio,
    uiHelpers,
		type ProgressbarProps
	} from '$lib';
  import type { RadioColorType } from './types'
	import { sineOut } from 'svelte/easing';
	import HighlightCompo from './utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
  import { isGeneratedCodeOverflow } from './utils/helpers';
	import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Progress builder"
	let description = "A quick way to create Progress component"
	let title = "Progress builder"
	let dir = "builder"
	
	let progress = $state('45');
	const progressSizes = [
		{ size: 'h-4', class: '' },
		{ size: 'h-6', class: 'p-2' },
		{ size: 'h-8', class: 'p-3' },
		{ size: 'h-10', class: 'p-4' }
	];

	function updateProgressSize(selectedSize: string): void {
		const newSize = progressSizes.find((size) => size.size === selectedSize);
		if (newSize) {
			progressSize = newSize;
		}
	}

	let progressSize = $state(progressSizes[0]);

	// const sizes = [ 'h-4 ', 'h-6', 'h-8', 'h-10'];
	// let progressSize = $state('h-4');
	const colors = Object.keys(progressbar.variants.color);
	let progressColor: ProgressbarProps['color'] = $state('primary');
	let labelInside = $state(false);
	const changeLabelInside = () => {
		labelInside = !labelInside;
	};
	let { labelContent = $bindable('Svelte-5-Ui-Lib') } = $props();
	const changeLabelContent = () => {
		labelContent = labelContent === 'Svelte-5-Ui-Lib' ? '' : 'Svelte-5-Ui-Lib';
	};
	let animation = $state(false);
	let tweenDuration: number | undefined = $state();
	let easing: typeof sineOut | undefined = $state();
	const changeAnimation = () => {
		animation = !animation;
		if (animation) {
			tweenDuration = 1500;
			easing = sineOut;
		} else {
			tweenDuration = undefined;
			easing = undefined;
		}
	};

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			// progress
			props.push(` progress="${progress}"`);
			if (progressColor !== 'primary') props.push(` color="${progressColor}"`);
			if (labelInside) props.push(' labelInside');
			if (labelContent !== '') props.push(` labelOutside="${labelContent}"`);
			if (progressSize.size !== 'h-4') props.push(` size="${progressSize.size}"`);
			// Add div2Class prop if not empty
			if (progressSize.class !== '') {
				props.push(` div2Class="${progressSize.class}"`);
			}
			if (animation) {
				props.push(' animate');
				props.push(' precision={0}');
				props.push(' tweenDuration={1500}');
				props.push(' easing={sineOut}');
			}

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Progressbar${propsString} />`;
		})()
	);
  // for interactive builder
	let builder = uiHelpers();
	let builderExpand = $state(false);
	let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
	const handleBuilderExpandClick = () => {
		builderExpand = !builderExpand;
	};

	// end of DynamicCodeBlock setup
	$effect(() => {
		builderExpand = builder.isOpen;
	});

</script>
<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Progressbar Builder</H1>
<CodeWrapper>
	<div class="my-4 h-16">
		{#if animation}
			<Progressbar
				{progress}
				size={progressSize.size}
				color={progressColor}
				labelOutside={labelContent}
				{labelInside}
				div2Class={progressSize.class}
				animate
				{tweenDuration}
				{easing}
			/>
		{:else}
			<Progressbar
				{progress}
				size={progressSize.size}
				color={progressColor}
				labelOutside={labelContent}
				{labelInside}
				div2Class={progressSize.class}
			/>
		{/if}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each progressSizes as size}
			<Radio
				class="w-24 my-1"
				name="progress_size"
				bind:group={progressSize.size}
				value={size.size}
				onchange={() => updateProgressSize(size.size)}>{size.size}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Color</Label>
		{#each colors as color}
			<Radio
				class="w-24 my-1"
				name="interactive_progress_color"
				bind:group={progressColor}
				color={color as RadioColorType}
				value={color}>{color}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-48" onclick={changeLabelContent}
			>{labelContent ? 'Remove outlise label' : 'Add outside label'}</Button
		>
		<Button class="w-48" color="purple" onclick={changeLabelInside}
			>{labelInside ? 'Remove inside label' : 'Add inside label'}</Button
		>
		<Button class="w-48" color="red" onclick={changeAnimation}
			>{animation ? 'No animation' : 'Animation'}</Button
		>
		<Button
			class="w-48"
			color="emerald"
			onclick={() => (progress = `${Math.round(Math.random() * 100)}`)}>Randomize</Button
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
