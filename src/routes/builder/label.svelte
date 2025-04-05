<script lang="ts">
	import { Label, label, Radio, uiHelpers } from '$lib';
  import type { ColorName } from './types'
	import HighlightCompo from './utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import H2 from './utils/H2.svelte';
	import { capitalizeFirstLetter } from './utils/helpers';
  import { isGeneratedCodeOverflow } from './utils/helpers';
  import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Label builder"
	let description = "A quick way to create Label component"
	let title = "Label builder"
	let dir = "builder"
	
	const colors = Object.keys(label.variants.color);
	let labelColor: ColorName = $state('gray');
	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (labelColor !== 'gray') props.push(` color="${labelColor}"`);

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Label${propsString}>Label</Label>`;
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

<H1>Label Builder</H1>
<CodeWrapper>
	<Label class="text-lg font-bold" color={labelColor}>{capitalizeFirstLetter(labelColor)}</Label>
	<div class="flex flex-wrap space-x-2">
		<Label class="m-4 w-full font-bold">Color</Label>
		{#each colors as colorOption}
			<Radio
				class="w-24 my-1"
				name="default_alert_color"
				bind:group={labelColor}
				color={colorOption as ColorName}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
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
