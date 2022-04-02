<script lang="ts">
	import type { TabHeadType } from '../types';
	export let divClass = 'hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800';
	export let tabId = 'myTab';
	export let tabs: TabHeadType;
</script>

<!--
@component
Content part of Interactive tab component. Use with InteractiveHead.

- 
- You can also use code blocks here.
- Usage:

  ```tsx
  <InteractiveHead>
    <TabContent>
      Some HTML|Component|string
    </TabContent>
  </InteractiveHead>
  ```
  -->

<div class={divClass} id="{tabId}Content" role="tabpanel" aria-labelledby="{tabs.name}-tab">
	<slot />
</div>
