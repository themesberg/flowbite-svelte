<script lang="ts">
  import ButtonGroup from "$lib/button-group/ButtonGroup.svelte";
  import Button from "$lib/buttons/Button.svelte";
</script>

<ButtonGroup disabled data-testid="disabled-group">
  <Button data-testid="disabled-btn-1">Button 1</Button>
  <Button data-testid="disabled-btn-2">Button 2</Button>
  <Button data-testid="disabled-btn-3">Button 3</Button>
</ButtonGroup>
