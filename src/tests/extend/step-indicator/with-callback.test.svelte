<script lang="ts" module>
  export const testState = $state({
    current: 0,
    last: 0,
    callCount: 0
  });
</script>

<script lang="ts">
  import { StepIndicator } from "$lib";

  function handleStepClick(event: { current: number; last: number }) {
    testState.current = event.current;
    testState.last = event.last;
    testState.callCount++;
  }
</script>

<StepIndicator onStepClick={handleStepClick} data-testid="with-callback" />
