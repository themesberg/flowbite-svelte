<script lang="ts">
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import HighlightCompo from './utils/HighlightCompo.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import H2 from './utils/H2.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
	
	import {
		Button,
		Radio,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
    DropdownItem,
		uiHelpers,
		Label
	} from '$lib';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { blur, fly, slide, scale } from 'svelte/transition';
	import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
	import { sineIn, linear } from 'svelte/easing';
	import { page } from '$app/stores';
	let activeUrl = $state($page.url.pathname);
	$effect(() => {
		activeUrl = $page.url.pathname;
	});

	let dropdownDividerHeaderFooter = uiHelpers();
	let dropdownDividerHeaderFooterStatus = $state(false);
	let closeDropdownDividerHeaderFooter = dropdownDividerHeaderFooter.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		dropdownDividerHeaderFooterStatus = dropdownDividerHeaderFooter.isOpen;
	});

	let dividerStatus = $state(false);
	const changeDividerStatus = () => {
		dividerStatus = !dividerStatus;
	};
	let headerStatus = $state(false);
	const changeHeaderStatus = () => {
		headerStatus = !headerStatus;
	};
	let footerStatus = $state(false);
	const changeFooterStatus = () => {
		footerStatus = !footerStatus;
	};

	// transition
	type TransitionOption = {
		name: string;
		transition: typeof fly | typeof blur | typeof slide | typeof scale;
		params: FlyParams | BlurParams | SlideParams | ScaleParams;
	};

	const transitions: TransitionOption[] = [
		{ name: 'Fly', transition: fly, params: { y: 0, duration: 200, easing: sineIn } },
		{ name: 'Blur', transition: blur, params: { y: 0, duration: 400, easing: linear } },
		{ name: 'Slide', transition: slide, params: { x: -100, duration: 300, easing: sineIn } },
		{ name: 'Scale', transition: scale, params: { duration: 300, easing: linear } }
	];
	let selectedTransition = $state('Fly');
	let currentTransition = $derived(
		transitions.find((t) => t.name === selectedTransition) || transitions[0]
	);

	// code generator
	let generatedCode = $derived(
		(() => {
			let headerContent = headerStatus
				? ` 
    <DropdownHeader>
      <div>Bonnie Green</div>
      <div class="truncate font-medium">name@flowbite.com</div>
    </DropdownHeader>`
				: '';
			let footerContent = footerStatus
				? `
    <DropdownFooter>
      <div class="py-2">
        <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </div>
    </DropdownFooter>`
				: '';
			let dividerContent = dividerStatus
				? `
      <DropdownDivider />`
				: '';
			let props = [];
			if (currentTransition !== transitions[0]) {
				props.push(` transition={${currentTransition.transition.name}}`);

				// Generate params string without quotes and handle functions
				const paramsString = Object.entries(currentTransition.params)
					.map(([key, value]) => {
						if (typeof value === 'function') {
							return `${key}:${value.name}`;
						}
						return `${key}:${value}`;
					})
					.join(',');
				props.push(` params={{${paramsString}}}`);
			}

			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<div class="flex items-start justify-center">
  <Button onclick={dropdownA.toggle}>Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative h-96">
    <Dropdown {activeUrl}${propsString} dropdownStatus={dropdownAStatus} closeDropdown={closeDropdownA} class="absolute -left-[150px] top-[40px]">${headerContent}
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>${dividerContent}
        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      </DropdownUl>${footerContent}
    </Dropdown>
  </div>
</div>`;
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

<H1>Dropdown Builder</H1>
<CodeWrapper>
	<div class="flex items-start justify-center">
		<Button onclick={dropdownDividerHeaderFooter.toggle}>
			Dropdown
			<ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
		</Button>
		<div class="relative h-96">
			<Dropdown
				{activeUrl}
				class="absolute top-[40px] -left-[150px]"
			>
				{#if headerStatus}
					<DropdownHeader>
						<div>Bonnie Green</div>
						<div class="truncate font-medium">name@flowbite.com</div>
					</DropdownHeader>
				{/if}
			
					<DropdownItem href="/">Dashboard</DropdownItem>
					{#if dividerStatus}
						<DropdownDivider />
					{/if}
					<DropdownItem href="/components/dropdown">Dropdown</DropdownItem>
					<DropdownItem href="/components/footer">Footer</DropdownItem>
					<DropdownItem href="/components">Alert</DropdownItem>
				
			</Dropdown>
		</div>
	</div>
	<div class="mb-4 flex gap-4">
		<Button onclick={changeHeaderStatus}>
			Header {#if headerStatus}off{:else}on{/if}
		</Button>
		<Button onclick={changeFooterStatus}>
			Footer {#if footerStatus}off{:else}on{/if}
		</Button>
		<Button onclick={changeDividerStatus}>
			Divider {#if dividerStatus}off{:else}on{/if}
		</Button>
	</div>
	<div class="flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Transition</Label>
		{#each transitions as transition}
			<Radio
				labelClass="w-24 my-1"
				name="dropdown_transition"
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
