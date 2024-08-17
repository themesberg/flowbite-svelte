<script lang="ts">
  import {
    FloatingLabelInput,
    Helper,
    Label,
    Radio,
    Toggle,
    floatingLabelInput
  } from '$lib';

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

  const styles = ['filled', 'outlined', 'standard'];
  let style: FloatingLabelInput['style'] = $state('standard');

  const sizes = ['small', 'default'];
  let floatingSize: FloatingLabelInput['size'] = $state('default');
  const sizeDisplay: Record<FloatingLabelInput['size'], string> = {
    small: 'Small',
    default: 'Default'
  };
  // const colors = [ 'green', 'red']
  const colors = Object.keys(floatingLabelInput.variants.color);
  let floatingColor: FloatingLabelInput['color'] = $state('primary');
</script>

<H1>Floating label</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Floating label examples</H2>
<CodeWrapper>
  <div class="h-16">
    <FloatingLabelInput {style} id="floating_filled" type="text"
      >Floating {style}</FloatingLabelInput
    >
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Style:</Label>
    {#each styles as option}
      <Radio
        labelClass="w-24 my-1"
        name="style"
        bind:group={style}
        value={option}>{option}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/floating-label-examples.md'] as string} />

<H2>Disabled state</H2>
<CodeWrapper>
  <div class="h-16">
    <FloatingLabelInput disabled {style} id="floating_filled" type="text"
      >Floating {style}</FloatingLabelInput
    >
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Style:</Label>
    {#each styles as option}
      <Radio
        labelClass="w-24 my-1"
        name="disabled_style"
        bind:group={style}
        value={option}>{option}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/disabled-state.md'] as string} />

<H2>Colors</H2>
<CodeWrapper>
  <div class="mb-6 grid items-end gap-6 md:grid-cols-3">
    <div>
      <FloatingLabelInput
        color={floatingColor}
        style="filled"
        id="filled_success"
        aria_describedby="filled_success_help"
        type="text">Filled</FloatingLabelInput
      >
    </div>
    <div>
      <FloatingLabelInput
        color={floatingColor}
        style="outlined"
        id="outlined_success"
        aria_describedby="outlined_success_help"
        type="text">Outlined</FloatingLabelInput
      >
    </div>
    <div>
      <FloatingLabelInput
        color={floatingColor}
        style="standard"
        id="standard_success"
        aria_describedby="standard_success_help"
        type="text">Standard</FloatingLabelInput
      >
    </div>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio
        labelClass="w-24 my-1"
        name="floating_color"
        bind:group={floatingColor}
        value={colorOption}>{colorOption}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/color.md'] as string} />

<H2>Size</H2>
<CodeWrapper>
  <div class="mb-6 grid h-48 items-end gap-4 md:h-16 md:grid-cols-3">
    <FloatingLabelInput
      size={floatingSize}
      style="filled"
      id="size_example_filled"
      type="text">{sizeDisplay[floatingSize]} filled</FloatingLabelInput
    >
    <FloatingLabelInput
      size={floatingSize}
      style="outlined"
      id="size_example_outlined"
      type="text">{sizeDisplay[floatingSize]} outlined</FloatingLabelInput
    >
    <FloatingLabelInput
      size={floatingSize}
      id="size_example_standard"
      type="text">{sizeDisplay[floatingSize]} standard</FloatingLabelInput
    >
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    <Toggle
      onclick={() => {
        floatingSize = floatingSize === 'default' ? 'small' : 'default';
      }}>Toggle size</Toggle
    >
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/sizes.md'] as string} />

<H2>Helper text</H2>
<CodeWrapper>
  <FloatingLabelInput
    style="filled"
    id="floating_helper"
    aria_describedby="floating_helper_text"
    type="text">Floating helper</FloatingLabelInput
  >
  <Helper class="pt-2">
    Remember, contributions to this topic should follow our <a
      href="/"
      class="text-primary-600 hover:underline dark:text-primary-500"
    >
      Community Guidelines
    </a>.
  </Helper>
</CodeWrapper>
<HighlightCompo code={modules['./md/helper-text.md'] as string} />
