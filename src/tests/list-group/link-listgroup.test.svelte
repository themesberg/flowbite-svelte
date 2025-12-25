<script lang="ts">
  import { Listgroup } from "$lib";

  const items = [
    { name: "Link 1", href: "/link1" },
    { name: "Link 2", href: "/link2" },
    { name: "Link 3", href: "/link3" }
  ];
</script>

<Listgroup {items} />
