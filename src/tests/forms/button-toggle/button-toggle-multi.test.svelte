<script lang="ts">
  import { ButtonToggle, ButtonToggleGroup } from "$lib";
</script>

<ButtonToggleGroup name="multi-test" multiSelect value={["option1"]}>
  <ButtonToggle value="option1">Option 1</ButtonToggle>
  <ButtonToggle value="option2">Option 2</ButtonToggle>
  <ButtonToggle value="option3">Option 3</ButtonToggle>
</ButtonToggleGroup>
