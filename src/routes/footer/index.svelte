<script>
  import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mx-auto mt-8 justify-center">
  <h1 class="text-3xl dark:text-white w-full py-4 text-center">Footer Components</h1>
  <div class="p-4">
    <Card img="/images/footer.webp" header="DEFAULT" link="/footer/default" />
  </div>
  <div class="p-4">
    <Card img="/images/footer.webp" btnColor="green" header="LOGO FOOTER" link="/footer/logo" />
  </div>
  <div class="p-4">
    <Card img="/images/footer.webp" btnColor="red" header="SOCIALMEDIA" link="/footer/socialmedia" />
  </div>
  <div class="p-4">
    <Card img="/images/footer.webp" btnColor="blue" header="SITEMAP" link="/footer/sitemap" />
  </div>
</div>
