<script lang="ts">
  import { type Component } from 'svelte';
  import { Table, table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch, ImagePlaceholder, uiHelpers, Label, Radio, Button } from '$lib';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'table';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Table items', component: ExampleComponents.TableItems },
    { name: 'Head body items', component: ExampleComponents.HeadBodyItems },
    { name: 'Cells', component: ExampleComponents.Cells },
    { name: 'Checkbox', component: ExampleComponents.Checkbox },
    { name: 'Search', component: ExampleComponents.Search },
    { name: 'Header slot', component: ExampleComponents.HeaderSlot },
    { name: 'Footer slot', component: ExampleComponents.FooterSlot },
    { name: 'Table caption', component: ExampleComponents.TableCaption },
    { name: 'Overflow', component: ExampleComponents.Overflow },
  ];

  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  let color: Table['color'] = $state('default');
  const colors = Object.keys(table.variants.color);
  let striped = $state(false);
  const changeStriped = () => {
    striped = !striped;
  }
  let hoverable = $state(false);
  const changeHoverable = () => {
    hoverable = !hoverable;
  }
  // noborder, shadow,
  let noborder = $state(false);
  const changeNoborder = () => {
    noborder = !noborder;
  }
  let shadow = $state(false);
  const changeShadow = () => {
    shadow = !shadow;
  }

  const tableItems = [
    {name: 'Apple MacBook Pro 17"',color: 'Sliver', type: 'Laptop', price: '$2999'},
    {name: 'Microsoft Surface Pro',color: 'White', type: 'Laptop PC', price: '$1999'},
    {name: 'Magic Mouse 2',color: 'Black', type: 'Accessories', price: '$99'},
    {name: 'Google Pixel Phone',color: 'Gray', type: 'Phone', price: '$799'},
    {name: 'Apple Watch 5',color: 'Red', type: 'Wearables', price: '$999'},
  ]

  import { slide } from 'svelte/transition';

  const items2 = [
    {
      name: 'Apple MacBook Pro 17"',
      color: 'Sliver',
      type: 'Laptop',
      price: '$2999'
    },
    {
      name: 'Microsoft Surface Pro',
      color: 'White',
      type: 'Laptop PC',
      price: '$1999'
    },
    {
      name: 'Magic Mouse 2',
      color: 'Black',
      type: 'Accessories',
      price: '$99'
    }
  ];

  let openRow = $state();

  const toggleRow = (i: number) => {
    openRow = openRow === i ? null : i;
  };


  let details;
  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if ( color ) props.push(` color="${color}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Table${propsString}>My Table</Table>`;
    })()
  );
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

<H1>Table</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />


<H2>Interactive</H2>
<CodeWrapper>
  <Table {tableItems} {hoverable} {color} {striped} {noborder} {shadow}/>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="table_color" bind:group={color} color={colorOption as Table['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex gap-4">
    <Button class="w-40" onclick={changeStriped}>{striped ? 'Unstriped' : 'Striped'}</Button>
    <Button class="w-40" color="secondary" onclick={changeHoverable}>{hoverable ? 'Unhoverable' : 'Hoverable'}</Button>
    <Button class="w-40" color="indigo" onclick={changeNoborder}>{noborder ? 'Borderless' : 'Border'}</Button>
    <Button class="w-40" color="rose" onclick={changeShadow}>{shadow ? 'No Shadow' : 'Shadow'}</Button>
  </div>
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-12 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-40 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <SelectedComponent />
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>


<H2>Click and double-click on row</H2>
<CodeWrapper>
  <Table>
    <TableHead>
      <TableHeadCell>Product name</TableHeadCell>
      <TableHeadCell>Color</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Price</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#each items2 as item, i}
        <TableBodyRow onclick={() => toggleRow(i)}>
          <TableBodyCell>{item.name}</TableBodyCell>
          <TableBodyCell>{item.color}</TableBodyCell>
          <TableBodyCell>{item.type}</TableBodyCell>
          <TableBodyCell>{item.price}</TableBodyCell>
        </TableBodyRow>
        {#if openRow === i}
          <TableBodyRow ondblclick={() => (details = item)}>
            <TableBodyCell colspan={4} class="p-0">
              <div class="px-2 py-3" transition:slide={{ duration: 300, axis: 'y' }}>
                <ImagePlaceholder />
              </div>
            </TableBodyCell>
          </TableBodyRow>
        {/if}
      {/each}
    </TableBody>
  </Table>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/click-and-double-click-on-row.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
