<script>
  import { ButtonGroup, ButtonGroupLink, ButtonGroupOutline } from "$lib/index";
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

      icon: CloudDownloadIconSolid,
    },
  ];
</script>

<ButtonGroup {buttons} />
<ButtonGroupLink />
<ButtonGroupOutline />
