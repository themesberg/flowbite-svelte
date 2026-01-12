<script lang="ts">
  import { Tags } from "$lib";

  let value: string[] = $state(["Tag1", "Tag2"]);
</script>

<Tags bind:value data-testid="preset-tags" />
