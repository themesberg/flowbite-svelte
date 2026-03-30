<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
</script>

<Tabs tabStyle="full" class="divide-default rounded-base flex divide-x shadow-xs rtl:divide-x-reverse">
  <TabItem class="w-full" open>
    {#snippet titleSlot()}
      <span>Profile</span>
    {/snippet}
    <p class="text-body text-sm">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem class="w-full">
    {#snippet titleSlot()}
      <span>Dashboard</span>
    {/snippet}
    <p class="text-body text-sm">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem class="w-full">
    {#snippet titleSlot()}
      <span>Settings</span>
    {/snippet}
    <p class="text-body text-sm">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem class="w-full">
    {#snippet titleSlot()}
      <span>Users</span>
    {/snippet}
    <p class="text-body text-sm">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
