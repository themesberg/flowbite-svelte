<script lang="ts">
  import ButtonGroup from "$lib/button-group/ButtonGroup.svelte";
  import Button from "$lib/buttons/Button.svelte";
</script>

<ButtonGroup size="sm" data-testid="small-group">
  {#snippet children()}
    <Button>Small 1</Button>
    <Button>Small 2</Button>
  {/snippet}
</ButtonGroup>
