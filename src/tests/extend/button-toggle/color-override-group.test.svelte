<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "$lib";
</script>

<!-- Group has NO color prop, so buttons should use their own colors -->
<ButtonToggleGroup name="color-override-group" data-testid="color-override-group">
  <ButtonToggle value="c1" color="red" data-testid="color-override-opt1">Red</ButtonToggle>
  <ButtonToggle value="c2" color="green" data-testid="color-override-opt2">Green</ButtonToggle>
</ButtonToggleGroup>
