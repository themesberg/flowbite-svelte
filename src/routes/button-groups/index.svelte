<script>
  import { ButtonGroup, ButtonGroupOutline } from "$lib/index";
  import {
    UserCircleIconSolid,
    AdjustmentsIconSolid,
    CloudDownloadIconSolid,
  } from "@codewithshin/svelte-heroicons";
  let buttons = [
    {
      name: "Profile",
      link: "/",
      icon: UserCircleIconSolid,
    },
    {
      name: "Settings",
      link: "/",
      icon: AdjustmentsIconSolid,
    },
    {
      name: "Download",
      link: "/",
      icon: CloudDownloadIconSolid,
    },
  ];
</script>

<ButtonGroup {buttons} />
<ButtonGroupOutline {buttons} />
