<script lang="ts">
  import ButtonGroup from "$lib/button-group/ButtonGroup.svelte";
  import Button from "$lib/buttons/Button.svelte";
</script>

<ButtonGroup class="custom-group-class" data-testid="custom-class-group">
  {#snippet children()}
    <Button>First</Button>
    <Button>Second</Button>
  {/snippet}
</ButtonGroup>
