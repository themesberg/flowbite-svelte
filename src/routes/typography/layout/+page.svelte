<script lang="ts">
  import { type Component } from 'svelte';
  import { Label, Radio, uiHelpers } from '$lib';
  // import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'typography/layout';
  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'One column', component: ExampleComponents.OneColumn },
    { name: 'Two columns even', component: ExampleComponents.TwoColumnsEven },
    { name: 'Two columns uneven', component: ExampleComponents.TwoColumnsUneven },
    { name: 'Three columns even', component: ExampleComponents.ThreeColumnsEven }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the markdown content.
  let codeBlock = uiHelpers();
  let expand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(markdown, exampleModules));

  const handleExpandClick = () => {
    expand = !expand;
  };
  $effect(() => {
    expand = codeBlock.isOpen;
  });
  // end of DynamicCodeBlock setup
</script>

<H1>Layout</H1>
<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-8 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-[170px] my-1" onclick={() => (expand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="md:h-[460px]">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} {expand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
