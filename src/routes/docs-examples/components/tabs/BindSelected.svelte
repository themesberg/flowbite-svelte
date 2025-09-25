<script lang="ts">
  import { Tabs, TabItem, Button, P } from "flowbite-svelte";
  
  let selectedKey = $state("settings");
</script>

<Tabs bind:selected={selectedKey}>
  <TabItem key="profile" title="Profile">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem key="settings" title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem key="users" title="Users">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>

<P class="mt-4 text-sm">Currently selected `key`: <strong>{selectedKey}</strong></P>

<!-- Programmatic tab switching -->
<div class="mt-4 space-x-2">
  <Button onclick={() => selectedKey = "profile"}>
    Go to Profile
  </Button>
  <Button onclick={() => selectedKey = "settings"}>
    Go to Settings
  </Button>
  <Button onclick={() => selectedKey = "users"}>
    Go to Users
  </Button>
</div>