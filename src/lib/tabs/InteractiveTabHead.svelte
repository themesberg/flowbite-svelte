<script lang="ts">
	import type { TabHeadType } from '../types';
	export let tabs: TabHeadType[];
	export let tabId = 'myTab';

	export let activeTabValue = 1;
	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
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
<div class="mb-4 border-b border-gray-200">
	<ul
		class="flex flex-wrap -mb-px text-sm font-medium text-center"
		id={tabId}
		data-tabs-toggle="#myTabContent"
		role="tablist"
	>
		{#each tabs as { name, id }}
			<li class="mr-2" role="presentation">
				<button
					on:click={handleClick(id)}
					class="inline-block p-4 rounded-t-lg border-b-2"
					id="{name}-tab"
					data-tabs-target="#{name}"
					type="button"
					role="tab"
					aria-controls={name}
					aria-selected="false">{name}</button
				>
			</li>
		{/each}
	</ul>
</div>

<slot />
