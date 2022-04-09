<script>
  import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mx-auto mt-8 justify-center">
  <h1 class="text-3xl dark:text-white w-full py-4 text-center">Badge Components</h1>
  <div class="p-4">
    <Card img="/images/badges.webp" btnColor="pink" header="DEFAULT" link="/badges/default" />
  </div>
  <div class="p-4">
    <Card img="/images/badges.webp" btnColor="green" header="BADGE WITH ICON" link="/badges/badge-icon" />
  </div>
  <div class="p-4">
    <Card img="/images/badges.webp" btnColor="blue" header="BADGE WITH LINK" link="/badges/badge-link" />
  </div>
</div>
