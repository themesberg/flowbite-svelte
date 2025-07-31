<script>
  import { Listgroup } from "flowbite-svelte";
  import { AdjustmentsHorizontalSolid, DownloadSolid, MessagesSolid, UserCircleSolid } from "flowbite-svelte-icons";
  let icons = [
    { name: "Profile", Icon: UserCircleSolid },
    { name: "Settings", Icon: AdjustmentsHorizontalSolid },
    { name: "Messages", Icon: MessagesSolid },
    { name: "Download", Icon: DownloadSolid }
  ];
</script>

<Listgroup active items={icons} class="w-48" onclick={console.log} />