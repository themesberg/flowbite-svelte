<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
</script>

<Tabs classes={{ active: "p-4 text-white bg-blue-600 dark:bg-blue-500 rounded-t-base" }}>
  <TabItem open title="Profile">
    <p class="text-body text-sm">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Settings">
    <p class="text-body text-sm">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Users">
    <p class="text-body text-sm">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Dashboard">
    <p class="text-body text-sm">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem disabled>
    {#snippet titleSlot()}
      <span class="text-fg-disabled">Disabled</span>
    {/snippet}
    <p class="text-body text-sm">
      <b>Disabled:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
