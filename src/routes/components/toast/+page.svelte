<script lang="ts">
  import { type Component } from 'svelte';
  import { Toast, toast, Avatar, Button, Label, Radio, uiHelpers } from '$lib';
  import { FireOutline, CheckCircleSolid, CameraPhotoOutline } from 'flowbite-svelte-icons';
  import { linear } from 'svelte/easing';
  import { blur, fly, slide, scale, fade } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'toast';
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
    { name: 'Push notification', component: ExampleComponents.PushNotification },
    { name: 'Toast message', component: ExampleComponents.ToastMessage },
    { name: 'Undo button', component: ExampleComponents.UndoButton }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  const colors = Object.keys(toast.variants.color) as Toast['color'][];
  let toastColor: Toast['color'] = $state('primary');
  let dismissable = $state(true);
  const changeDismissable = () => {
    dismissable = !dismissable;
  };
  const positions = Object.keys(toast.variants.position) as Toast['position'][];
  let toastPosition: Toast['position'] = $state('top-left');
  // console.log('positions', positions);
  // transition example
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
  };

  const transitions: TransitionOption[] = [
    { name: 'Default', transition: fly, params: { duration: 400 } },
    { name: 'Fly', transition: fly, params: { duration: 300, easing: linear, x: 150 } },
    { name: 'Blur', transition: blur, params: { duration: 400, easing: linear } },
    { name: 'Slide', transition: slide, params: { duration: 500, easing: linear, x: -150 } },
    { name: 'Scale', transition: scale, params: { duration: 400, easing: linear } },
    { name: 'Fade', transition: fade, params: { duration: 500, easing: linear } }
  ];

  let selectedTransition = $state('Default');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);
  let defaultToastStatus: boolean = $state(true);
  let toastStatus: boolean = $state(true);
  let toastUndoStatus: boolean = $state(true);
  const changeUndoStatus = () => {
    toastUndoStatus = !toastUndoStatus;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (toastColor !== 'primary') props.push(` color="${toastColor}"`);
      if (dismissable !== true) props.push(' dismissable={false}');
      if (toastPosition !== 'top-left') props.push(` position="${toastPosition}"`);
      if (currentTransition !== transitions[0] && dismissable) {
        props.push(` transition={${currentTransition.transition.name}}`);
        const paramsString = Object.entries(currentTransition.params)
          .map(([key, value]) => {
            if (typeof value === 'function') {
              return `${key}:${value.name}`;
            }
            return `${key}:${value}`;
          })
          .join(',');
        props.push(` params={{${paramsString}}}`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<div class="relative h-56">
  <Toast${propsString}>My Toast</Toast>
</div>`;
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

<H1>Toast</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Toast Builder</H2>
<CodeWrapper>
  <div class="relative h-28 md:h-56">
    <Toast color={toastColor} bind:toastStatus {dismissable} transition={currentTransition.transition} params={currentTransition.params} position={toastPosition}>
      {#snippet icon()}
        <CheckCircleSolid class="h-5 w-5" />
        <span class="sr-only">Check icon</span>
      {/snippet}
      Toast content
    </Toast>
  </div>
  <div class="mb-4">
    <Button disabled={toastStatus ? true : false} onclick={() => (toastStatus = true)}>Open toast</Button>
  </div>
  <div class="flex flex-wrap space-x-2 mb-4">
    <Label class="mb-4 w-full font-bold">Color:</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="interactive_toast_color" bind:group={toastColor} color={colorOption as Toast['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-16 my-1" name="interactive_toast_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-2 mb-4">
    <Label class="mb-4 w-full font-bold">Position:</Label>
    {#each positions as option}
      <Radio labelClass="w-32 my-1" name="interactive_toast_position" bind:group={toastPosition} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-2">
    <Button onclick={changeDismissable}>{dismissable ? 'Disable' : 'Enable'} dismissable</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-12 flex flex-wrap">
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
