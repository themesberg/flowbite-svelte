<script lang="ts">
  import { Toggle, toggle, Radio, Label, Button } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/toggle';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const colors = Object.keys(toggle.variants.color) as Toggle['color'][];
  let toggleColor: Toggle['color'] = $state('primary');
  const sizes = Object.keys(toggle.variants.size) as Toggle['size'][];
  let toggleSize: Toggle['size'] = $state('default');
  let checked: boolean = $state(false);
  const changeChecked = () => {
    checked = !checked;
  };
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let leftSlot = $state(false);
  const changeLeftLabel = () => {
    leftSlot = !leftSlot;
    checked = false;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // let fileSlot = '';
      if (toggleSize !== 'default') props.push(` size="${toggleSize}"`);
      if (toggleColor !== 'primary') props.push(` color="${toggleColor}"`);
      if (checked) props.push(' checked');
      if (disabled) props.push(' disabled');
      if (leftSlot) props.push(' bind:checked');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Toggle${propsString}>${leftSlot ? `\n {#snippet leftLabel()}\n  <div class="me-4 {!checked ? 'text-red-600 font-semibold' : ''}">Off</div>\n {/snippet}\n <div class={checked ? 'text-green-600 font-semibold' : ''}>On</div>\n` : 'Toggle me'}</Toggle>`;
    })()
  );
</script>

<H1>Toggle</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Toggle Builder</H2>
<CodeWrapper>
  <div class="h-12">
    <Toggle color={toggleColor} {toggleSize} bind:checked {disabled}>
      {#snippet leftLabel()}
        {#if leftSlot}
          <div class="me-4 {!checked ? 'font-semibold text-red-600' : ''}">Off</div>
        {/if}
      {/snippet}
      {#if !leftSlot}
        {#if disabled}Disabled
        {/if}
        {#if checked}Checked
        {/if} Toggle
      {:else}
        <div class={checked ? 'font-semibold text-green-600' : ''}>On</div>
      {/if}
    </Toggle>
  </div>
  <div class="mb-4 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Color:</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 m-2" name="toggle_color" bind:group={toggleColor} color={colorOption as Toggle['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-32 m-2" name="toggle_size" bind:group={toggleSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-2">
    <Button class="w-40" onclick={changeChecked}>{checked ? 'Remove checked' : 'Add checked'}</Button>
    <Button class="w-40" color="secondary" onclick={changeDisabled}>{disabled ? 'Remove disabled' : 'Add disabled'}</Button>
    <Button class="w-40" color="emerald" onclick={changeLeftLabel}>{leftSlot ? 'Remove left slot' : 'Add left slot'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2 class="mt-64">Custom size</H2>
<CodeWrapper class="flex flex-col space-y-2">
  <Toggle spanClass="w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8">Custom toggle</Toggle>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/sizes.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
