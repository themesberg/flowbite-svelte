<script>
  import { Listgroup } from "flowbite-svelte";
  let simpleList = ["Profile", "Settings", "Messages", "Download"];
</script>

<Listgroup items={simpleList} class="w-48" />