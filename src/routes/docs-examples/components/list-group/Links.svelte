<script lang="ts">
  import { Listgroup } from "flowbite-svelte";
  let links = [
    { name: "Accordions", href: "/docs/components/accordion", current: true },
    { name: "Alerts", href: "/docs/components/alert" },
    { name: "Badges", href: "/docs/components/badge" },
    { name: "Breadcrumbs", href: "/docs/components/breadcrumb", attrs: { target: "_blank" } }
  ];
</script>

<Listgroup active items={links} class="w-48" />
