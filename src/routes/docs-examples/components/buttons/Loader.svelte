<script lang="ts">
  import { Button, Spinner } from "flowbite-svelte";
</script>

<Button>
  <Spinner class="me-3" size="4" color="gray" />Loading ...
</Button>
<Button color="alternative">
  <Spinner class="me-3" size="4" />Loading ...
</Button>
