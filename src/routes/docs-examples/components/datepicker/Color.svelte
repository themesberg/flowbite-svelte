<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker color="success" classes={{ label: "hover:text-blue-700!", dayButton: "hover:text-blue-400", title: "text-blue-800", monthButton: "text-blue-700" }} title="Select your preferred date" />
</div>
