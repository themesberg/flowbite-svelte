<script lang="ts" module>
  export const testState = {
    currentTab: "",
    tabClickCount: 0
  };
</script>

<script lang="ts">
  import Tabs from "$lib/tabs/Tabs.svelte";
  import TabItem from "$lib/tabs/TabItem.svelte";

  let selected = $state("");

  $effect(() => {
    if (selected) {
      testState.currentTab = selected;
      testState.tabClickCount++;
    }
  });
</script>

<Tabs bind:selected data-testid="clickable-tabs">
  <TabItem key="first" data-testid="clickable-tab-1" title="First">
    <div data-testid="clickable-content-1">First content</div>
  </TabItem>
  <TabItem key="second" data-testid="clickable-tab-2" title="Second">
    <div data-testid="clickable-content-2">Second content</div>
  </TabItem>
  <TabItem key="third" data-testid="clickable-tab-3" title="Third">
    <div data-testid="clickable-content-3">Third content</div>
  </TabItem>
</Tabs>
