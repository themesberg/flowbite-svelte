<script lang="ts">
  import Tabs from "$lib/tabs/Tabs.svelte";
  import TabItem from "$lib/tabs/TabItem.svelte";
</script>

<Tabs data-testid="tabs-with-disabled">
  <TabItem data-testid="enabled-tab" title="Enabled">
    <div data-testid="enabled-content">Enabled content</div>
  </TabItem>
  <TabItem data-testid="disabled-tab" title="Disabled" disabled>
    <div data-testid="disabled-content">Disabled content</div>
  </TabItem>
  <TabItem data-testid="another-enabled-tab" title="Also Enabled">
    <div data-testid="another-enabled-content">Another enabled content</div>
  </TabItem>
</Tabs>
