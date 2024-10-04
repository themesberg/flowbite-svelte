<script lang="ts">
  import { type Component } from 'svelte';
  import { uiHelpers, Label, Radio } from '$lib';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'sidebar';

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  const exampleArr = [
    { name: 'Default', component: ExampleComponents.Default },
    { name: 'Close button', component: ExampleComponents.CloseButton },
    { name: 'Active class', component: ExampleComponents.ActiveClass },
    { name: 'Overriding active', component: ExampleComponents.OverridingActive },
    { name: 'Multilevel', component: ExampleComponents.Multilevel },
    { name: 'Single selection', component: ExampleComponents.SingleSelection },
    { name: 'All open', component: ExampleComponents.AllOpen },
    { name: 'Content separator', component: ExampleComponents.ContentSeparator },
    { name: 'Icon', component: ExampleComponents.Icon },
    { name: 'Cta', component: ExampleComponents.Cta },
    { name: 'Logo branding', component: ExampleComponents.LogoBranding },
    { name: 'Branding with children', component: ExampleComponents.BrandingWithChildren },
    { name: 'Dropdown transition', component: ExampleComponents.DropdownTransition },
    { name: 'Static positioning', component: ExampleComponents.StaticPositioning }
  ];
  let selectedExample: string | number = $state(exampleArr[0].name);
  let svelteCode = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component
  // for examples DynamicCodeBlockHighlight
  let codeBlock = uiHelpers();
  let exampleExpand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(svelteCode, exampleModules));
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
  });
</script>

<H1>Sidebar</H1>

<CodeWrapper>
  <div class="mb-12 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-48 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <SelectedComponent />
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${svelteCode}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
