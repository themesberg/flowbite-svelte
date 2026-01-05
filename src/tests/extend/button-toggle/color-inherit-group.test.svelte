<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "$lib";
</script>

<ButtonToggleGroup name="color-inherit-group" color="blue" data-testid="color-inherit-group">
  <ButtonToggle value="ci1" data-testid="color-inherit-opt1">Option 1</ButtonToggle>
  <ButtonToggle value="ci2" data-testid="color-inherit-opt2">Option 2</ButtonToggle>
</ButtonToggleGroup>
