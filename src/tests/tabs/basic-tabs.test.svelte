<script lang="ts">
  import Tabs from "$lib/tabs/Tabs.svelte";
  import TabItem from "$lib/tabs/TabItem.svelte";
</script>

<Tabs data-testid="basic-tabs">
  <TabItem data-testid="tab-1" title="Tab 1">
    <div data-testid="content-1">Content for tab 1</div>
  </TabItem>
  <TabItem data-testid="tab-2" title="Tab 2">
    <div data-testid="content-2">Content for tab 2</div>
  </TabItem>
  <TabItem data-testid="tab-3" title="Tab 3">
    <div data-testid="content-3">Content for tab 3</div>
  </TabItem>
</Tabs>
