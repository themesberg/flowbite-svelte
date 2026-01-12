<script lang="ts">
  import { Tags } from "$lib";

  let value: string[] = $state(["foo", "bar"]);
</script>

<Tags bind:value disabled data-testid="disabled-tags" />
