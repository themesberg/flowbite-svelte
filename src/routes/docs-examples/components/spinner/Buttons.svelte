<script lang="ts">
  import { Spinner, Button } from "flowbite-svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Button>
    <Spinner class="me-3" size="4" color="blue" />
    Loading ...
  </Button>
  <Button outline color="gray">
    <Spinner class="me-3" size="4" />
    Loading ...
  </Button>
</div>
