<script lang="ts">
  import { Spinner, spinner, Button, Label, Radio } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'spinner';
  import { copyToClipboard } from '../../utils/helpers';
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
    spinnerClass = spinnerClass === '' ? 'ml-4' : '';
  };
  const alignments = [
    { name: 'left', class: 'text-left' },
    { name: 'center', class: 'text-center' },
    { name: 'right', class: 'text-right' }
  ];

  let selectedAlignment = $state('left');
  let currentSpinner = $derived(alignments.find((t) => t.name === selectedAlignment) || alignments[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (spinnerSize !== '8') props.push(` size="${spinnerSize}"`);
      if (spinnerColor !== 'primary') props.push(` color="${spinnerColor}"`);
      if (spinnerClass !== '') props.push(` class="${spinnerClass}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      // alignment needs div wrapper
      if (selectedAlignment !== 'left') {
        return `<div class="${currentSpinner.class}">\n  <Spinner${propsString}/>\n</div>`;
      } else {
        return `<Spinner${propsString}/>`;
      }
    })()
  );
  let copiedStatus = $state(false);

  function handleCopyClick(codeBlock: string) {
    copyToClipboard(codeBlock)
      .then(() => {
        copiedStatus = true;
        setTimeout(() => {
          copiedStatus = false;
        }, 1000);
      })
      .catch((err) => {
        console.error('Error in copying:', err);
        // Handle the error as needed
      });
  }
</script>

<H1>Spinner</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Spinner Builder</H2>

<CodeWrapper>
  <div class="h-20">
    <div class={currentSpinner.class}>
      <Spinner color={spinnerColor} size={spinnerSize} class={spinnerClass} />
    </div>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as color}
      <Radio labelClass="w-24 my-1" name="spinnercolor" bind:group={spinnerColor} color={color as Spinner['color']} value={color}>{color}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-24 my-1" name="spinnersize" bind:group={spinnerSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="mb-4 mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each alignments as option}
      <Radio labelClass="w-24 my-1" name="alignment" bind:group={selectedAlignment} value={option.name}>{option.name}</Radio>
    {/each}
  </div>
  <Button class="w-48" onclick={changeClass}>{spinnerClass ? 'Remove class' : 'Add class'}</Button>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Button</H2>
<CodeWrapper innerClass="flex flex-wrap items-center gap-2">
  <Button>
    <Spinner class="me-3" size="4" color="violet" />
    Loading ...
  </Button>
  <Button outline color="dark">
    <Spinner class="me-3" size="4" />
    Loading ...
  </Button>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/button.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
