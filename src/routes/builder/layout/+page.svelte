<script lang="ts">
  import { type Component } from "svelte";
  import { Label, Radio, uiHelpers } from "$lib";
  // import HighlightCompo from '../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isSvelteOverflow, getExampleFileName } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Layout builder";
  let description = "A quick way to create Layout component";
  let title = "Layout builder";
  let dir = "builder";
  // for Props table
  // import CompoAttributesViewer from '../utils/CompoAttributesViewer.svelte';

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "../layoutExamples/index";
  const exampleModules = import.meta.glob("../layoutExamples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;

  const exampleArr = [
    { name: "One column", component: ExampleComponents.OneColumn },
    { name: "Two columns even", component: ExampleComponents.TwoColumnsEven },
    { name: "Two columns uneven", component: ExampleComponents.TwoColumnsUneven },
    { name: "Three columns even", component: ExampleComponents.ThreeColumnsEven }
  ];
  let selectedExample: string | number = $state(exampleArr[0].name);
  let svelteCode = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the svelteCode content.
  let codeBlock = uiHelpers();
  let expand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(svelteCode, exampleModules));

  const handleExpandClick = () => {
    expand = !expand;
  };
  $effect(() => {
    expand = codeBlock.isOpen;
  });
  // end of DynamicCodeBlock setup
</script>

<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Layout</H1>

<CodeWrapper>
  <div class="mb-8 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example</Label>
    {#each exampleArr as style}
      <Radio class="my-1 w-[170px]" onclick={() => (expand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <SelectedComponent />
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} {expand} {showExpandButton} code={exampleModules[`../layoutExamples/${svelteCode}`] as string} />
  {/snippet}
</CodeWrapper>
