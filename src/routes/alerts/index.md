<script>
  import { Card } from "flowbite-svelte";
</script>

<div class="container flex flex-wrap mx-auto mt-8 justify-center">
  <div class="p-4">
    <Card
      img="/images/alerts.webp"
      header="DEFAULT ALERTS"
      link="/alerts/default-alert"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/alerts.webp"
      header="BORDER ALERTS"
      link="/alerts/border-alert"
    />
  </div>
    <div class="p-4">
    <Card
      img="/images/alerts.webp"
      header="INFORMAATION ALERTS"
      link="/alerts/information-alert"
    />
  </div>
</div>
