<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "$lib";

  const presetValues = ["multi-p1", "multi-p3"];
</script>

<ButtonToggleGroup name="preset-multi" multiSelect value={presetValues} data-testid="preset-multi-group">
  <ButtonToggle value="multi-p1" data-testid="preset-multi-opt1">Multi Preset 1</ButtonToggle>
  <ButtonToggle value="multi-p2" data-testid="preset-multi-opt2">Multi Preset 2</ButtonToggle>
  <ButtonToggle value="multi-p3" data-testid="preset-multi-opt3">Multi Preset 3</ButtonToggle>
</ButtonToggleGroup>
