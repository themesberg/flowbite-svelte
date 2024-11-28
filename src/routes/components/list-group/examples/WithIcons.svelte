<script lang="ts">
  import { Listgroup, type ListGroupItemType } from "$lib";
  import { AdjustmentsHorizontalFlowbite, DownloadFlowbite, MessagesFlowbite, UserCircleFlowbite } from "svelte-animated-icons";
  let iconList: ListGroupItemType[] = [
    { name: "Profile", Icon: UserCircleFlowbite, mycustomfield: "data1" },
    {
      name: "Settings",
      Icon: AdjustmentsHorizontalFlowbite,
      mycustomfield: "data2"
    },
    { name: "Messages", Icon: MessagesFlowbite, mycustomfield: "data3" },
    { name: "Download", Icon: DownloadFlowbite, mycustomfield: "data4" }
  ];

  const handleClick = (e?: MouseEvent) => {
    if (e?.target instanceof HTMLElement) {
      console.log(e.target.attributes.getNamedItem("mycustomfield")?.value);
    } else {
      console.warn("Unexpected event target type. Cannot access attributes.");
    }
  };
</script>

<div class="flex justify-center">
  <Listgroup active items={iconList} iconClass="pr-1.5" class="w-48" onclick={handleClick} />
</div>
