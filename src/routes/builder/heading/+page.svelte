<script lang="ts">
	import {
		Heading,
		Button,
		Label,
		Radio,
		Input,
		CloseButton,
		uiHelpers,
		type HeadingProps
	} from '$lib';
	import DynamicCodeBlockHighlight from '../utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from '../utils/CodeWrapper.svelte';
	import H1 from '../utils/H1.svelte';
	import { isGeneratedCodeOverflow } from '../utils/helpers';
	import MetaTag from '../../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Heading builder"
	let description = "A quick way to create Heading component"
	let title = "Heading builder"
	let dir = "builder"

	const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
	let headingTag: HeadingProps['tag'] = $state('h1');
	let headingCls = $state('text-primary-700 dark:text-primary-500');
	const changeHeadingCls = () => {
		headingCls =
			headingCls === 'text-primary-700 dark:text-primary-500'
				? 'text-blue-500 dark:text-blue-400 uppercase italic underline text-center font-semibold bg-gray-50 dark:bg-gray-700 p-4'
				: 'text-primary-700 dark:text-primary-500';
	};

	let { text = $bindable('My heading') } = $props();
	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (headingTag) props.push(` tag="${headingTag}"`);
			if (headingCls) props.push(` class="${headingCls}"`);
			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Heading${propsString}>
  ${text}
</Headin>`;
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

<H1>Heading Builder</H1>
<CodeWrapper>
	<Label class="text-md mb-2">Edit heading</Label>
	<Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-8 pr-12">
		{#snippet right()}
			<CloseButton onclick={() => (text = '')} />
		{/snippet}
	</Input>
	<div class="h-24">
		<Heading tag={headingTag} class={headingCls}>{text}</Heading>
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Rounded</Label>
		{#each tags as tag}
			<Radio class="w-12 my-1" name="tag" bind:group={headingTag} value={tag}>{tag}</Radio>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-40" color="blue" onclick={changeHeadingCls}
			>{headingCls !== 'text-primary-700 dark:text-primary-500'
				? 'Original class'
				: 'Change class'}</Button
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
