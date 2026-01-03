<script lang="ts">
  import Tabs from "$lib/tabs/Tabs.svelte";
  import TabItem from "$lib/tabs/TabItem.svelte";

  let selected = $state("tab-2");
</script>

<Tabs bind:selected data-testid="tabs-with-selected">
  <TabItem key="tab-1" data-testid="selected-tab-1" title="First Tab">
    <div data-testid="selected-content-1">First content</div>
  </TabItem>
  <TabItem key="tab-2" data-testid="selected-tab-2" title="Second Tab">
    <div data-testid="selected-content-2">Second content</div>
  </TabItem>
  <TabItem key="tab-3" data-testid="selected-tab-3" title="Third Tab">
    <div data-testid="selected-content-3">Third content</div>
  </TabItem>
</Tabs>
