<script lang="ts">
  import { Indicator } from '$lib';
  import { CheckCircleSolid } from 'flowbite-svelte-icons';
</script>

<ol class="flex items-center">
  <li class="relative mb-6 w-full">
    <div class="flex items-center">
      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">
        <CheckCircleSolid class="h-6 w-6 text-primary-600 dark:text-primary-300" />
      </Indicator>
      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
    </div>
  </li>
  <li class="relative mb-6 w-full">
    <div class="flex items-center">
      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">
        <CheckCircleSolid class="h-6 w-6 text-primary-600 dark:text-primary-300" />
      </Indicator>
      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
    </div>
  </li>
  <li class="relative mb-6 w-full">
    <div class="flex items-center">
      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">
        <CheckCircleSolid class="h-6 w-6 text-primary-600 dark:text-primary-300" />
      </Indicator>
      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
    </div>
  </li>
  <li class="relative mb-6 w-full">
    <div class="flex items-center">
      <Indicator size="xl" color="blue" class="z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900">
        <CheckCircleSolid class="h-6 w-6 text-gray-800 dark:text-gray-300" />
      </Indicator>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
    </div>
  </li>
</ol>
<ol class="flex items-center">
  <li class="relative mb-6 w-full">
    <div class="flex items-center">
      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">
        <Indicator color="orange" />
      </Indicator>
      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
    </div>
  </li>
  <li class="relative mb-6 w-full">
    <div class="flex items-center">
      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">
        <Indicator color="orange" />
      </Indicator>
      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
    </div>
  </li>
  <li class="relative mb-6 w-full">
    <div class="flex items-center">
      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">
        <Indicator color="orange" />
      </Indicator>
      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
    </div>
  </li>
  <li class="relative mb-6 w-full">
    <div class="flex items-center">
      <Indicator size="xl" class="z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900">
        <Indicator color="emerald" class="dark:!bg-gray-300" />
      </Indicator>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
    </div>
  </li>
</ol>