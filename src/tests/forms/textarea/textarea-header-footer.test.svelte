<script lang="ts">
  import { Textarea } from "$lib";

  let value = $state("");
</script>

<Textarea bind:value placeholder="Enter text here">
  {#snippet header()}
    <div class="header-content">Header Text</div>
  {/snippet}
  {#snippet footer()}
    <div class="footer-content">Footer Text</div>
  {/snippet}
</Textarea>
