<script lang="ts">
  import { Label, label, Radio } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/label';
  import { capitalizeFirstLetter } from '../../utils/helpers';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const colors = Object.keys(label.variants.color);
  let labelColor: Label['color'] = $state('gray');
  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (labelColor !== 'gray') props.push(` color="${labelColor}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Label${propsString}>Label</Label>`;
    })()
  );
</script>

<H1>Label</H1>

<H2>Setup</H2>
<HighlightCompo replaceLib code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Color</H2>
<CodeWrapper>
  <Label class="text-lg font-bold" color={labelColor}>{capitalizeFirstLetter(labelColor)}</Label>
  <div class="flex flex-wrap space-x-2">
    <Label class="m-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="default_alert_color" bind:group={labelColor} color={colorOption as Label['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
