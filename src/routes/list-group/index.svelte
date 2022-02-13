<script>
  import { List } from "$lib/index";
  import {
    AdjustmentsIconSolid,
    UserCircleIconSolid,
    InboxInIconSolid,
    CloudDownloadIconSolid,
  } from "@codewithshin/svelte-heroicons";

  let lists = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Alerts",
      link: "/alert",
    },
    {
      title: "Cards",
      link: "/cards",
    },
    {
      title: "List Group",
      link: "/list-group/list",
    },
    {
      title: "Modals",
      link: "/modals",
    },
    {
      title: "Tabs",
      link: "/tabs",
    },
  ];

  let lists2 = [
    {
      title: "Profile",
      icon: UserCircleIconSolid,
      link: "/",
    },
    {
      title: "Settings",
      icon: AdjustmentsIconSolid,
      link: "/",
    },
    {
      title: "Messages",
      icon: InboxInIconSolid,
      link: "/",
    },
    {
      title: "Download",
      icon: CloudDownloadIconSolid,
      link: "/",
    },
  ];
</script>

<div class="container mx-auto p-8">
  <List {lists} />
</div>

<div class="container mx-auto p-8">
  <List lists={lists2} />
</div>
