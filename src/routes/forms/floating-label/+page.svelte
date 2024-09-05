<script lang="ts">
  import { FloatingLabelInput, Helper, Label, Radio, Toggle, floatingLabelInput, Button } from '$lib';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/floating-label-input';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const styles = ['standard', 'filled', 'outlined'];
  let style: FloatingLabelInput['style'] = $state('standard');
  let floatingSize: FloatingLabelInput['size'] = $state('default');
  const colors = Object.keys(floatingLabelInput.variants.color);
  let floatingColor: FloatingLabelInput['color'] = $state('default');
  let helperColor: FloatingLabelInput['color'] = $state('default');
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  }
  let helperSlot = $state(false);
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
    helperColor = 'default';
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (floatingColor !== 'default') props.push(` color="${floatingColor}"`);
      if (disabled) props.push(' disabled');
      if (style !== 'standard') props.push(` style="${style}"`);
      if (floatingSize !== 'default') props.push(` size="${floatingSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      let helperCode = '';
      if (helperSlot) {
        helperCode = `
<Helper class="pt-2" color="${helperColor}">
  Helper text
</Helper>`;
      }
      return `<FloatingLabelInput ${propsString}>
  Floating label
</FloatingLabelInput>${helperCode}`;
    })()
  );
</script>

<H1>Floating label</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Floating label examples</H2>
<CodeWrapper>
  <div class="h-20">
    <FloatingLabelInput {style} {disabled} size={floatingSize} color={floatingColor} id="floating_filled" type="text">Floating {style}</FloatingLabelInput>
    {#if helperSlot}
    <Helper class="pt-2" color={helperColor}>
      Remember, contributions to this topic should follow our <a href="/">Community Guidelines</a>.
    </Helper>
    {/if}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Style:</Label>
    {#each styles as option}
      <Radio labelClass="w-24 my-1" name="style1" bind:group={style} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="floating_color" bind:group={floatingColor} color={colorOption as FloatingLabelInput['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4">
    <Button class="w-48 mb-4" color="secondary" onclick={changeHelperSlot}>{helperSlot ? 'Remove helper slot' : 'Add helper slot'}</Button>
    <Label class="mb-4 w-full font-bold">Helper Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1 {helperSlot ? '' : 'opacity-30 cursor-not-allowed'}" disabled={helperSlot ? false : true} name="helper_color" bind:group={helperColor} color={colorOption as FloatingLabelInput['color']} value={colorOption} >{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    <Toggle
      onclick={() => {
        floatingSize = floatingSize === 'default' ? 'small' : 'default';
      }}
    > 
    {#snippet leftLabel()}
    <div class="me-4">Default</div>
   {/snippet}
      Small
    </Toggle>
  </div>
  <div class="flex flex-wrap gap-2">
    <Button class="w-48" onclick={changeDisabled}>{disabled ? 'Remove disabled' : 'Add disabled'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
