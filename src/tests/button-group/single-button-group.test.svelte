<script lang="ts">
  import ButtonGroup from "$lib/button-group/ButtonGroup.svelte";
  import Button from "$lib/buttons/Button.svelte";
</script>

<ButtonGroup data-testid="single-button-group">
  {#snippet children()}
    <Button>Single Button</Button>
  {/snippet}
</ButtonGroup>
