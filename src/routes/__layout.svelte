<script>
  import "../app.css";
  import "@themesberg/flowbite/dist/flowbite.css";
  import { Navbar } from "$lib/index";
</script>

<div class="mx-auto p-2">
  <Navbar textsize="lg">
    <div class="mt-4">
      <slot />
    </div>
  </Navbar>
</div>

<slot />
