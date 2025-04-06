<script lang="ts">
	import {
		Card,
		card,
		Button,
		Toggle,
		Label,
		Radio,
		uiHelpers,
		type CardProps,
		type ImgType
	} from '$lib';
  import type { RadioColorType } from './types'
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
	import MetaTag from '../utils/MetaTag.svelte'
	
	// MetaTag
	let breadcrumb_title = "Card builder"
	let description = "A quick way to create Card component"
	let title = "Card builder"
	let dir = "builder"
	
  let reverse = $state(false);

	const sizes = Object.keys(card.variants.size);
	let cardSize: CardProps['size'] = $state('sm');
	const colors = Object.keys(card.variants.color);
	let color: CardProps['color'] = $state('gray');
	const paddings = Object.keys(card.variants.padding);
	let cardPadding: CardProps['padding'] = $state('lg');
	const shadows = Object.keys(card.variants.shadow);
	let cardShadow: CardProps['shadow'] = $state('md');
	let horizontal = $state(false);
	const changeImgLayout = () => {
		horizontal = !horizontal;
	};
	let link = $state('');
	const changeLink = () => {
		link = link === '' ? '/' : '';
	};
	let cardClass: CardProps['class'] = $state('');
	const changeClass = () => {
		cardClass = cardClass === '' ? 'pl-10' : '';
	};
	let cardImage = $state<ImgType | undefined>(undefined);
	const changeImage = () => {
		cardImage = !cardImage
			? {
					src: '/images/image-1.webp',
					alt: 'my image'
				}
			: undefined;
	};

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (cardSize !== 'sm') props.push(` size="${cardSize}"`);
			if (color !== 'gray') props.push(` color="${color}"`);
			if (cardShadow !== 'md') props.push(` shadow="${cardShadow}"`);
			if (cardClass) props.push(` class="${cardClass}"`);
			if (cardPadding !== 'lg') props.push(` padding="${cardPadding}"`);
			if (link) props.push(` href="${link}"`);
			if (horizontal) props.push(` horizontal`);
			if (reverse) props.push(` reverse`);
			if (cardImage && typeof cardImage === 'object') {
				const imgString = Object.entries(cardImage)
					.map(([key, value]) => `${key}:"${value}"`)
					.join(',');
				props.push(` img=${cardImage.src}`);
			}

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Card${propsString}>My Card</Card>`;
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

	// helper function
	const hasImageContent = (img: ImgType | undefined): boolean => {
		return !!img && !!img.src;
	};
</script>

<H1>Card Builder</H1>
<MetaTag {breadcrumb_title} {description} {title} {dir} />

<CodeWrapper>
	<div class="flex justify-center">
		<Card
			size={cardSize}
			{color}
			padding={cardPadding}
			shadow={cardShadow}
			href={link ? link : ''}
			class={cardClass}
			img={cardImage?.src}
			{horizontal}
			{reverse}
		>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Noteworthy technology acquisitions
			</h5>
			<p class="leading-tight font-normal text-gray-700 dark:text-gray-300">
				Here are the biggest enterprise technology acquisitions of so far, in reverse chronological
				order.
			</p>
		</Card>
	</div>
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each sizes as size}
			<Radio class="w-16 my-1" name="interactive_card_size" bind:group={cardSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Color</Label>
		{#each colors as colorOption}
			<Radio
				class="w-24 my-1"
				name="alert_reactive"
				bind:group={color}
				color={colorOption as RadioColorType}
				value={colorOption}>{colorOption}</Radio
			>
		{/each}
	</div>
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Padding</Label>
		{#each paddings as padding}
			<Radio
				class="w-16 my-1"
				name="interactive_card_padding"
				bind:group={cardPadding}
				value={padding}>{padding}</Radio
			>
		{/each}
	</div>
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Shadow</Label>
		{#each shadows as shadow}
			<Radio
				class="w-16 my-1"
				name="interactive_card_shadow"
				bind:group={cardShadow}
				value={shadow}>{shadow}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-40" color="sky" onclick={changeLink}
			>{link === '' ? 'Add link' : 'Remove link'}</Button
		>
		<Button class="w-40" color="green" onclick={changeClass}
			>{cardClass ? 'Remove class' : 'Add class'}</Button
		>

		<Button class="w-40" color="blue" onclick={changeImage}>
			{hasImageContent(cardImage) ? 'Remove image' : 'Add image'}
		</Button>

		<Button
			disabled={!hasImageContent(cardImage)}
			class="w-40"
			color="violet"
			onclick={changeImgLayout}
		>
			{horizontal ? 'Vertical' : 'Horizontal'}
		</Button>

		<Toggle
			bind:checked={reverse}
			class="italic dark:text-gray-500 {!hasImageContent(cardImage)
				? 'opacity-50 cursor-not-allowed'
				: ''}"
			disabled={!hasImageContent(cardImage)}
		>
			Reverse: {reverse}
		</Toggle>
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
