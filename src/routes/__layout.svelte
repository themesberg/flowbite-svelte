<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import { Navbar } from "$lib/index";
</script>

<div class="mx-auto p-4">
  <Navbar textsize="lg" />
  <div class="mt-8">
    <slot />
  </div>
</div>
