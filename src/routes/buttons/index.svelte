<script>
  import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mx-auto mt-8 justify-center">
  <h1 class="text-3xl dark:text-white w-full py-4 text-center">Button Components</h1>
  <div class="p-4">
    <Card img="/images/buttons.webp" btnColor="blue" header="DEFAULT" link="/buttons/default" />
  </div>
  <div class="p-4">
    <Card img="/images/buttons.webp" btnColor="green" header="COLORED SHADOW" link="/buttons/colored-shadow" />
  </div>
  <div class="p-4">
    <Card img="/images/buttons.webp" btnColor="pink" header="GRADIENT DUOTONE" link="/buttons/gradient-duotone" />
  </div>
  <div class="p-4">
    <Card img="/images/buttons.webp" btnColor="purple" header="GRADIENT MONOCHROME" link="/buttons/gradient-monochrome" />
  </div>
  <div class="p-4">
    <Card img="/images/buttons.webp" btnColor="gray" header="GRADIENT OUTLINE" link="/buttons/gradient-outline" />
  </div>
  <div class="p-4">
    <Card img="/images/buttons.webp" btnColor="indigo" header="OUTLINED" link="/buttons/outlined" />
  </div>
  <div class="p-4">
    <Card img="/images/buttons.webp" btnColor="red" header="ROUNDED" link="/buttons/rounded" />
  </div>
</div>
