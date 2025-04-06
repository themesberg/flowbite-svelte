<script lang="ts">
	import {
		Blockquote,
		blockquote,
		Label,
		Radio,
		Button,
		Input,
		CloseButton,
		uiHelpers,
		type BlockquoteProps
	} from '$lib';
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
  import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Blockquote builder"
	let description = "A quick way to create Blockquote component"
	let title = "Blockquote builder"
	let dir = "builder"

	let {
		text = $bindable(
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!'
		)
	} = $props();

	const sizes = Object.keys(blockquote.variants.size);
	let selectedSize: BlockquoteProps['size'] = $state('lg');

	const alignments = Object.keys(blockquote.variants.alignment);
	let selectedAlignment: BlockquoteProps['alignment'] = $state('left');
	let border = $state(false);
	const changeBorder = () => {
		border = !border;
	};
	let italic = $state(false);
	const changeItalic = () => {
		italic = !italic;
	};
	let bg = $state(false);
	const changeBg = () => {
		bg = !bg;
	};
	let blockClass: BlockquoteProps['class'] = $state('p-8');
	const changeClass = () => {
		blockClass = blockClass === 'p-8' ? 'p-4' : 'p-8';
	};

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (bg) props.push(' bg');
			if (border) props.push(' border');
			if (italic) props.push(' italic');
			if (selectedAlignment !== 'left') props.push(` alignment="${selectedAlignment}"`);
			// blockClass
			if (blockClass) props.push(` class="${blockClass}"`);
			if (selectedSize !== 'lg') props.push(` size="${selectedSize}"`);
			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Blockquote${propsString}>
  ${text}
</Blockquote>`;
		})()
	);

	// for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the svelteCode content.
	let codeBlock = uiHelpers();
	let expand = $state(false);
	
	$effect(() => {
		expand = codeBlock.isOpen;
	});
	// end of DynamicCodeBlock setup
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

<H1>Blockquote Bilder</H1>
<CodeWrapper>
	<Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-8 pr-12">
		{#snippet right()}
			<CloseButton onclick={() => (text = '')} />
		{/snippet}
	</Input>
	<div class="mb-4 h-[300px] overflow-y-auto md:h-[250px]">
		<Blockquote
			{border}
			{italic}
			size={selectedSize}
			{bg}
			alignment={selectedAlignment}
			class={blockClass}>{text}</Blockquote
		>
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each sizes as size}
			<Radio class="w-16 my-1" name="block_size" bind:group={selectedSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Alignment</Label>
		{#each alignments as alignment}
			<Radio
				class="w-16 my-1"
				name="block_alignment"
				bind:group={selectedAlignment}
				value={alignment}>{alignment}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-40" color="blue" onclick={changeBorder}
			>{border ? 'Remove border' : 'Add border'}</Button
		>
		<Button class="w-40" color="rose" onclick={changeItalic}
			>{italic ? 'Remove italic' : 'Add italic'}</Button
		>
		<Button class="w-40" color="indigo" onclick={changeBg}>{bg ? 'Remove bg' : 'Add bg'}</Button>
		<Button class="w-40" color="sky" onclick={changeClass}
			>{blockClass === 'p-8' ? 'class: p-4' : 'class: p-8'}</Button
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

