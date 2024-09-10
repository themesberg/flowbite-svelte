<script lang="ts">
  import { type Component } from 'svelte';
  import { List, list, Li, Heading, Label, Radio, Button, uiHelpers } from '$lib';
  import { CheckCircleSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'typography/list';

  const tags = Object.keys(list.variants.tag);
  let listTag: List['tag'] = $state('ul');
  const positions = Object.keys(list.variants.position);
  let listPosition: List['position'] = $state('inside');
  let listIcon = $state(false);
  const changeListIcon = () => {
    listIcon = !listIcon;
    if (listIcon) {
      nested = false;
    }
  };
  let ctxClass = $state('');
  const changeCtxClass = () => {
    ctxClass = ctxClass === '' ? 'pl-8' : '';
  };
  let nested = $state(false);
  const changeNested = () => {
    nested = !nested;
    if (nested) {
      listIcon = false;
    }
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      let iconSlot;
      let liIcon;
      let nestedContent;

      if (listTag !== 'ul') props.push(` tag="${listTag}"`);
      if (listPosition !== 'inside') props.push(` position="${listPosition}"`);
      // if (linkClass) props.push(` class="${linkClass}"`);
      iconSlot = listIcon ? `<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />` : '';
      if (ctxClass) props.push(` ctxClass="${ctxClass}"`);
      liIcon = listIcon ? ` icon` : '';
      nestedContent = nested
        ? `<List tag="ol" ctxClass="mt-2 space-y-1 ps-5">
      <Li>item 1-1</Li>
      <Li>item 1-2</Li>
      <Li>item 1-3</Li>
    </List>
      `
        : '';

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<List${propsString}>
  <Li${liIcon}>${iconSlot}Item 1${nestedContent}</Li>
  <Li${liIcon}>${iconSlot}Item 2</Li>
  <Li${liIcon}>${iconSlot}Item 3</Li>
</List>`;
    })()
  );
  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Description list', component: ExampleComponents.DescriptionList },
    { name: 'Horizontal list', component: ExampleComponents.HorizontalList },
    { name: 'Advanced layout', component: ExampleComponents.AdvancedLayout }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  // for interactive builder
  let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the markdown content.

  // for examples DynamicCodeBlockHighlight
  let codeBlock = uiHelpers();
  let exampleExpand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(markdown, exampleModules));
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
    builderExpand = builder.isOpen;
  });
</script>

<H1>List</H1>
<H2>Setup</H2>
<HighlightCompo replaceLib code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive List Builder</H2>
<CodeWrapper>
  <Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">List title</Heading>
  <List tag={listTag} position={listPosition} class="space-y-1 text-gray-500 dark:text-gray-400" {ctxClass}>
    <Li icon={listIcon}>
      {#if listIcon}<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />{/if}At least 10 characters (and up to 100 characters)
      {#if nested}
        <List tag="ol" ctxClass="mt-2 space-y-1 ps-5">
          <Li>item 1-1</Li>
          <Li>item 1-2</Li>
          <Li>item 1-3</Li>
        </List>
      {/if}
    </Li>
    <Li icon={listIcon}>
      {#if listIcon}<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />{/if}At least one lowercase character
    </Li>
    <Li icon={listIcon}>
      {#if listIcon}<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />{/if}Inclusion of at least one special character, e.g., ! @ # ?
    </Li>
  </List>
  <div class="mb-4 mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Tag:</Label>
    {#each tags as tag}
      <Radio labelClass="w-20 my-1" name="list_tag" bind:group={listTag} value={tag}>{tag}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Position:</Label>
    {#each positions as position}
      <Radio labelClass="w-20 my-1" name="list_position" bind:group={listPosition} value={position}>{position}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" color="blue" onclick={changeListIcon}>{listIcon ? 'Remove icon' : 'Add icon'}</Button>
    <Button class="w-48" color="rose" onclick={changeCtxClass}>{ctxClass !== '' ? 'Remove ctxClass' : 'Add ctxClass'}</Button>
    <Button class="w-48" color="teal" onclick={changeNested}>{nested ? 'Remove nested' : 'Add nested'}</Button>
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
      <Radio labelClass="w-36 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="md:h-[350px]">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
