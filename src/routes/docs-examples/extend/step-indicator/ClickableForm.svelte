<script lang="ts">
  import { StepIndicator, Button, Label, Input } from "flowbite-svelte";

  let currentStep = $state(1);
  const steps = ["Personal Info", "Contact Details", "Address", "Review", "Complete"];

  // Form data
  let personalInfo = $state({ firstName: "", lastName: "" });
  let contactInfo = $state({ email: "", phone: "" });
  let addressInfo = $state({ street: "", city: "", zip: "" });

  function next() {
    if (currentStep < steps.length) {
      currentStep++;
    }
  }

  function prev() {
    if (currentStep > 1) {
      currentStep--;
    }
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    next();
  }
</script>

<div class="space-y-6">
  <StepIndicator bind:currentStep {steps} color="primary" glow />

  <form onsubmit={handleSubmit} class="space-y-4">
    {#if currentStep === 1}
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-heading">Personal Information</h3>
        <div>
          <Label for="firstName" class="mb-2">First Name</Label>
          <Input type="text" id="firstName" bind:value={personalInfo.firstName} placeholder="John" required />
        </div>
        <div>
          <Label for="lastName" class="mb-2">Last Name</Label>
          <Input type="text" id="lastName" bind:value={personalInfo.lastName} placeholder="Doe" required />
        </div>
      </div>
    {:else if currentStep === 2}
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-heading">Contact Details</h3>
        <div>
          <Label for="email" class="mb-2">Email</Label>
          <Input type="email" id="email" bind:value={contactInfo.email} placeholder="john.doe@example.com" required />
        </div>
        <div>
          <Label for="phone" class="mb-2">Phone</Label>
          <Input type="tel" id="phone" bind:value={contactInfo.phone} placeholder="+1 (555) 123-4567" required />
        </div>
      </div>
    {:else if currentStep === 3}
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-heading">Address Information</h3>
        <div>
          <Label for="street" class="mb-2">Street Address</Label>
          <Input type="text" id="street" bind:value={addressInfo.street} placeholder="123 Main St" required />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label for="city" class="mb-2">City</Label>
            <Input type="text" id="city" bind:value={addressInfo.city} placeholder="New York" required />
          </div>
          <div>
            <Label for="zip" class="mb-2">ZIP Code</Label>
            <Input type="text" id="zip" bind:value={addressInfo.zip} placeholder="10001" required />
          </div>
        </div>
      </div>
    {:else if currentStep === 4}
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-heading">Review Your Information</h3>
        <div class="rounded-lg border border-default p-4">
          <dl class="space-y-2">
            <div class="flex justify-between">
              <dt class="font-medium text-body">Name:</dt>
              <dd class="text-heading">{personalInfo.firstName} {personalInfo.lastName}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium text-body">Email:</dt>
              <dd class="text-heading">{contactInfo.email}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium text-body">Phone:</dt>
              <dd class="text-heading">{contactInfo.phone}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium text-body">Address:</dt>
              <dd class="text-heading">{addressInfo.street}, {addressInfo.city} {addressInfo.zip}</dd>
            </div>
          </dl>
        </div>
        <p class="text-sm text-body">Click on any step indicator above to go back and edit your information.</p>
      </div>
    {:else if currentStep === 5}
      <div class="space-y-4 text-center">
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <svg class="h-6 w-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-heading">Registration Complete!</h3>
        <p class="text-body">Thank you for completing the form.</p>
      </div>
    {/if}

    <div class="flex gap-2">
      {#if currentStep > 1 && currentStep < 5}
        <Button type="button" onclick={prev} color="alternative">Previous</Button>
      {/if}
      {#if currentStep < 4}
        <Button type="submit">Next</Button>
      {:else if currentStep === 4}
        <Button type="submit" color="success">Complete</Button>
      {/if}
    </div>
  </form>
</div>
