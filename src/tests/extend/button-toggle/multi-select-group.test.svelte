<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "$lib";
</script>

<ButtonToggleGroup name="multi-group" multiSelect data-testid="multi-group">
  <ButtonToggle value="opt1" data-testid="multi-opt1">Multi 1</ButtonToggle>
  <ButtonToggle value="opt2" data-testid="multi-opt2">Multi 2</ButtonToggle>
  <ButtonToggle value="opt3" data-testid="multi-opt3">Multi 3</ButtonToggle>
</ButtonToggleGroup>
