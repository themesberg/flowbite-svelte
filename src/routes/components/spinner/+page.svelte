<script lang="ts">
  import { Spinner, spinner, Button, Label, Radio } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  // color, size, class
  const colors: Spinner['color'][] = Object.keys(spinner.variants.color);
  let spinnerColor: Spinner['color'] = $state('primary');
  const sizes: Spinner['size'][] = ['4', '5', '6', '8', '10', '12', '16'];
  let spinnerSize: Spinner['size'] = $state('8');
  let spinnerClass: Spinner['class'] = $state('');
  const changeClass = () => {
    spinnerClass = spinnerClass === '' ? 'm-4' : '';
  };
</script>

<H1>Spinner</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default spinner</H2>

<CodeWrapper>
  <div class="h-20">
    <Spinner class={spinnerClass} />
  </div>
  <Button class="w-48" onclick={changeClass}
    >{spinnerClass ? 'Remove class' : 'Add class'}</Button
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultspinner.md'] as string} />

<H2>Colors</H2>

<CodeWrapper>
  <Spinner color={spinnerColor} />
  <div class="mt-8 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as color}
      <Radio
        labelClass="w-24 my-1"
        name="spinnercolor"
        bind:group={spinnerColor}
        value={color}>{color}</Radio
      >
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/colors.md'] as string} />

<H2>Sizes</H2>

<CodeWrapper>
  <div class="h-20">
    <Spinner size={spinnerSize} />
  </div>
  <div class="mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio
        labelClass="w-24 my-1"
        name="spinnersize"
        bind:group={spinnerSize}
        value={size}>{size}</Radio
      >
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/sizes.md'] as string} />

<H2>Alignment</H2>

<CodeWrapper>
  <div class="text-left"><Spinner /></div>
  <div class="text-center"><Spinner /></div>
  <div class="text-right"><Spinner /></div>
</CodeWrapper>

<HighlightCompo code={modules['./md/alignment.md'] as string} />

<H2>Button</H2>

<CodeWrapper>
  <div class="flex flex-wrap items-center gap-2">
    <Button>
      <Spinner class="me-3" size="4" color="violet" />
      Loading ...
    </Button>
    <Button outline color="dark">
      <Spinner class="me-3" size="4" />
      Loading ...
    </Button>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/button.md'] as string} />
