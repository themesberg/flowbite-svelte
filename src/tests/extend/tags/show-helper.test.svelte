<script lang="ts">
  import { Tags } from "$lib";

  let value: string[] = $state([]);
</script>

<Tags bind:value unique showHelper data-testid="show-helper" />
