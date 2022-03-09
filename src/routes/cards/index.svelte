<script>
  import { Card } from "flowbite-svelte";
</script>

<div class="container flex flex-wrap mx-auto mt-8 justify-center">
  <div class="p-4">
    <Card img="/images/cards.webp" header="CARD" link="/cards/card" />
  </div>
  <div class="p-4">
    <Card img="/images/cards.webp" header="CTA CARD" link="/cards/cta" />
  </div>
  <div class="p-4">
    <Card
      img="/images/cards.webp"
      header="ECOMMERCE CARD"
      link="/cards/ecommerce"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/cards.webp"
      header="INTERACTIVE CARD"
      link="/cards/interactive"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/cards.webp"
      header="HORIAONTAL CARD"
      link="/cards/horizontal"
    />
  </div>
  <div class="p-4">
    <Card img="/images/cards.webp" header="LIST CARD" link="/cards/list" />
  </div>
</div>
