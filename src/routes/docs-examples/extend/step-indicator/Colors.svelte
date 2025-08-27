<script>
  import { StepIndicator } from "flowbite-svelte";
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">Gray</div>
  <StepIndicator {currentStep} {steps} color="gray" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Blue/Default</div>
  <StepIndicator {currentStep} {steps} color="blue" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">Red</div>
  <StepIndicator {currentStep} {steps} color="red" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">Green</div>
  <StepIndicator {currentStep} {steps} color="green" />
</div>

<div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Yellow</div>
<div class="my-4">
  <StepIndicator {currentStep} {steps} color="yellow" />
</div>

<div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-400">Indigo</div>
<div class="my-4">
  <StepIndicator {currentStep} {steps} color="indigo" />
</div>

<div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-400">Purple</div>
<div class="my-4">
  <StepIndicator {currentStep} {steps} color="purple" />
</div>

<div class="mb-1 text-base font-medium text-pink-700 dark:text-pink-400">Pink</div>
<div class="my-4">
  <StepIndicator {currentStep} {steps} color="pink" />
</div>
