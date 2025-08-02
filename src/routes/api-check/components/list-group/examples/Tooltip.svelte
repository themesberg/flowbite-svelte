<script lang="ts">
  import { Listgroup, ListgroupItem, Tooltip } from "flowbite-svelte";
  import { BellOutline, ClockOutline, TrashBinOutline } from "flowbite-svelte-icons";
</script>

<Listgroup horizontal active>
  <ListgroupItem>
    <BellOutline />
  </ListgroupItem>
  <Tooltip>Tooltip bell</Tooltip>
  <ListgroupItem>
    <ClockOutline />
  </ListgroupItem>
  <Tooltip>Tooltip clock</Tooltip>
  <ListgroupItem id="trash">
    <TrashBinOutline />
  </ListgroupItem>
</Listgroup>
<Tooltip triggeredBy="#trash">Tooltip trash</Tooltip>

<Listgroup horizontal active>
  <ListgroupItem id="profile">Profile</ListgroupItem>
  <ListgroupItem id="settings">Settings</ListgroupItem>
  <ListgroupItem id="message">Messages</ListgroupItem>
</Listgroup>
<Tooltip triggeredBy="#profile">Tooltip profile</Tooltip>
<Tooltip triggeredBy="#settings">Tooltip settings</Tooltip>
<Tooltip triggeredBy="#message">Tooltip messages</Tooltip>
