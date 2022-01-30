<script>
  import { List } from "$lib/index";

  let lists = [
    {
      title: "Default Tabs",
      link: "/tabs/default-tabs",
      external: true,
    },
    {
      title: "Interactive Tabs",
      link: "/tabs/interactive-tabs",
      external: true,
    },
    {
      title: "Multiple interactive",
      link: "/tabs/multiple-interactive-tabs",
      external: true,
    },
    {
      title: "Pill Tabs",
      link: "/tabs/pilltabs",
      external: true,
    },
  ];
</script>

<div class="container mx-auto p-8">
  <List {lists} />
  <ul>
    <li>
      <a href="/tabs/interactive-tabs" rel="external">Interactive tabs</a>
    </li>
    <li>
      <a href="/tabs/multiple-interactive-tabs" rel="external"
        >Multiple Interactive Tabs</a
      >
    </li>
  </ul>
</div>
