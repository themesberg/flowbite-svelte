<script lang="ts">
	import {
		Skeleton,
		skeleton,
		CardPlaceholder,
		ImagePlaceholder,
		imagePlaceholder,
		VideoPlaceholder,
		TextPlaceholder,
		ListPlaceholder,
		Label,
		Radio,
		WidgetPlaceholder,
		Button,
    uiHelpers,
		type SkeletonProps,
		type CardPlaceholderProps,
		type ListPlaceholderProps,
		type TextPlaceholderProps,
		type ImagePlaceholderProps,
		type VideoPlaceholderProps
	} from '$lib';
	import HighlightCompo from './utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import H2 from './utils/H2.svelte';
  import { isGeneratedCodeOverflow } from './utils/helpers';
	import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Skeleton builder"
	let description = "A quick way to create Skeleton component"
	let title = "Skeleton builder"
	let dir = "builder"
	
	// size
	const skeletonSizes = Object.keys(skeleton.variants.size) as SkeletonProps['size'][];
	let skeletonSize: SkeletonProps['size'] = $state('sm');
	const imageSizes = Object.keys(imagePlaceholder.variants.size) as ImagePlaceholderProps['size'][];
	let imagePlaceholderSize: ImagePlaceholderProps['size'] = $state('md');
	let imagePlaceholderRounded: ImagePlaceholderProps['rounded'] = $state('none');
	const videoSizes = skeletonSizes;
	let videoPlaceholderSize: VideoPlaceholderProps['size'] = $state('sm');
	const imageRoundedSizes = Object.keys(
		imagePlaceholder.variants.rounded
	) as ImagePlaceholderProps['rounded'][];
	const textSizes = skeletonSizes;
	let textPlaceholderSize: TextPlaceholderProps['size'] = $state('sm');
	const cardSizes = skeletonSizes;
	let cardPlaceholderSize: CardPlaceholderProps['size'] = $state('sm');
	const listSizes = imageSizes;
	const listRoundedSizes = imageRoundedSizes;
	const listItemNumbers = [1, 2, 3, 4, 5];
	let listPlaceholderSize: ListPlaceholderProps['size'] = $state('md');
	let listPlaceholderRounded: ListPlaceholderProps['rounded'] = $state('none');
	let listPlaceholderItemNumber: ListPlaceholderProps['itemNumber'] = $state(5);
	// class
	let skeletonClass: SkeletonProps['class'] = $state('');
	let imagePlaceholderClass: ImagePlaceholderProps['class'] = $state('');
	let videoPlaceholderClass: VideoPlaceholderProps['class'] = $state('');
	let textPlaceholderClass: TextPlaceholderProps['class'] = $state('');
	let cardPlaceholderClass: CardPlaceholderProps['class'] = $state('');
	let widgetPlaceholderClass: string = $state('');
	let listPlaceholderClass: ListPlaceholderProps['class'] = $state('');
	let TestimonialPlaceholderClass: string = $state('');

	// code generator
	const generatePlaceholderCode = (
		componentName: string,
		size: string,
		classes: string
	): string => {
		let props = [];
		if (componentName === 'Skeleton' && size !== 'sm') props.push(` size="${size}"`);
		if (componentName === 'ImagePlaceholder' && size !== 'md') props.push(` size="${size}"`);
		if (componentName === 'VideoPlaceholder' && size !== 'sm') props.push(` size="${size}"`);
		if (componentName === 'TextPlaceholder' && size !== 'sm') props.push(` size="${size}"`);
		if (componentName === 'CardPlaceholder' && size !== 'sm') props.push(` size="${size}"`);
		if (componentName === 'ListPlaceholder' && size !== 'md') props.push(` size="${size}"`);

		if (classes !== '') props.push(` class="${classes}"`);
		if (componentName === 'ImagePlaceholder' && imagePlaceholderRounded !== 'none')
			props.push(` rounded="${imagePlaceholderRounded}"`);
		if (componentName === 'ListPlaceholder' && listPlaceholderItemNumber !== 5)
			props.push(` itemNumber={${listPlaceholderItemNumber}}`);
		if (componentName === 'ListPlaceholder' && listPlaceholderRounded !== 'none')
			props.push(` rounded="${listPlaceholderRounded}"`);

		return `<${componentName}${props.join('')} />`;
	};
	let generatedCodeSkeleton = $derived(
		generatePlaceholderCode('Skeleton', skeletonSize, skeletonClass)
	);
	let generatedCodeVideo = $derived(
		generatePlaceholderCode('VideoPlaceholder', videoPlaceholderSize, videoPlaceholderClass)
	);
	let generatedCodeText = $derived(
		generatePlaceholderCode('TextPlaceholder', textPlaceholderSize, textPlaceholderClass)
	);
	let generatedCodeCard = $derived(
		generatePlaceholderCode('CardPlaceholder', cardPlaceholderSize, cardPlaceholderClass)
	);
	let generatedCodeImage = $derived(
		generatePlaceholderCode('ImagePlaceholder', imagePlaceholderSize, imagePlaceholderClass)
	);
	let generatedCodeWidget = $derived(
		generatePlaceholderCode('WidgetPlaceholder', 'md', widgetPlaceholderClass)
	);
	let generatedCodeList = $derived(
		generatePlaceholderCode('ListPlaceholder', listPlaceholderSize, listPlaceholderClass)
	);
	let generatedCodeTestimonial = $derived(
		generatePlaceholderCode('TestimonialPlaceholder', 'md', TestimonialPlaceholderClass)
	);
  // for interactive builder
	let builder = uiHelpers();
	let builderExpand = $state(false);
	let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCodeSkeleton));
	const handleBuilderExpandClick = () => {
		builderExpand = !builderExpand;
	};

	$effect(() => {
		builderExpand = builder.isOpen;
	});
</script>
<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Skeleton Builder</H1>

<CodeWrapper>
	<div class="md:h-40">
		<Skeleton size={skeletonSize} class={skeletonClass} />
	</div>
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size(width)</Label>
		{#each skeletonSizes as size}
			<Radio labelClass="w-12 my-1" name="skeletonsize" bind:group={skeletonSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<Button
		class="w-36"
		onclick={() => (skeletonClass === '' ? (skeletonClass = 'ml-4') : (skeletonClass = ''))}
		>{skeletonClass ? 'Remove class' : 'Add class'}</Button
	>
	{#snippet codeblock()}
    <DynamicCodeBlockHighlight
			handleExpandClick={handleBuilderExpandClick}
			expand={builderExpand}
			showExpandButton={showBuilderExpandButton}
			code={generatedCodeSkeleton}
		/>
	{/snippet}
</CodeWrapper>

<H2>Image placeholder</H2>
<CodeWrapper>
	<div class="md:h-64">
		<ImagePlaceholder
			size={imagePlaceholderSize}
			rounded={imagePlaceholderRounded}
			class={imagePlaceholderClass}
		/>
	</div>
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each imageSizes as size}
			<Radio labelClass="w-12 my-1" name="imageSize" bind:group={imagePlaceholderSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Rounded</Label>
		{#each imageRoundedSizes as size}
			<Radio
				class="w-12 my-1"
				name="imageRoundedSize"
				bind:group={imagePlaceholderRounded}
				value={size}>{size}</Radio
			>
		{/each}
	</div>
	<Button
		class="w-36"
		onclick={() =>
			imagePlaceholderClass === ''
				? (imagePlaceholderClass = 'ml-4')
				: (imagePlaceholderClass = '')}
		>{imagePlaceholderClass ? 'Remove class' : 'Add class'}</Button
	>
	{#snippet codeblock()}
		<HighlightCompo code={generatedCodeImage} />
	{/snippet}
</CodeWrapper>

<H2>Video placeholder</H2>
<CodeWrapper>
	<div class="md:h-64">
		<VideoPlaceholder size={videoPlaceholderSize} class={videoPlaceholderClass} />
	</div>
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size(width)</Label>
		{#each videoSizes as size}
			<Radio labelClass="w-12 my-1" name="videoSize" bind:group={videoPlaceholderSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<Button
		class="w-36"
		onclick={() =>
			videoPlaceholderClass === ''
				? (videoPlaceholderClass = 'ml-4')
				: (videoPlaceholderClass = '')}
		>{videoPlaceholderClass ? 'Remove class' : 'Add class'}</Button
	>
	{#snippet codeblock()}
		<HighlightCompo code={generatedCodeVideo} />
	{/snippet}
</CodeWrapper>

<H2>Text placeholder</H2>
<CodeWrapper>
	<TextPlaceholder size={textPlaceholderSize} class={textPlaceholderClass} />
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size(width)</Label>
		{#each textSizes as size}
			<Radio labelClass="w-12 my-1" name="textSize" bind:group={textPlaceholderSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<Button
		class="w-36"
		onclick={() =>
			textPlaceholderClass === '' ? (textPlaceholderClass = 'ml-4') : (textPlaceholderClass = '')}
		>{textPlaceholderClass ? 'Remove class' : 'Add class'}</Button
	>
	{#snippet codeblock()}
		<HighlightCompo code={generatedCodeText} />
	{/snippet}
</CodeWrapper>

<H2>Card placeholder</H2>
<CodeWrapper>
	<CardPlaceholder size={cardPlaceholderSize} class={cardPlaceholderClass} />
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size(width)</Label>
		{#each cardSizes as size}
			<Radio labelClass="w-12 my-1" name="cardSize" bind:group={cardPlaceholderSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<Button
		class="w-36"
		onclick={() =>
			cardPlaceholderClass === '' ? (cardPlaceholderClass = 'ml-4') : (cardPlaceholderClass = '')}
		>{cardPlaceholderClass ? 'Remove class' : 'Add class'}</Button
	>
	{#snippet codeblock()}
		<HighlightCompo code={generatedCodeCard} />
	{/snippet}
</CodeWrapper>

<H2>Widget placeholder</H2>
<CodeWrapper>
	<WidgetPlaceholder class={widgetPlaceholderClass} />
	<Button
		class="mt-4 w-36"
		onclick={() =>
			widgetPlaceholderClass === ''
				? (widgetPlaceholderClass = 'ml-4')
				: (widgetPlaceholderClass = '')}
		>{widgetPlaceholderClass ? 'Remove class' : 'Add class'}</Button
	>
	{#snippet codeblock()}
		<HighlightCompo code={generatedCodeWidget} />
	{/snippet}
</CodeWrapper>

<H2>List placeholder</H2>
<CodeWrapper>
	<div class="md:h-[500px]">
		<ListPlaceholder
			itemNumber={listPlaceholderItemNumber}
			size={listPlaceholderSize}
			rounded={listPlaceholderRounded}
			class={listPlaceholderClass}
		/>
	</div>
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each listSizes as size}
			<Radio labelClass="w-12 my-1" name="size" bind:group={listPlaceholderSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Rounded</Label>
		{#each listRoundedSizes as size}
			<Radio
				class="w-12 my-1"
				name="roundedSize"
				bind:group={listPlaceholderRounded}
				value={size}>{size}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Items:</Label>
		{#each listItemNumbers as itemNumber}
			<Radio
				class="w-10 my-1"
				name="itemNumber"
				bind:group={listPlaceholderItemNumber}
				value={itemNumber}>{itemNumber}</Radio
			>
		{/each}
	</div>
	<Button
		class="w-36"
		onclick={() =>
			listPlaceholderClass === '' ? (listPlaceholderClass = 'ml-4') : (listPlaceholderClass = '')}
		>{listPlaceholderClass ? 'Remove class' : 'Add class'}</Button
	>
	{#snippet codeblock()}
		<HighlightCompo code={generatedCodeList} />
	{/snippet}
</CodeWrapper>
