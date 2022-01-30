<script>
  import { List } from "$lib/index";

  let lists = [
    {
      title: "All Modals",
      link: "/modals/all-modals",
    },
    {
      title: "Small Modal",
      link: "/modals/small",
    },

    {
      title: "Medium Modal",
      link: "/modals/medium",
    },
    {
      title: "Large Modal",
      link: "/modals/large",
    },
    {
      title: "Extra-large Modal",
      link: "/modals/extra-large",
    },
    {
      title: "Signin Modal",
      link: "/modals/signin",
    },
  ];
</script>

<div class="container mx-auto p-8">
  <h1 class="text-4xl">MODALS</h1>

  <List {lists} />
</div>
