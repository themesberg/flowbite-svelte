<script lang="ts">
	import { Video, Button, Label, Radio, uiHelpers } from '$lib';
	import HighlightCompo from './utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
  import { isGeneratedCodeOverflow } from './utils/helpers';
	import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Video builder"
	let description = "A quick way to create Video component"
	let title = "Video builder"
	let dir = "builder"
	
	let controls = $state(true);
	const changeControls = () => {
		controls = !controls;
	};

	let autoplay = $state(false);
	const changeAutoplay = () => {
		autoplay = !autoplay;
	};
	let muted = $state(false);
	const changeMuted = () => {
		muted = !muted;
	};
	const videoClasses = [
		{ name: 'default', class: 'w-full' },
		{ name: 'width', class: 'w-96' },
		{ name: 'height', class: 'h-80' },
		{ name: 'responsive', class: 'w-full max-w-full h-auto' },
		{
			name: 'customStyle',
			class: 'w-full max-w-full h-auto rounded-3xl border border-gray-200 dark:border-gray-700'
		}
	];
	let selectedClass: string | number = $state('default');
	// let selectedTransition = $state('Fly');
	let currentClass = $derived(
		videoClasses.find((t) => t.name === selectedClass) || videoClasses[0]
	);

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (controls) props.push(' controls');
			if (autoplay) props.push(' autoplay');
			if (muted) props.push(' muted');
			if (currentClass.name !== 'default') props.push(` class="${currentClass.class}"`);

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Video src="/videos/flowbite.mp4"${propsString} trackSrc="flowbite.mp4" />`;
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

<H1>Video Player Builder</H1>
<CodeWrapper>
	<div class="mb-4 md:h-[500px]">
		<Video
			src="/videos/flowbite.mp4"
			{controls}
			{autoplay}
			{muted}
			trackSrc="flowbite.mp4"
			class={currentClass.class}
		/>
	</div>
	<div class="mb-4 flex flex-wrap space-x-6">
		<Label class="mb-4 w-full font-bold">Style</Label>
		{#each videoClasses as option}
			<Radio
				class="w-24 my-1"
				name="interactive_toast_color"
				bind:group={selectedClass}
				value={option.name}>{option.name}</Radio
			>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-40" color="emerald" onclick={changeControls}
			>{controls ? 'Remove controls' : 'Add controls'}</Button
		>
		<Button class="w-40" color="blue" onclick={changeAutoplay}
			>{autoplay ? 'Remove autoplay' : 'Add autoplay'}</Button
		>
		<Button class="w-40" color="pink" onclick={changeMuted}
			>{muted ? 'Remove muted' : 'Add muted'}</Button
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
