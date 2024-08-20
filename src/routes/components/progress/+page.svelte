<script lang="ts">
  import { Progressbar, progressbar, Button, Label, Radio, Input } from '$lib';
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
  const sizes = ['h-1.5', 'h-2.5', 'h-4', 'h-6'];
  let progressSize = $state('h-2.5');
  const colors = Object.keys(progressbar.variants.color);
  let progressColor: Progressbar['color'] = $state('primary');
  let progressLabel = $state(false);
  let { labelContent = $bindable('Svelte-5-Ui-Lib') } = $props();
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
  <div class="my-4 h-16">
    <div class="mb-1 text-base font-medium dark:text-white">Size</div>
    <Progressbar progress="50" size={progressSize} />
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-24 my-1" name="progress_size" bind:group={progressSize} value={size}>{size}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/sizes.md'] as string} />

<H2>With progress inside</H2>

<CodeWrapper class="space-y-4">
  <Progressbar progress="50" size="h-4" labelInside={progressLabel} />
  <Button onclick={() => (progressLabel = !progressLabel)}>Toggle</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/labelinside.md'] as string} />

<H2>With label outside</H2>

<CodeWrapper class="space-y-4">
  <Progressbar progress="50" labelOutside={labelContent} />
  <Input bind:value={labelContent} />
</CodeWrapper>

<HighlightCompo code={modules['./md/labeloutside.md'] as string} />

<H2>Colors</H2>

<CodeWrapper>
  <div class="my-4">
    <div class="mb-1 text-base font-medium dark:text-white">Gray</div>
    <Progressbar progress="50" color={progressColor} />
  </div>

  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as color}
      <Radio labelClass="w-24 my-1" name="progress_size" bind:group={progressColor} color={color as Progressbar['color']} value={color}>{color}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/colors.md'] as string} />

<H2>Custom style</H2>

<CodeWrapper class="space-y-4">
  <Progressbar progress="50" size="h-3" labelInside div2Class="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0 leading-none rounded-full" class="my-4" labelOutside="Size h-3" />

  <Progressbar progress="50" size="h-10" labelInside div2Class="bg-cyan-600 text-cyan-100 text-2xl font-medium text-center p-2 leading-none rounded-full" labelOutside="Size h-10" />

  <Progressbar progress="50" size="h-6" labelInside div2Class="bg-teal-600 text-teal-100 text-base font-medium text-center p-1 leading-none rounded-full" labelOutside="Size h-6" />
</CodeWrapper>

<HighlightCompo code={modules['./md/custom.md'] as string} />

<H2>Animation</H2>

<CodeWrapper class="space-y-4">
  <Progressbar {progress} animate precision={2} labelOutside="With animation" labelInside tweenDuration={1500} easing={sineOut} size="h-6" color="red" div2Class="text-base font-medium text-center p-1 leading-none rounded-full" />
  <Progressbar {progress} labelOutside="Without animation" labelInside size="h-6" color="gray" div2Class="text-base font-medium text-center p-1 leading-none rounded-full" />
  <Button onclick={() => (progress = `${Math.round(Math.random() * 100)}`)} class="mt-8">Randomize</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/animation.md'] as string} />
