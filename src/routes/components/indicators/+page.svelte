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
  const sizes: Indicator['size'][] = Object.keys(indicator.variants.size);
  const colors: Indicator['color'][] = Object.keys(indicator.variants.color);
  const placements: Indicator['placement'][] = Object.keys(indicator.variants.placement);
  let color: IndicatorProps['color'] = $state('primary');
  let size: IndicatorProps['size'] = $state('md');
  let border: IndicatorProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let cornerStyle: IndicatorProps['cornerStyle'] = $state('circular');
  const changeCornerStyle = () => {
    cornerStyle = cornerStyle === 'circular' ? 'rounded' : 'circular';
  };
  let placement: IndicatorProps['placement'] = $state('default');

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // {color} {size} {border} {placement} {cornerStyle}
      // color = 'primary', cornerStyle = 'circular', size = 'md', border = false, placement, offset = true,
      // if (color) props.push(` color="${color}"`);
      if (color !== 'primary') props.push(` color="${color}"`);
      if (size !== 'md') props.push(` size="${size}"`);
      if (border) props.push(' border');
      if (placement !== 'default') props.push(` placement="${placement}"`);
      if (cornerStyle !== 'circular') props.push(` cornerStyle="${cornerStyle}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : ' ';

      return `<div class="borer relative h-56 w-56 rounded-lg border-gray-300 m-8">
  <Indicator${propsString} />
</div>`;
    })()
  );
</script>

<H1>Indicator</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive indicator</H2>
<CodeWrapper>
  <div class="borer relative h-56 w-56 rounded-lg border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
    <Indicator {color} {size} {border} {placement} {cornerStyle} />
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
      {#each placements as positionOption}
        <Radio labelClass="w-32 my-1" name="placement" bind:group={placement} value={positionOption}>{positionOption}</Radio>
      {/each}
    </div>
    <Button onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
    <Button onclick={changeCornerStyle}>{cornerStyle === 'circular' ? 'Rounded' : 'Circular'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Legend indicator</H2>
<CodeWrapper innerClass="flex flex-wrap justify-start gap-4 md:justify-center">
  <span class="flex items-center"><Indicator size="sm" color="orange" class="me-1.5" />Visitors</span>
  <span class="flex items-center"><Indicator size="sm" color="purple" class="me-1.5" />Sessions</span>
  <span class="flex items-center"><Indicator size="sm" color="indigo" class="me-1.5" />Customers</span>
  <span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Revenue</span>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/legend.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Indicator count</H2>
<CodeWrapper innerClass="flex justify-center">
  <Button size="lg" class="relative">
    <EnvelopeSolid class="me-2 h-4 w-4 text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    Messages
    <Indicator color="red" border size="xl" placement="top-right">
      <span class="text-xs font-bold text-white">8</span>
    </Indicator>
  </Button>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/indicator-count.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Status indicator</H2>
<CodeWrapper innerClass="flex justify-center">
  <Avatar src="/images/profile-picture-5.webp" dot={{ color: 'green', size: 'lg', placement: 'top-right' }} />
  <Avatar src="/images/profile-picture-5.webp" dot={{ color: 'red', size: 'lg', placement: 'top-right' }} />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/status.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Badge indicator</H2>
<CodeWrapper innerClass="flex gap-2">
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
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/badge-indicator.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Stepper indicator</H2>
<CodeWrapper>
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
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/stepper.md'] as string} />
  {/snippet}
</CodeWrapper>
