<script lang="ts">
  import { Tags } from "$lib";

  let value: string[] = $state([]);
</script>

<Tags bind:value availableTags={["JavaScript", "TypeScript"]} showAvailableTags data-testid="show-available" />
