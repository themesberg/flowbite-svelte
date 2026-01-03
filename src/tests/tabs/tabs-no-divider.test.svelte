<script lang="ts">
  import Tabs from "$lib/tabs/Tabs.svelte";
  import TabItem from "$lib/tabs/TabItem.svelte";
</script>

<Tabs divider={false} data-testid="tabs-no-divider">
  <TabItem data-testid="no-divider-tab-1" title="First">
    <div>First content</div>
  </TabItem>
  <TabItem data-testid="no-divider-tab-2" title="Second">
    <div>Second content</div>
  </TabItem>
</Tabs>
