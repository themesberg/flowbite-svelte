<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "$lib";
</script>

<ButtonToggleGroup name="color-group" color="secondary" data-testid="color-group">
  <ButtonToggle value="c1" color="red" data-testid="color-opt1">Color 1</ButtonToggle>
  <ButtonToggle value="c2" color="green" data-testid="color-opt2">Color 2</ButtonToggle>
</ButtonToggleGroup>
