<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "$lib";
</script>

<ButtonToggleGroup name="preset-group" value="preset2" data-testid="preset-group">
  <ButtonToggle value="preset1" data-testid="preset-opt1">Preset 1</ButtonToggle>
  <ButtonToggle value="preset2" data-testid="preset-opt2">Preset 2</ButtonToggle>
  <ButtonToggle value="preset3" data-testid="preset-opt3">Preset 3</ButtonToggle>
</ButtonToggleGroup>
