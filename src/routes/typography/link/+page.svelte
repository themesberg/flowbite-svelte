<script lang="ts">
  import { type Component } from 'svelte';
  import { A, Button, anchor, Label, Radio, Input, CloseButton, uiHelpers } from '$lib';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import ExamplesBlock from '../../utils/ExamplesBlock.svelte';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  let { text = $bindable('Read more') } = $props();
  const dirName = 'typography/anchor';
  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples'; 
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  
  const exampleArr = [
    { name: 'Button link', component: ExampleComponents.ButtonLink },
    { name: 'Cta link', component: ExampleComponents.CtaLink },
    { name: 'Card link', component: ExampleComponents.CardLink },
    { name: 'Card with image', component: ExampleComponents.CardWithImage },
  ]
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject (arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find(obj => obj.name === name);
    return matchingObject ? matchingObject.component : null; 
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample)); 
  // end of dynamic svelte component

  const colors = Object.keys(anchor.variants.color);
  let anchorColor: A['color'] = $state('primary');
  let linkClass = $state('font-medium hover:underline');
  const changeLinkClass = () => {
    linkClass = linkClass === 'font-medium hover:underline' ? 'underline hover:no-underline italic font-semibold' : 'font-medium hover:underline';
  };
  let linkIcon = $state(false);
  const changeIcon = () => {
    linkIcon = !linkIcon;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      let iconSlot;
      props.push(` href="/"`);
      if (anchorColor !== 'primary') props.push(` color="${anchorColor}"`);
      if (linkClass) props.push(` class="${linkClass}"`);
      iconSlot = linkIcon ? `\n  <ArrowRightOutline class="ms-2 h-6 w-6" />` : '';
      // if (imgAlignment !== 'left') props.push(` alignment="${imgAlignment}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<A${propsString}>
  ${text} ${iconSlot}
</A>`;
    })()
  );

  
  // for interactive builder
  let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  }
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the markdown content.
  
  // for examples DynamicCodeBlockHighlight
  let codeBlock = uiHelpers();
  let exampleExpand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(markdown, exampleModules));
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  }
  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
    builderExpand = builder.isOpen;
  });
</script>

<H1>Links</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Link Builder</H2>
<CodeWrapper>
  <Label class="text-md mb-2">Edit link</Label>
  <Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-4 pr-12">
    {#snippet right()}
      <CloseButton onclick={() => (text = '')} />
    {/snippet}
  </Input>
  <div class="h-10">
  <A href="/" color={anchorColor} class={linkClass}>
    {text}
    {#if linkIcon}<ArrowRightOutline class="ms-2 h-6 w-6" />{/if}
  </A>
  </div>
  <div class="mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="anchor_color" bind:group={anchorColor} color={colorOption as A['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mt-12 flex flex-wrap gap-2">
    <Button class="w-48" color="blue" onclick={changeLinkClass}>{linkClass === 'font-medium hover:underline' ? 'Change class' : 'Remove class'}</Button>
    <Button class="w-48" color="pink" onclick={changeIcon}>{linkIcon ? 'Remove icon' : 'Add icon'}</Button>
  </div>
  {#snippet codeblock()}
  <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-8 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-[170px] my-1" onclick={()=> exampleExpand = false} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div>
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
  <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
