<script lang="ts">
  import { Indicator, indicator, Button, Avatar, Badge, Label, Radio, type IndicatorProps } from '$lib';
  import { EnvelopeSolid, CheckCircleSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  // color, size, rounded, border, placement and offset
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const colors: Indicator['color'][] = Object.keys(indicator.variants.color);
  const positions = ['top-left', 'top-center', 'top-right', 'center-left', 'center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'];
  let color: IndicatorProps['color'] = $state('red');
  let size: IndicatorProps['size'] = $state('md');
  let border: IndicatorProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let placement: IndicatorProps['placement'] = $state('top-left');
</script>

<H1>Indicator</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default indicator</H2>
<CodeWrapper class="flex justify-center gap-4">
  <Indicator />
  <Indicator color="gray" />
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

<H2>Reactive indicator</H2>
<CodeWrapper>
  <div class="borer relative h-56 w-56 rounded-lg border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
    <Indicator {color} {size} {border} {placement} />
  </div>
  <div class="mt-8 space-y-4">
    <div class="flex flex-wrap space-x-2">
      <Label class="mb-4 w-full font-bold">Color</Label>
      {#each colors as colorOption}
        <Radio labelClass="w-24 my-1" name="color" bind:group={color} color={colorOption as IndicatorProps['color']} value={colorOption}>{colorOption}</Radio>
      {/each}
    </div>
    <div class="flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Size:</Label>
      {#each sizes as sizeOption}
        <Radio labelClass="w-24 my-1" name="size" bind:group={size} value={sizeOption}>{sizeOption}</Radio>
      {/each}
    </div>
    <div class="flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Placement:</Label>
      {#each positions as positionOption}
        <Radio labelClass="w-32 my-1" name="placement" bind:group={placement} value={positionOption}>{positionOption}</Radio>
      {/each}
    </div>
    <Button onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
  </div>
</CodeWrapper>

<H2>Color</H2>
<HighlightCompo code={modules['./md/color.md'] as string} />

<H2>Size</H2>
<HighlightCompo code={modules['./md/size.md'] as string} />

<H2>Placement</H2>
<HighlightCompo code={modules['./md/placement.md'] as string} />

<H2>Legend indicator</H2>
<CodeWrapper class="flex flex-wrap justify-start gap-4 md:justify-center ">
  <span class="flex items-center"><Indicator size="sm" color="orange" class="me-1.5" />Visitors</span>
  <span class="flex items-center"><Indicator size="sm" color="purple" class="me-1.5" />Sessions</span>
  <span class="flex items-center"><Indicator size="sm" color="indigo" class="me-1.5" />Customers</span>
  <span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Revenue</span>
</CodeWrapper>
<HighlightCompo code={modules['./md/legend.md'] as string} />

<H2>Indicator count</H2>

<CodeWrapper class="flex justify-center">
  <Button size="lg" class="relative">
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
<HighlightCompo code={modules['./md/status.md'] as string} />

<H2>Badge indicator</H2>
<CodeWrapper class="flex gap-2">
  <ul class="w-full max-w-sm divide-y divide-gray-200 dark:divide-gray-700">
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <Avatar src="/images/profile-picture-5.webp" alt="Neil image" />
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</p>
          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
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
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p>
          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
        </div>
        <Badge color="red" rounded class="px-2.5 py-0.5">
          <Indicator color="red" size="xs" class="me-1" />Unavailable
        </Badge>
      </div>
    </li>
  </ul>
</CodeWrapper>
<HighlightCompo code={modules['./md/badge-indicator.md'] as string} />

<H2>Stepper indicator</H2>
<CodeWrapper class="space-y-8">
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
</CodeWrapper>
<HighlightCompo code={modules['./md/stepper.md'] as string} />

<H2>Indicator position</H2>

<CodeWrapper class="flex justify-center">
  <div class="borer relative h-56 w-56 rounded-lg border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
    <Indicator placement="top-left" color="gray" />
    <Indicator placement="top-center" color="lime" />
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
