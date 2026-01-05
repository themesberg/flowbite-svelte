<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "$lib";
</script>

<ButtonToggleGroup name="size-group" size="lg" data-testid="size-group">
  <ButtonToggle value="s1" data-testid="size-opt1">Size 1</ButtonToggle>
  <ButtonToggle value="s2" data-testid="size-opt2">Size 2</ButtonToggle>
</ButtonToggleGroup>
