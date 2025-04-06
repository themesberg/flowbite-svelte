<script lang="ts">
	import { Avatar, avatar, Label, Radio, Button, uiHelpers, type AvatarProps } from '$lib';
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
	import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Avatar builder"
	let description = "A quick way to create Avatar component"
	let title = "Avatar builder"
	let dir = "builder"

	// reactive example, rounded, border, stacked, size, className
	const sizes = Object.keys(avatar.variants.size);
	let avatarSize: AvatarProps['size'] = $state('md');
	let isRounded = $state(false);
	const toggleCornerStyle = () => {
		isRounded = !isRounded;
	};
	let border: AvatarProps['border'] = $state(false);
	const changeBorder = () => {
		border = !border;
	};
	let stacked: AvatarProps['stacked'] = $state(false);
	const changeStacked = () => {
		stacked = !stacked;
	};
	let avatarClass: AvatarProps['class'] = $state('');
	const changeClass = () => {
		avatarClass = avatarClass === '' ? 'mx-0.5' : '';
	};

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (isRounded) props.push('cornerStyle="rounded"');
			if (avatarSize !== 'md') props.push(`size="${avatarSize}"`);
			if (border) props.push('border');
			if (stacked) props.push('stacked');
			if (avatarClass) props.push(`class="${avatarClass}"`);

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Avatar${propsString} />`;
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

<H1>Avatar Bilder</H1>

<CodeWrapper>
	<div class="mb-4 flex h-36 justify-center">
		<Avatar
			src="/images/profile-picture-1.webp"
			alt="Profile picture 1"
			cornerStyle={isRounded ? 'rounded' : undefined}
			{border}
			{stacked}
			class={avatarClass}
			size={avatarSize}
		/>
		<Avatar
			src="/images/profile-picture-2.webp"
			alt="Profile picture 2"
			cornerStyle={isRounded ? 'rounded' : undefined}
			{border}
			{stacked}
			class={avatarClass}
			size={avatarSize}
		/>
		<Avatar
			src="/images/profile-picture-3.webp"
			alt="Profile picture 3"
			cornerStyle={isRounded ? 'rounded' : undefined}
			{border}
			{stacked}
			class={avatarClass}
			size={avatarSize}
		/>
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each sizes as size}
			<Radio labelClass="w-12 my-1" name="spinnersize" bind:group={avatarSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-40" color="blue" onclick={toggleCornerStyle}
			>{isRounded ? 'Default: circular' : 'Rounded'}</Button
		>
		<Button class="w-40" color="red" onclick={changeBorder}
			>{border ? 'Remove border' : 'Add border'}</Button
		>
		<Button class="w-40" color="green" onclick={changeStacked}
			>{stacked ? 'Remove stacked' : 'Add  stacked'}</Button
		>
		<Button class="w-40" color="purple" onclick={changeClass}
			>{avatarClass ? 'Remove class' : 'Add class'}</Button
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
