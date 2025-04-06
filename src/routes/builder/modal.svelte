<script lang="ts">
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { Radio, Label, Modal, modal, Button, uiHelpers, type ModalProps } from '$lib';
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
  import type { ModalPlacementType } from './types'

	import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Modal builder"
	let description = "A quick way to create Modal component"
	let title = "Modal builder"
	let dir = "builder"

  let defaultModal = $state(false);
  const placements: ModalPlacementType[] = [
    "top-left",
      "top-center",
      "top-right",
      "center-left",
      "center",
      "center-right",
      "bottom-left",
      "bottom-center",
      "bottom-right"
  ];
	let placement: ModalPlacementType = $state('center');

	const sizes = Object.keys(modal.variants.size);
	// console.log('sizes', sizes);
	let modalSize: ModalProps['size'] = $state('md');
	let backdrop = $state(true);
	const changeBackdrop = () => {
		backdrop = !backdrop;
	};
	let outsideClose = $state(true);
	const changeOutsideClose = () => {
		outsideClose = !outsideClose;
	};
	let rounded = $state(true);
	const changeRounded = () => {
		rounded = !rounded;
	};

	// transition
	// let transitionStatus = $state(false);
	type TransitionOption = {
		name: string;
		transition: typeof fly | typeof blur | typeof slide | typeof scale;
		params: FlyParams | BlurParams | SlideParams | ScaleParams;
	};
	const transitions: TransitionOption[] = [
		{ name: 'Fade', transition: fade, params: { duration: 200, easing: linear } },
		{ name: 'Fly', transition: fly, params: { duration: 500, easing: linear, x: 150 } },
		{ name: 'Blur', transition: blur, params: { duration: 500, easing: linear } },
		{ name: 'Slide', transition: slide, params: { duration: 500, easing: linear, x: -150 } },
		{ name: 'Scale', transition: scale, params: { duration: 500, easing: linear } }
	];
	let selectedTransition = $state('Fade');
	let currentTransition = $derived(
		transitions.find((t) => t.name === selectedTransition) || transitions[0]
	);

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (modalSize !== 'md') props.push(`size="${modalSize}"`);
			if (placement !== 'center') props.push(`placement="${placement}"`);

			if (currentTransition !== transitions[0]) {
				props.push(`transition={${currentTransition.transition.name}}`);

				// Generate params string without quotes and handle functions
				const paramsString = Object.entries(currentTransition.params)
					.map(([key, value]) => {
						if (typeof value === 'function') {
							return `${key}:${value.name}`;
						}
						return `${key}:${value}`;
					})
					.join(',');
				props.push(`params={{${paramsString}}}`);
			}

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Modal title="Terms of Service" {modalStatus} {closeModal}${propsString}>
  Modal content
</Modal>`;
		})()
	);
	// end of code generator

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

<H1>Modal Bilder</H1>

<CodeWrapper>
	<div class="mb-4 h-20">
		<div class="flex justify-center">
			<Button onclick={() => (defaultModal = true)}>Default modal</Button>
		</div>

		<Modal
			title="Terms of Service"
			size={modalSize}
			{placement}
			transition={currentTransition.transition}
			params={currentTransition.params}
			bind:open={defaultModal} 
      autoclose
		>
			<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odit quis fugit beatae,
				veritatis minus cupiditate ea numquam facere iusto vitae sequi, ipsum ducimus quo eaque
				illum. Eveniet, dolorem autem.
			</p>
		</Modal>
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Size</Label>
		{#each sizes as size}
			<Radio labelClass="w-12 my-1" name="modal-size" bind:group={modalSize} value={size}
				>{size}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Position</Label>
		{#each placements as position}
			<Radio
				class="w-32 my-1"
				name="modal-position"
				bind:group={placement}
				value={position}>{position}</Radio
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Transition</Label>
		{#each transitions as transition}
			<Radio
				class="w-16 my-1"
				name="transition_interactive"
				bind:group={selectedTransition}
				value={transition.name}>{transition.name}</Radio
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
