<script lang="ts">
	import {
		ButtonGroup,
		buttonGroup,
		Button,
		button,
		Label,
		Radio,
		type ButtonGroupProps,
		uiHelpers,
		type ButtonProps
	} from '$lib';
	import type { RadioColorType } from './types'
	import { UserCircleSolid, AdjustmentsVerticalSolid, DownloadSolid } from 'flowbite-svelte-icons';
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
	import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Button group builder"
	let description = "A quick way to create Button group component"
	let title = "Button group builder"
	let dir = "builder"
	
	// size, class
	const sizes = Object.keys(buttonGroup.variants.size);
	let size: ButtonGroupProps['size'] = $state('md');
	// button colors
	const colors = Object.keys(button.variants.color);
	let color: ButtonProps['color'] = $state('primary');
	let link: ButtonProps['href'] = $state('');
	const changeLink = () => {
		link = link === '' ? '/' : '';
	};
	let icon = $state(false);
	const changeIcon = () => {
		icon = !icon;
	};
	let outline = $state(false);
	const changeOutline = () => {
		outline = !outline;
	};

	let buttonGroupClass: ButtonGroupProps['class'] = $state('');
	const changeClass = () => {
		buttonGroupClass = buttonGroupClass === '' ? 'ml-4' : '';
	};
	let generatedCode = $derived(
		(() => {
			let props = [];
			let btnProps = [];
			let icon1 = icon ? '<UserCircleSolid class="me-2 h-4 w-4" />' : '';
			let icon2 = icon ? '<AdjustmentsVerticalSolid class="me-2 h-4 w-4" />' : '';
			let icon3 = icon ? '<DownloadSolid class="me-2 h-4 w-4" />' : '';
			if (size !== 'md') props.push(` size="${size}"`);
			if (buttonGroupClass !== '') props.push(` class="${buttonGroupClass}"`);

			if (link) btnProps.push(` href="${link}"`);
			if (color !== 'primary') btnProps.push(` color="${color}"`);
			if (outline) btnProps.push(' outline');

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<ButtonGroup${propsString}>
  <Button${btnProps}>${icon1}Profile</Button>
  <Button${btnProps}>${icon2}Settings</Button>
  <Button${btnProps}>${icon3}Messages</Button>
</ButtonGroup>`;
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

<H1>Button-group Builder</H1>

<CodeWrapper>
	<div class="flex h-16 items-center justify-center">
		<ButtonGroup {size} class={buttonGroupClass}>
			<Button {color} href={link} {outline}>
				{#if icon}<UserCircleSolid class="me-2 h-4 w-4" />{/if}Profile
			</Button>
			<Button {color} href={link} {outline}>
				{#if icon}<AdjustmentsVerticalSolid class="me-2 h-4 w-4" />{/if}Settings
			</Button>
			<Button {color} href={link} {outline}>
				{#if icon}<DownloadSolid class="me-2 h-4 w-4" />{/if}Messages
			</Button>
		</ButtonGroup>
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each sizes as sizeOption}
			<Radio labelClass="w-24 my-1" name="size" bind:group={size} value={sizeOption}
				>{sizeOption}</Radio
			>
		{/each}
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
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-40" onclick={changeClass}
			>{buttonGroupClass ? 'Remove class' : 'Add class'}</Button
		>
		<Button class="w-40" color="secondary" onclick={changeLink}
			>{link === '' ? 'Add link' : 'Remove link'}</Button
		>
		<Button class="w-40" color="red" onclick={changeIcon}
			>{icon ? 'Remove icon' : 'Add icon'}</Button
		>
		<Button class="w-40" color="violet" onclick={changeOutline}
			>{outline ? 'Remove outline' : 'Add outline'}</Button
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
