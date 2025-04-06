<script lang="ts">
	import { Tabs, tabs, TabItem, uiHelpers, Label, Radio, type TabsProps } from '$lib';
	import DynamicCodeBlockHighlight from './utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from './utils/CodeWrapper.svelte';
	import H1 from './utils/H1.svelte';
	import { isGeneratedCodeOverflow } from './utils/helpers';
	import MetaTag from '../utils/MetaTag.svelte'
  
	// MetaTag
	let breadcrumb_title = "Tab builder"
	let description = "A quick way to create Tab component"
	let title = "Tab builder"
	let dir = "builder"
	
	let tabStyle: TabsProps['tabStyle'] = $state('none') as NonNullable<TabsProps['tabStyle']>;
	const tabStyles = Object.keys(tabs.variants.tabStyle);

	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (tabStyle !== 'none') props.push(` style="${tabStyle}"`);

			return `<Tab${props}>
  <TabItem open title="Profile">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Tab content
      </p>
    </TabItem>
    <TabItem title="Dashboard">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Tab content
      </p>
    </TabItem>
    <TabItem title="Settings">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Tab content
      </p>
    </TabItem>
    <TabItem title="Users">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Tab content
      </p>
    </TabItem>
    <TabItem disabled>
      {#snippet titleSlot()}
        <span class="text-gray-400 dark:text-gray-500">Disabled</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Disabled:</b>
        Tab content
      </p>
    </TabItem>    
</Tab>`;
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

<H1>Tab Builder</H1>
<CodeWrapper>
	<Tabs
		{tabStyle}
		ulClass={tabStyle === 'full'
			? 'flex flex-nowrap rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700 space-x-0'
			: ''}
	>
		<TabItem
			open
			title={tabStyle === 'full' ? '' : 'Profile'}
			class={tabStyle === 'full' ? 'w-full' : ''}
		>
			{#snippet titleSlot()}Profile{/snippet}
			<p class="text-sm text-gray-500 dark:text-gray-400">
				<b>Profile:</b>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</TabItem>
		<TabItem
			title={tabStyle === 'full' ? '' : 'Settings'}
			class={tabStyle === 'full' ? 'w-full' : ''}
		>
			{#snippet titleSlot()}Settings{/snippet}
			<p class="text-sm text-gray-500 dark:text-gray-400">
				<b>Settings:</b>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</TabItem>
		<TabItem title={tabStyle === 'full' ? '' : 'Users'} class={tabStyle === 'full' ? 'w-full' : ''}>
			{#snippet titleSlot()}Users{/snippet}
			<p class="text-sm text-gray-500 dark:text-gray-400">
				<b>Users:</b>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</TabItem>
		<TabItem
			title={tabStyle === 'full' ? '' : 'Dashboard'}
			class={tabStyle === 'full' ? 'w-full' : ''}
		>
			{#snippet titleSlot()}Dashboard{/snippet}
			<p class="text-sm text-gray-500 dark:text-gray-400">
				<b>Dashboard:</b>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</TabItem>
		<TabItem
			disabled
			title={tabStyle === 'full' ? '' : 'Disabled'}
			class={tabStyle === 'full' ? 'w-full' : ''}
		>
			{#snippet titleSlot()}
				<span class="text-gray-400 dark:text-gray-500">Disabled</span>
			{/snippet}
			<p class="text-sm text-gray-500 dark:text-gray-400">
				<b>Disabled:</b>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</TabItem>
	</Tabs>
	<div class="my-4 flex flex-wrap space-x-4">
		<Label class="mb-4 w-full font-bold">Style</Label>
		{#each tabStyles as option}
			{#if option !== 'full'}
				<Radio labelClass="w-24 my-1" name="table_color" bind:group={tabStyle} value={option}
					>{option}</Radio
				>
			{/if}
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
