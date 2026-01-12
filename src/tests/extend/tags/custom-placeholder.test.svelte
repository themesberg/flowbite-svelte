<script lang="ts">
  import { Tags } from "$lib";

  let value: string[] = $state([]);
</script>

<Tags bind:value placeholder="Add a tag..." data-testid="custom-placeholder" />
