<script lang="ts">
  import { type Component } from 'svelte';
  import { Drawer, Drawerhead, Button, uiHelpers, Label, Radio } from '$lib';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';
  import { blur, fly, slide, scale, fade } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import { linear, sineIn } from 'svelte/easing';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'drawer';

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Drawer navigation', component: ExampleComponents.DrawerNavigation },
    { name: 'Offset', component: ExampleComponents.Offset },
    { name: 'Onmouseenter', component: ExampleComponents.Onmouseenter }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  const drawerTransition = uiHelpers();
  let drawerStatusTransition = $state(false);
  const closeDrawerTransition = drawerTransition.close;

  $effect(() => {
    drawerStatusTransition = drawerTransition.isOpen;
  });

  // transition
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
    // color: Drawer['color'];
  };

  const transitions: TransitionOption[] = [
    { name: 'Fly', transition: fly, params: { duration: 300, easing: linear, x: -150 } },
    { name: 'Blur', transition: blur, params: { duration: 400, easing: sineIn } },
    { name: 'Slide', transition: slide, params: { duration: 200, easing: linear } },
    { name: 'Scale', transition: scale, params: { duration: 300, easing: sineIn } },
    { name: 'Fade', transition: fade, params: { duration: 400, easing: linear } }
  ];

  let selectedTransition = $state('Fly');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  const placements = [
    { name: 'Left', placement: 'left', params: { x: -320, duration: 300, easing: sineIn }, width: 'default' },
    { name: 'Top', placement: 'top', params: { y: -320, duration: 300, easing: sineIn }, width: 'full' },
    { name: 'Right', placement: 'right', params: { x: 320, duration: 300, easing: sineIn }, width: 'default' },
    { name: 'Bottom', placement: 'bottom', params: { y: 320, duration: 300, easing: sineIn }, width: 'full' }
  ];

  let selectedPlacement = $state('Left');
  let currentPlacement = $derived(placements.find((p) => p.name === selectedPlacement) || placements[0]);

  // backdrop
  let backdropStatus = $state(true);
  const changeBackdropStatus = () => {
    backdropStatus = !backdropStatus;
  };
  // outsideclick
  let outsideclickStatus = $state(true);
  const changeOutsideclickStatus = () => {
    outsideclickStatus = !outsideclickStatus;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (!backdropStatus) props.push(' backdrop={false}');
      if (!outsideclickStatus) props.push(' activateClickOutside={false}');
      if (currentPlacement.width !== 'default') props.push(` width="${currentPlacement.width}"`);
      if (currentTransition !== transitions[0]) {
        props.push(` transition={${currentTransition.transition.name}}`);

        // Generate params string without quotes and handle functions
        let paramValues = currentPlacement.placement === 'left' ? currentTransition.params : currentPlacement.params;
        const paramsString = Object.entries(paramValues)
          .map(([key, value]) => {
            if (typeof value === 'function') {
              return `${key}:${value.name}`;
            }
            return `${key}:${value}`;
          })
          .join(',');
        props.push(` params={{${paramsString}}}`);
      }
      // placement
      if (currentPlacement !== placements[0]) {
        props.push(` placement="${currentPlacement.placement}"`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Button onclick={drawerA.toggle}>Drawer</Button>
<Drawer drawerStatus={drawerStatusA} closeDrawer={closeDrawerA}${propsString}>
  <Drawerhead onclick={closeDrawerA}>
    Head content
  </Drawerhead>
    My Drawer
</Drawer>`;
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

<H1>Drawer</H1>

<H2>Setup</H2>
<HighlightCompo replaceLib code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Drawer Builder</H2>
<CodeWrapper>
  <div class="text-center">
    <Button onclick={drawerTransition.toggle}>Drawer</Button>
  </div>
  <Drawer drawerStatus={drawerStatusTransition} closeDrawer={closeDrawerTransition} transition={currentTransition.transition} placement={currentPlacement.placement as Drawer['placement']} width={currentPlacement.width as Drawer['width']} params={currentPlacement.placement === 'left' ? currentTransition.params : currentPlacement.params} backdrop={backdropStatus} activateClickOutside={outsideclickStatus}>
    <Drawerhead onclick={closeDrawerTransition}>
      <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-4 w-4" />{selectedTransition} drawer
      </h5>
    </Drawerhead>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Content</p>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      Backdrop: {backdropStatus ? 'true' : 'false'}
      <br />
      Outsideclick: {outsideclickStatus ? 'true' : 'false'}
    </p>
  </Drawer>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-16 my-1" name="interactive_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Placement</Label>
    {#each placements as placement}
      <Radio labelClass="w-16 my-1" name="interactive_placement" bind:group={selectedPlacement} value={placement.name}>{placement.name}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" color="primary" onclick={changeBackdropStatus}>{backdropStatus ? 'Hide backdrop' : 'Show backdrop'}</Button>
    <Button class="w-48" color="secondary" onclick={changeOutsideclickStatus}>{outsideclickStatus ? 'Disable outsideclick' : 'Enable outsideclick'}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-4 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-40 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="md:h-40">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
