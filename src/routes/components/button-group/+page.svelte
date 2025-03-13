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
		type RadioColorType,
		type ButtonProps
	} from '$lib';
	import { UserCircleSolid, AdjustmentsVerticalSolid, DownloadSolid } from 'flowbite-svelte-icons';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import { isGeneratedCodeOverflow } from '../../utils/helpers';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'buttongroup';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;

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

<H1>Button group</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Button-group Builder</H2>
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
				labelClass="w-24 my-1"
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

<H2>Dualtone gradient</H2>
<CodeWrapper>
	<ExampleComponents.DualtoneGradient />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/DualtoneGradient.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Dualtone gradient pill</H2>
<CodeWrapper>
	<ExampleComponents.DualtoneGradientPill />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/DualtoneGradientPill.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Events</H2>
<CodeWrapper>
	<ExampleComponents.Events />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Events.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Gradient shadow</H2>
<CodeWrapper>
	<ExampleComponents.GradientShadow />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/GradientShadow.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Outline buttons</H2>
<CodeWrapper>
	<ExampleComponents.OutlineButtons />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/OutlineButtons.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Pill buttons</H2>
<CodeWrapper>
	<ExampleComponents.PillButtons />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/PillButtons.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Standard buttons</H2>
<CodeWrapper>
	<ExampleComponents.StandardButtons />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/StandardButtons.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
