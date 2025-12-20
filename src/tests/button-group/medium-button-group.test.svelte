<script lang="ts">
  import ButtonGroup from "$lib/button-group/ButtonGroup.svelte";
  import Button from "$lib/buttons/Button.svelte";
</script>

<ButtonGroup size="md" data-testid="medium-group">
  {#snippet children()}
    <Button>Medium 1</Button>
    <Button>Medium 2</Button>
  {/snippet}
</ButtonGroup>
