<script lang="ts">
	import type { TabHeadType } from '../types';
	import { tabStore } from './tabStore';
	export let divClass = 'hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800';
	// export let tabId = 'myTab';
	export let tab: TabHeadType;
	let activeTabValue: number;
</script>

<!--
@component
Content part of Interactive tab component. Use with InteractiveHead.

- let tabId = 'myTab';
- let tabs: TabHeadType;
- let divClass: string;
- Usage:

  ```tsx
  <InteractiveHead>
    <TabContent>
      Some HTML|Component|string
    </TabContent>
  </InteractiveHead>
  ```
-->

{#if activeTabValue === tab.id}
	<div class={divClass} id="{tab.id}Content" role="tabpanel" aria-labelledby="{tab.name}-tab">
		<slot />
	</div>
{/if}
