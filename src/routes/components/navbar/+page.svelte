<script lang="ts">
  import { type Component } from 'svelte';
  import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, ImagePlaceholder, Skeleton, TextPlaceholder, P, Label, Radio } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'nav';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let breakPoint: Navbar['breakpoint'] = $state('md');
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;

  let nav2 = uiHelpers();
  let navStatus2 = $state(false);
  let toggleNav2 = nav2.toggle;
  let closeNav2 = nav2.close;

  let navLg = uiHelpers();
  let navStatusLg = $state(false);
  let toggleNavLg = navLg.toggle;
  let closeNavLg = navLg.close;

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    navStatus = nav.isOpen;
    navStatus2 = nav2.isOpen;
    navStatusLg = navLg.isOpen;
  });

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    // { name: 'Search', component: ExampleComponents.Search },
    { name: 'Default', component: ExampleComponents.Default },
    { name: 'Breakpoint', component: ExampleComponents.Breakpoint },
    { name: 'Sticky', component: ExampleComponents.Sticky },
    { name: 'Dropdown', component: ExampleComponents.Dropdown },
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

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
  });
</script>

<H1>Navbar</H1>

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

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
