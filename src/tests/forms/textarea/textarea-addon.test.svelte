<script lang="ts">
  import { Textarea } from "$lib";

  let value = $state("");
</script>

<Textarea bind:value placeholder="Enter text here">
  {#snippet addon()}
    <div class="addon-content">Addon</div>
  {/snippet}
</Textarea>
