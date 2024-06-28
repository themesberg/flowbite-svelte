<script lang="ts">
  import { Progressbar, Button } from '$lib';
  import { sineOut } from 'svelte/easing';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let progress = $state('45');
</script>

<H1>Progress bar</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default progress bar</H2>

<CodeWrapper>
  <Progressbar progress="50" />
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultprogressbar.md'] as string} />

<H2>Sizes</H2>

<CodeWrapper>
  <div class="my-4">
    <div class="mb-1 text-base font-medium dark:text-white">Small</div>
    <Progressbar progress="50" size="h-1.5" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-base font-medium dark:text-white">Default</div>
    <Progressbar progress="50" size="h-2.5" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-lg font-medium dark:text-white">Large</div>
    <Progressbar progress="50" size="h-4" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-lg font-medium dark:text-white">Extra Large</div>
    <Progressbar progress="50" size="h-6" />
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/sizes.md'] as string} />

<H2>With label inside</H2>

<CodeWrapper>
  <Progressbar progress="50" size="h-4" labelInside />
</CodeWrapper>

<HighlightCompo code={modules['./md/labelinside.md'] as string} />

<H2>With label outside</H2>

<CodeWrapper>
  <Progressbar progress="50" labelOutside="Flowbite-Svelte" />
</CodeWrapper>

<HighlightCompo code={modules['./md/labeloutside.md'] as string} />

<H2>Colors</H2>

<CodeWrapper>
  <div class="my-4">
    <div class="mb-1 text-base font-medium dark:text-white">Gray</div>
    <Progressbar progress="50" color="gray" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
      Blue
    </div>
    <Progressbar progress="50" color="blue" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">
      Red
    </div>
    <Progressbar progress="50" color="red" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">
      Green
    </div>
    <Progressbar progress="50" color="green" />
  </div>

  <div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
    Yellow
  </div>
  <div class="my-4">
    <Progressbar progress="50" color="yellow" />
  </div>

  <div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-400">
    Indigo
  </div>
  <div class="my-4">
    <Progressbar progress="50" color="indigo" />
  </div>

  <div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-400">
    Purple
  </div>
  <div class="my-4">
    <Progressbar progress="50" color="purple" />
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/colors.md'] as string} />

<H2>Custom style</H2>

<CodeWrapper>
  <Progressbar
    progress="50"
    size="h-3"
    labelInside
    color="green"
    div2class="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0 leading-none rounded-full"
    class="my-4"
    labelOutside="Size h-3"
  />

  <Progressbar
    progress="50"
    size="h-10"
    labelInside
    color="red"
    div2class="bg-blue-600 text-blue-100 text-2xl font-medium text-center p-2 leading-none rounded-full"
    class="my-4"
    labelOutside="Size h-10"
  />

  <Progressbar
    progress="50"
    size="h-10"
    color="indigo"
    div2class="bg-blue-600 text-blue-100 text-2xl font-medium text-center p-2 leading-none rounded-full"
    class="my-4"
    labelOutside="Size h-10"
  />

  <Progressbar
    progress="50"
    size="h-6"
    labelInside
    div2class="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
    class="my-4"
    labelOutside="Size h-6"
  />
</CodeWrapper>

<HighlightCompo code={modules['./md/custom.md'] as string} />

<H2>Animation</H2>

<CodeWrapper>
  <Progressbar
    {progress}
    animate
    precision={2}
    labelOutside="With animation"
    labelInside
    tweenDuration={1500}
    easing={sineOut}
    size="h-6"
    color="yellow"
    div2class="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full mb-8"
  />
  <Progressbar
    {progress}
    labelOutside="Without animation"
    labelInside
    size="h-6"
    color="gray"
    div2class="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
  />
  <Button
    onclick={() => (progress = `${Math.round(Math.random() * 100)}`)}
    class="mt-8">Randomize</Button
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/animation.md'] as string} />
