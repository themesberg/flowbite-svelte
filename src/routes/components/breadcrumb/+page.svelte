<script lang="ts">
  import { type Component } from 'svelte';
  import { Breadcrumb, BreadcrumbItem, Button, Label, Radio, uiHelpers, type BreadcrumbProps } from '$lib';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'breadcrumb';

  let navClass: BreadcrumbProps['class'] = $state('');
  const changeNavClass = () => {
    navClass = navClass === '' ? 'border border-red-500 p-2' : '';
  };
  let olClass: BreadcrumbProps['olClass'] = $state('');
  const changeOlClass = () => {
    olClass = olClass === '' ? 'border border-blue-500 p-2' : '';
  };
  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Default', component: ExampleComponents.Default },
    { name: 'Solid', component: ExampleComponents.Solid },
    { name: 'Icon', component: ExampleComponents.Icon }
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

<H1>Breadcrumb</H1>

<CodeWrapper>
  <div class="mb-12 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-40 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <SelectedComponent />
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${svelteCode}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>navClass and olClass</H2>

<CodeWrapper innerClass="overflow-x-scroll p-2 sm:p-6">
  <div class="h-20">
    <Breadcrumb {navClass} {olClass}>
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
      <BreadcrumbItem href="/">Projects</BreadcrumbItem>
      <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
    </Breadcrumb>
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" onclick={changeNavClass}>{navClass ? 'Remove navClass' : 'Add navClass'}</Button>
    <Button class="w-48" color="green" onclick={changeOlClass}>{olClass ? 'Remove olClass' : 'Add olClass'}</Button>
  </div>
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
