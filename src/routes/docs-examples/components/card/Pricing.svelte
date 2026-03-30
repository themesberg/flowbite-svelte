<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<Card class="p-4 sm:p-8 md:p-10">
  <h5 class="text-body mb-4 text-xl font-medium">Standard plan</h5>
  <div class="text-heading flex items-baseline">
    <span class="text-3xl font-semibold">$</span>
    <span class="text-5xl font-extrabold tracking-tight">49</span>
    <span class="text-body ms-1 text-xl font-normal">/month</span>
  </div>
  <!-- List -->
  <ul class="my-7 space-y-4">
    <li class="flex space-x-2 rtl:space-x-reverse">
      <CheckCircleSolid class="text-fg-brand h-4 w-4" />
      <span class="text-body text-base leading-tight font-normal">2 team members</span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse">
      <CheckCircleSolid class="text-fg-brand h-4 w-4" />
      <span class="text-body text-base leading-tight font-normal">20GB Cloud storage</span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse">
      <CheckCircleSolid class="text-fg-brand h-4 w-4" />
      <span class="text-body text-base leading-tight font-normal">Integration help</span>
    </li>
    <li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
      <CheckCircleSolid class="text-body-subtle h-4 w-4" />
      <span class="text-body text-base leading-tight font-normal">Sketch Files</span>
    </li>
    <li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
      <CheckCircleSolid class="text-body-subtle h-4 w-4" />
      <span class="text-body text-base leading-tight font-normal">API Access</span>
    </li>
    <li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
      <CheckCircleSolid class="text-body-subtle h-4 w-4" />
      <span class="text-body text-base leading-tight font-normal">Complete documentation</span>
    </li>
    <li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
      <CheckCircleSolid class="text-body-subtle h-4 w-4" />
      <span class="text-body text-base leading-tight font-normal">24×7 phone & email support</span>
    </li>
  </ul>
  <Button class="w-full">Choose plan</Button>
</Card>
