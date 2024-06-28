<script lang="ts">
  import { Indicator, Button, Avatar, Badge } from '$lib';
  import { EnvelopeSolid, CheckCircleSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Indicator</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default indicator</H2>

<CodeWrapper class="flex justify-center gap-4">
  <Indicator color="gray" />
  <Indicator color="dark" />
  <Indicator color="orange" />
  <Indicator color="blue" />
  <Indicator color="green" />
  <Indicator color="red" />
  <Indicator color="purple" />
  <Indicator color="indigo" />
  <Indicator color="yellow" />
  <Indicator color="teal" />
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultindicator.md'] as string} />

<H2>Legend indicator</H2>

<CodeWrapper class="flex justify-center gap-4">
  <span class="flex items-center"
    ><Indicator size="sm" color="orange" class="me-1.5" />Visitors</span
  >
  <span class="flex items-center"
    ><Indicator size="sm" color="purple" class="me-1.5" />Sessions</span
  >
  <span class="flex items-center"
    ><Indicator size="sm" color="indigo" class="me-1.5" />Customers</span
  >
  <span class="flex items-center"
    ><Indicator size="sm" color="teal" class="me-1.5" />Revenue</span
  >
</CodeWrapper>

<H2>Indicator count</H2>

<CodeWrapper class="flex justify-center">
  <Button size="lg" btnclass="relative">
    <EnvelopeSolid class="me-2 h-4 w-4 text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    Messages
    <Indicator color="red" border size="xl" placement="top-right">
      <span class="text-xs font-bold text-white">8</span>
    </Indicator>
  </Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/indicator-count.md'] as string} />

<H2>Status indicator</H2>

<CodeWrapper class="flex justify-center">
  <Avatar src="/images/profile-picture-5.webp" dot={{ color: 'green', size: 'lg', placement: 'top-right' }} />
  <Avatar src="/images/profile-picture-5.webp" dot={{ color: 'red', size: 'lg', placement: 'top-right' }} />
</CodeWrapper>

<H2>Badge indicator</H2>
<CodeWrapper class="flex gap-2">
  <ul class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700 w-full">
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <Avatar src="/images/profile-picture-5.webp" alt="Neil image" />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Neil Sims</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
        </div>
        <Badge color="green" rounded class="px-2.5 py-0.5">
          <Indicator color="green" size="xs" class="me-1" />Available
        </Badge>
      </div>
    </li>
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <div class="flex-shrink-0">
          <Avatar src="/images/profile-picture-4.webp" alt="Bonnie image" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Bonnie Green</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
        </div>
        <Badge color="red" rounded class="px-2.5 py-0.5">
          <Indicator color="red" size="xs" class="me-1" />Unavailable
        </Badge>
      </div>
    </li>
  </ul>
</CodeWrapper>

<H2>Stepper indicator</H2>
<CodeWrapper class="space-y-8">
  <ol class="flex items-center">
    <li class="relative w-full mb-6">
      <div class="flex items-center">
        <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
          <CheckCircleSolid class="w-6 h-6 text-primary-600 dark:text-primary-300" />
        </Indicator>
        <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
      </div>
    </li>
    <li class="relative w-full mb-6">
      <div class="flex items-center">
        <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
          <CheckCircleSolid class="w-6 h-6 text-primary-600 dark:text-primary-300" />
        </Indicator>
        <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
      </div>
    </li>
    <li class="relative w-full mb-6">
      <div class="flex items-center">
        <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
          <CheckCircleSolid class="w-6 h-6 text-primary-600 dark:text-primary-300" />
        </Indicator>
        <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
      </div>
    </li>
    <li class="relative w-full mb-6">
      <div class="flex items-center">
        <Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
          <CheckCircleSolid class="w-6 h-6 text-gray-800 dark:text-gray-300" />
        </Indicator>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
      </div>
    </li>
  </ol>
  <ol class="flex items-center">
    <li class="relative w-full mb-6">
      <div class="flex items-center">
        <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
          <Indicator color="orange" />
        </Indicator>
        <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
      </div>
    </li>
    <li class="relative w-full mb-6">
      <div class="flex items-center">
        <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
          <Indicator color="orange" />
        </Indicator>
        <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
      </div>
    </li>
    <li class="relative w-full mb-6">
      <div class="flex items-center">
        <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
          <Indicator color="orange" />
        </Indicator>
        <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
      </div>
    </li>
    <li class="relative w-full mb-6">
      <div class="flex items-center">
        <Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
          <Indicator color="dark" class="dark:!bg-gray-300" />
        </Indicator>
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
      </div>
    </li>
  </ol>
</CodeWrapper>

<H2>Indicator position</H2>

<CodeWrapper class="flex justify-center">
  <div
    class="borer relative h-56 w-56 rounded-lg border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
  >
    <Indicator placement="top-left" color="gray" />
    <Indicator placement="top-center" color="dark" />
    <Indicator placement="top-right" color="orange" />
    <Indicator placement="center-left" color="green" />
    <Indicator placement="center" color="red" />
    <Indicator placement="center-right" color="purple" />
    <Indicator placement="bottom-left" color="indigo" />
    <Indicator placement="bottom-center" color="yellow" />
    <Indicator placement="bottom-right" color="teal" />
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/position.md'] as string} />

