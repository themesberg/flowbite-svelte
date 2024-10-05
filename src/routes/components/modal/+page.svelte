<script lang="ts">
  import { type Component } from 'svelte';
  import { fade, blur, fly, slide, scale } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  import { Radio, Label, Modal, modal, Button, uiHelpers, type ModalProps } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';

  const dirName = 'modal';

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  const exampleArr = [
    { name: 'Default', component: ExampleComponents.Default },
    { name: 'Popup', component: ExampleComponents.Popup },
    { name: 'Form', component: ExampleComponents.Form },
    { name: 'Disable outsideclose', component: ExampleComponents.DisableOutsideclose },
    { name: 'Crypto wallet', component: ExampleComponents.CryptoWallet },
    { name: 'Header snippet', component: ExampleComponents.HeaderSnippet },
    { name: 'Footer snippet', component: ExampleComponents.FooterSnippet }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let svelteCode = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  const interactiveModalExample = uiHelpers();
  let interactiveModalStatus = $state(false);
  const closeInteractiveModal = interactiveModalExample.close;
  $effect(() => {
    interactiveModalStatus = interactiveModalExample.isOpen;
  });

  const positions = Object.keys(modal.variants.position);
  let modalPosition: ModalProps['position'] = $state('default');
  const sizes = Object.keys(modal.variants.size);
  console.log('sizes', sizes);
  let modalSize: ModalProps['size'] = $state('md');
  let backdrop = $state(true);
  const changeBackdrop = () => {
    backdrop = !backdrop;
  };
  let outsideClose = $state(true);
  const changeOutsideClose = () => {
    outsideClose = !outsideClose;
  };
  let rounded = $state(true);
  const changeRounded = () => {
    rounded = !rounded;
  };

  // transition
  // let transitionStatus = $state(false);
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
  };
  const transitions: TransitionOption[] = [
    { name: 'Fade', transition: fade, params: { duration: 200, easing: linear } },
    { name: 'Fly', transition: fly, params: { duration: 500, easing: linear, x: 150 } },
    { name: 'Blur', transition: blur, params: { duration: 500, easing: linear } },
    { name: 'Slide', transition: slide, params: { duration: 500, easing: linear, x: -150 } },
    { name: 'Scale', transition: scale, params: { duration: 500, easing: linear } }
  ];
  let selectedTransition = $state('Fade');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (modalSize !== 'md') props.push(`size="${modalSize}"`);
      if (!backdrop) props.push('backdrop={false}');
      if (!outsideClose) props.push('outsideClose={false}');
      if (!rounded) props.push('rounded={false}');
      if (modalPosition !== 'default') props.push(`position="${modalPosition}"`);

      if (currentTransition !== transitions[0]) {
        props.push(`transition={${currentTransition.transition.name}}`);

        // Generate params string without quotes and handle functions
        const paramsString = Object.entries(currentTransition.params)
          .map(([key, value]) => {
            if (typeof value === 'function') {
              return `${key}:${value.name}`;
            }
            return `${key}:${value}`;
          })
          .join(',');
        props.push(`params={{${paramsString}}}`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Modal title="Terms of Service" {modalStatus} {closeModal}${propsString}>
  Modal content
</Modal>`;
    })()
  );
  // end of code generator

  // for interactive builder
  let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the svelteCode content.

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
    builderExpand = builder.isOpen;
  });
</script>

<H1>Modal</H1>

<H2>Setup</H2>

<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Modal Bilder</H2>

<CodeWrapper>
  <div class="mb-4 h-20">
    <div class="flex justify-center">
      <Button onclick={interactiveModalExample.toggle}>Default modal</Button>
    </div>

    <Modal title="Terms of Service" size={modalSize} {backdrop} {outsideClose} {rounded} position={modalPosition} transition={currentTransition.transition} params={currentTransition.params} modalStatus={interactiveModalStatus} closeModal={closeInteractiveModal}>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odit quis fugit beatae, veritatis minus cupiditate ea numquam facere iusto vitae sequi, ipsum ducimus quo eaque illum. Eveniet, dolorem autem.</p>
    </Modal>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as size}
      <Radio labelClass="w-12 my-1" name="modal-size" bind:group={modalSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Position</Label>
    {#each positions as position}
      <Radio labelClass="w-32 my-1" name="modal-position" bind:group={modalPosition} value={position}>{position}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-16 my-1" name="transition_interactive" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" onclick={changeBackdrop}>{backdrop ? 'Remove backdrop' : 'Add backdrop'}</Button>
    <Button class="w-48" color="secondary" onclick={changeOutsideClose}>{outsideClose ? 'Remove outside close' : 'Add outside close'}</Button>
    <Button class="w-48" color="pink" onclick={changeRounded}>{rounded ? 'Remove rounded' : 'Add rounded'}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-4 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-44 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <SelectedComponent />
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${svelteCode}`] as string} />
  {/snippet}
</CodeWrapper>
