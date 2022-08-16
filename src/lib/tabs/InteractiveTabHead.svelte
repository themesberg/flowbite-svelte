<script lang="ts">
	import type { TabHeadType } from '../types';
	import { tabStore } from './tabStores';
	import classNames from 'classnames';

	export let tabs: TabHeadType[];
	export let tabId: string = 'myTab';
	export let activeTabValue: number = 1;
	export let disabled: boolean = false;
	export let divClass: string = 'mb-4 border-b border-gray-200';
	export let ulClass: string = 'flex flex-wrap -mb-px text-sm font-medium text-center';
	export let liClass: string = 'mr-2';
	export let btnClass: string =
		'inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent';
	export let activeClass: string =
		'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500';
	export let inactiveClasses: string =
		'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300';

	const handleClick = (tabValue: number) => () => {
		tabStore.update((n) => (n = tabValue));
		activeTabValue = tabValue;
	};
</script>

<!--
@component
Header part of Interactive tab component. Use with TabContent.

@param tabs: TabHeadType[];
@param tabId = 'myTab';

- Usage:

  ```tsx
  <InteractiveHead>
    <TabContent>
      Some HTML|Component|string
    </TabContent>
  </InteractiveHead>
  ```
  -->
<div class={divClass}>
	<ul class={ulClass} id={tabId} data-tabs-toggle="#myTabContent" role="tablist">
		{#each tabs as { name, id }}
			<li class={liClass} role="presentation">
				<button
					on:click={handleClick(id)}
					class={classNames(btnClass, activeTabValue === id ? activeClass : inactiveClasses)}
					id="{name}-tab"
					data-tabs-target="#{name}"
					type="button"
					role="tab"
					aria-controls={name}
					aria-selected="false"
					on:blur
					on:click
					on:focus
					on:keydown
					on:keypress
					on:keyup
					on:mouseenter
					on:mouseleave
					on:mouseover
					{disabled}>{name}</button
				>
			</li>
		{/each}
	</ul>
</div>

<slot />
