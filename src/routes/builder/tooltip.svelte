<script lang="ts">
	import {
		Button,
		Tooltip,
		tooltip,
		Radio,
		Label,
		uiHelpers,
		type TooltipProps
	} from '$lib';
  import type { RadioColorType } from './types'
  import type { Placement } from "@floating-ui/dom";
	import HighlightCompo from './utils/HighlightCompo.svelte';
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import H2 from './utils/H2.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
	import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Tooltip builder"
	let description = "A quick way to create Tooltip component"
	let title = "Tooltip builder"
	let dir = "builder"

	// for interactive code builder
	// const position: Placement = Object.keys(tooltip.variants.position);
  const placements: Placement[] = [
    "top", 
    "right", 
    "bottom", 
    "left", 
    "top-start", 
    "top-end", 
    "right-start", 
    "right-end", 
    "bottom-start", 
    "bottom-end", 
    "left-start", 
    "left-end"
  ];
	let placement: Placement = $state('top');
	const colors = Object.keys(tooltip.variants.color) as TooltipProps['color'][];
	let color: TooltipProps['color'] = $state('default');
	let tooltipClass: TooltipProps['class'] = $state('');
	const changeClass = () => {
		tooltipClass = tooltipClass === '' ? 'p-4' : '';
	};
	let arrow = $state(true);
	const changeArrow = () => {
		arrow = !arrow;
	};
	let offset = $state(6);

	function increaseOffset() {
		offset += 2;
	}

	function decreaseOffset() {
		if (offset > 0) {
			offset -= 2;
		}
	}

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (arrow !== true) props.push(`arrow="${arrow}"`);
			if (color) props.push(`color="${color}"`);
			if (placement !== 'top') props.push(`placement="${placement}"`);
			if (offset) props.push(`offset={${offset}}`);
			if (tooltipClass !== '') props.push(`class="${tooltipClass}"`);

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Button id="type-1" class="m-8">Tooltip trigger</Button>\n<Tooltip${propsString}  triggeredBy="#type-1">Tooltip content</Tooltip>`;
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
<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Tooltip Builder</H1>

<CodeWrapper>
	<div class="my-4 flex justify-center">
		<Button id="type-1" class="m-8">Tooltip trigger</Button>
		<Tooltip triggeredBy="#type-1" {color} {placement} {arrow} {offset} class={tooltipClass}
			>Tooltip content</Tooltip
		>
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Color</Label>
		{#each colors as colorOption}
			<Radio
				class="w-24 my-1"
				name="color"
				bind:group={color}
				color={colorOption as RadioColorType}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Position</Label>
		{#each placements as option}
			<Radio
				class="w-20 my-1"
				name="interactive_toast_position"
				bind:group={placement}
				value={option}>{option}</Radio
			>
		{/each}
	</div>
	<div class="mb-4">
		<Button onclick={decreaseOffset} class="rounded border p-1">-</Button>
		<span class="mx-2">Offset: {offset}px</span>
		<Button onclick={increaseOffset} class="rounded border p-1">+</Button>
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-36" onclick={changeClass}>{tooltipClass ? 'Remove class' : 'Add class'}</Button
		>
		<Button class="w-36" color="secondary" onclick={changeArrow}
			>{arrow ? 'Remove arrow' : 'Add arrow'}</Button
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
