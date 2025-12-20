<script lang="ts">
  import ButtonGroup from "$lib/button-group/ButtonGroup.svelte";
  import Button from "$lib/buttons/Button.svelte";
</script>

<ButtonGroup size="lg" data-testid="large-group">
  {#snippet children()}
    <Button>Large 1</Button>
    <Button>Large 2</Button>
  {/snippet}
</ButtonGroup>
