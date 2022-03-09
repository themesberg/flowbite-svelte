<script>
  import { Card } from "flowbite-svelte";
</script>

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <div class="p-4">
    <Card
      img="/images/tabs.webp"
      header="Default Tabs"
      link="/tabs/default-tabs"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/tabs.webp"
      header="Interactive Tabs"
      link="/tabs/interactive-tabs"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/tabs.webp"
      header="Multiple Interactive Tabs"
      link="/tabs/multiple-interactive-tabs"
    />
  </div>
  <div class="p-4">
    <Card img="/images/tabs.webp" header="Pill Tabs" link="/tabs/pilltabs" />
  </div>
</div>
