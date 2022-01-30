<script>
  import { List } from "$lib/index";

  let lists = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Alerts",
      link: "/alerts",
      external: true,
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
</script>

<div class="container mx-auto p-8">
  <List {lists} />
</div>
