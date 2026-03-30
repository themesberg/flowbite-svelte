<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
  import { UserCircleSolid, GridSolid, AdjustmentsVerticalSolid, ClipboardSolid } from "flowbite-svelte-icons";
</script>

<Tabs tabStyle="underline">
  <TabItem open>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <UserCircleSolid size="md" />
        Profile
      </div>
    {/snippet}
    <p class="text-body text-sm">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <GridSolid size="md" />
        Dashboard
      </div>
    {/snippet}
    <p class="text-body text-sm">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <AdjustmentsVerticalSolid size="md" />
        Settings
      </div>
    {/snippet}
    <p class="text-body text-sm">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <ClipboardSolid size="md" />
        Contacts
      </div>
    {/snippet}
    <p class="text-body text-sm">
      <b>Contacts:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
