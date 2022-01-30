<script>
  import { List } from "$lib/index";

  let lists = [
    {
      title: "Card",
      link: "/cards/card",
    },
    {
      title: "Interactive Tabs",
      link: "/cards/interactive-card",
    },
    {
      title: "List Card",
      link: "/cards/list-card",
    },
    {
      title: "Interactive Card",
      link: "/tabs/multiple-interactive-tabs",
    },
    {
      title: "Horizontal Card",
      link: "/cards/horizontal-card",
    },
    {
      title: "Ecommerce Card",
      link: "/cards/ecommerce-card",
    },
    {
      title: "CTA Card",
      link: "/cards/cta-card",
    },
  ];
</script>

<div class="container mx-auto p-8">
  <h1 class="text-3xl">CARDS</h1>

  <List {lists} />
</div>
