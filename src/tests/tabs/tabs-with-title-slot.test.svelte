<script lang="ts">
  import Tabs from "$lib/tabs/Tabs.svelte";
  import TabItem from "$lib/tabs/TabItem.svelte";
</script>

<Tabs data-testid="tabs-with-title-slot">
  <TabItem data-testid="tab-with-slot">
    {#snippet titleSlot()}
      <span data-testid="custom-title">Custom Title</span>
    {/snippet}
    <div data-testid="slot-content">Content with custom title</div>
  </TabItem>
  <TabItem data-testid="normal-tab" title="Normal Tab">
    <div>Normal content</div>
  </TabItem>
</Tabs>
