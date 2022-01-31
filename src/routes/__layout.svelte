<script>
  import { Navbar } from "$lib/index";
</script>

<div class="mx-auto p-8">
  <Navbar textsize="lg" />
  <div class="mt-4">
    <slot />
  </div>
</div>
