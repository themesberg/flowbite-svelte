<script lang="ts">
  import Tabs from "$lib/tabs/Tabs.svelte";
  import TabItem from "$lib/tabs/TabItem.svelte";
</script>

<div>
  <Tabs tabStyle="underline" data-testid="tabs-underline">
    <TabItem data-testid="underline-tab-1" title="Underline 1">
      <div>Underline content 1</div>
    </TabItem>
    <TabItem data-testid="underline-tab-2" title="Underline 2">
      <div>Underline content 2</div>
    </TabItem>
  </Tabs>

  <Tabs tabStyle="pill" data-testid="tabs-pill">
    <TabItem data-testid="pill-tab-1" title="Pill 1">
      <div>Pill content 1</div>
    </TabItem>
    <TabItem data-testid="pill-tab-2" title="Pill 2">
      <div>Pill content 2</div>
    </TabItem>
  </Tabs>

  <Tabs tabStyle="full" data-testid="tabs-full">
    <TabItem data-testid="full-tab-1" title="Full 1">
      <div>Full content 1</div>
    </TabItem>
    <TabItem data-testid="full-tab-2" title="Full 2">
      <div>Full content 2</div>
    </TabItem>
  </Tabs>
</div>
