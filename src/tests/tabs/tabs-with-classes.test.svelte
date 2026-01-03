<script lang="ts">
  import Tabs from "$lib/tabs/Tabs.svelte";
  import TabItem from "$lib/tabs/TabItem.svelte";
</script>

<Tabs 
  data-testid="tabs-with-custom-classes"
  class="custom-tabs-class"
  classes={{ active: "custom-active-class" }}
>
  <TabItem data-testid="custom-tab-1" title="Tab One" class="custom-tab-item">
    <div>Tab one content</div>
  </TabItem>
  <TabItem data-testid="custom-tab-2" title="Tab Two">
    <div>Tab two content</div>
  </TabItem>
</Tabs>
