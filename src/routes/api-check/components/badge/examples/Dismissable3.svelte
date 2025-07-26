<script lang="ts">
  import { Badge } from "flowbite-svelte";

  function handleClose(event: Event) {
    event.preventDefault();
    alert("Badge dismissed");
  }
</script>

<Badge dismissable large onclose={handleClose}>Default</Badge>