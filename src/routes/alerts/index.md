<script>
  import { Card }from '$lib/index';
</script>

<div class="container flex flex-wrap mx-auto mt-8 justify-center">
  <div class="p-4">
    <Card
      img="/images/alerts.webp"
      btnColor="purple"
      header="DEFAULT ALERTS"
      link="/alerts/default-alert"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/alerts.webp"
      btnColor="red"
      header="BORDER ALERTS"
      link="/alerts/border-alert"
    />
  </div>
    <div class="p-4">
    <Card
      img="/images/alerts.webp"
      btnColor="blue"
      header="INFORMAATION ALERTS"
      link="/alerts/information-alert"
    />
  </div>
</div>
