<script lang="ts">
  import { InputAddon } from "$lib";
  import { setContext } from "svelte";

  // Set background context to true
  setContext("background", true);
</script>

<InputAddon>With Background Context</InputAddon>
