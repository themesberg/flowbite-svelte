<script lang="ts">
  import { StepIndicator } from "$lib";

  let currentStep = $state(3);
</script>

<StepIndicator bind:currentStep data-testid="custom-current-step" />
