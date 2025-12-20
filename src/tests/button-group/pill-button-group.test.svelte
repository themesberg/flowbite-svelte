<script lang="ts">
  import ButtonGroup from "$lib/button-group/ButtonGroup.svelte";
  import Button from "$lib/buttons/Button.svelte";
</script>

<ButtonGroup data-testid="pill-group">
  {#snippet children()}
    <Button pill>Left</Button>
    <Button pill>Center</Button>
    <Button pill>Right</Button>
  {/snippet}
</ButtonGroup>
