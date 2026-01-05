<script lang="ts" module>
  export const testState = {
    selectedValue: null as string | string[] | null,
    callCount: 0
  };
</script>

<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "$lib";

  function handleSelect(value: string | string[] | null) {
    testState.selectedValue = value;
    testState.callCount++;
  }
</script>

<ButtonToggleGroup name="callback-group" onSelect={handleSelect} data-testid="callback-group">
  <ButtonToggle value="cb1" data-testid="cb-opt1">Callback 1</ButtonToggle>
  <ButtonToggle value="cb2" data-testid="cb-opt2">Callback 2</ButtonToggle>
</ButtonToggleGroup>
