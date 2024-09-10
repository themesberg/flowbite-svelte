<script lang="ts">
  import { type Component } from 'svelte';
  import { Button, GradientButton, gradientButton, button, Radio, Label, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'button';
  import { capitalizeFirstLetter } from '../../utils/helpers';

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Button with Icon', component: ExampleComponents.ButtonWithIcon },
    { name: 'Button with label', component: ExampleComponents.ButtonWithLabel },
    { name: 'Events', component: ExampleComponents.Events },
    { name: 'Icon buttons', component: ExampleComponents.IconButtons },
    { name: 'Loader', component: ExampleComponents.Loader },
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  // color, size, group, outline, shadow, disabled, pill
  const btnColors = Object.keys(button.variants.color);
  let btnColor = $state('primary');
  let btnClass: GradientButton['class'] = $state('');
  const changeBtnClass = () => {
    btnClass = btnClass === '' ? 'w-48' : '';
  };

  let btnLink = $state('');
  const changeBtnLink = () => {
    btnLink = btnLink === '' ? '/' : '';
  };

  let btnOutline = $state(false);
  const changeBtnOutline = () => {
    btnOutline = !btnOutline;
  };
  let btnShadow = $state(false);
  const changeBtnShadow = () => {
    btnShadow = !btnShadow;
  };
  let btnPill = $state(false);
  const changeBtnPill = () => {
    btnPill = !btnPill;
  };
  let btnDisabled = $state(false);
  const changeBtnDisabled = () => {
    btnDisabled = !btnDisabled;
  };
  const btnSizes = Object.keys(button.variants.size);
  let btnSize = $state('md');

  const gradientColors = Object.keys(gradientButton.variants.color);
  let gradientColor = $state('blue');

  const gradientSizes = Object.keys(button.variants.size);
  let gradientSize = $state('md');

  let gradientClass: GradientButton['class'] = $state('');
  const changeGradientClass = () => {
    gradientClass = gradientClass === '' ? 'w-48' : '';
  };
  let gradientOutline = $state(false);
  const changeGradientOutline = () => {
    gradientOutline = !gradientOutline;
  };
  let gradientShadow = $state(false);
  const changeGradientShadow = () => {
    gradientShadow = !gradientShadow;
  };
  let graidentPill = $state(false);
  const changeGradientPill = () => {
    graidentPill = !graidentPill;
  };
  let gradientDisabled = $state(false);
  const changeGradientDisabled = () => {
    gradientDisabled = !gradientDisabled;
  };

  let gradientLink = $state('');
  const changeGradientLink = () => {
    gradientLink = gradientLink === '' ? '/' : '';
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (btnColor !== 'primary') props.push(` color="${btnColor}"`);
      if (btnShadow) props.push(' shadow');
      if (btnOutline) props.push(' outline');
      if (btnPill) props.push(' pill');
      if (btnClass) props.push(` class="${btnClass}"`);
      if (btnLink) props.push(` href="${btnLink}"`);
      if (btnDisabled) props.push(' disabled');
      if (btnSize !== 'md') props.push(` size="${btnSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Button${propsString}>My Button</Button>`;
    })()
  );

  let gradientGeneratedCode = $derived(
    (() => {
      let props = [];
      if (gradientColor !== 'blue') props.push(` color="${gradientColor}"`);
      if (gradientShadow) props.push(' shadow');
      if (gradientOutline) props.push(' outline');
      if (graidentPill) props.push(' pill');
      if (gradientClass) props.push(` class="${gradientClass}"`);
      if (gradientLink) props.push(` href="${gradientLink}"`);
      if (gradientDisabled) props.push(' disabled');
      if (gradientSize !== 'md') props.push(` size="${gradientSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<GradientButton${propsString}>My Gradient Button</GradientButton>`;
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

<H1>Buttons</H1>

<H2>Setup</H2>
<HighlightCompo replaceLib code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Button Bilder</H2>

<CodeWrapper class="flex flex-wrap gap-2">
  <div class="h-16">
    <Button color={btnColor as Button['color']} class={btnClass} outline={btnOutline} shadow={btnShadow} pill={btnPill} disabled={btnDisabled} size={btnSize as Button['size']} href={btnLink ? btnLink : ''}>Button</Button>
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each btnColors as colorOption}
      <Radio labelClass="w-24 my-1" name="btn_color" bind:group={btnColor as Button['color']} color={colorOption as Button['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each btnSizes as sizeOption}
      <Radio labelClass="w-24 my-1" name="btn_size" bind:group={btnSize as Button['size']} color={sizeOption as Button['size']} value={sizeOption}>{sizeOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="blue" onclick={changeBtnOutline}>{btnOutline === false ? 'Add outline' : 'Remove outline'}</Button>
    <Button class="w-40" color="green" onclick={changeBtnShadow}>{btnShadow === false ? 'Add shadow' : 'Remove shadow'}</Button>
    <Button class="w-40" color="yellow" onclick={changeBtnPill}>{btnPill === false ? 'Add pill' : 'Remove pill'}</Button>
    <Button class="w-40" color="red" onclick={changeBtnDisabled}>{btnDisabled === false ? 'Add disabled' : 'Remove disabled'}</Button>
    <Button class="w-40" onclick={changeBtnClass}>{btnClass === '' ? 'Add class' : 'Remove class'}</Button>
    <Button class="w-40" color="sky" onclick={changeBtnLink}>{btnLink === '' ? 'Add link' : 'Remove link'}</Button>
  </div>
  {#snippet codeblock()}
  <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Interactive Gradient Button Builder</H2>

<CodeWrapper>
  <div class="h-16">
    <GradientButton outline={gradientOutline} shadow={gradientShadow} pill={graidentPill} class={gradientClass} disabled={gradientDisabled} color={gradientColor as GradientButton['color']} size={gradientSize as Button['size']}>{capitalizeFirstLetter(gradientColor)}</GradientButton>
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each gradientColors as colorOption}
      <Radio labelClass="w-32 my-1" name="gradient_color" bind:group={gradientColor} color={colorOption as GradientButton['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each gradientSizes as sizeOption}
      <Radio labelClass="w-24 my-1" name="gradient_size" bind:group={gradientSize as Button['size']} color={sizeOption as Button['size']} value={sizeOption}>{sizeOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="blue" onclick={changeGradientOutline}>{gradientOutline === false ? 'Add outline' : 'Remove outline'}</Button>
    <Button class="w-40" color="green" onclick={changeGradientShadow}>{gradientShadow === false ? 'Add shadow' : 'Remove shadow'}</Button>
    <Button class="w-40" color="yellow" onclick={changeGradientPill}>{graidentPill === false ? 'Add pill' : 'Remove pill'}</Button>
    <Button class="w-40" color="red" onclick={changeGradientDisabled}>{gradientDisabled === false ? 'Add disabled' : 'Remove disabled'}</Button>
    <Button class="w-40" onclick={changeGradientClass}>{gradientClass === '' ? 'Add class' : 'Remove class'}</Button>
    <Button class="w-40" color="sky" onclick={changeGradientLink}>{btnLink === '' ? 'Add link' : 'Remove link'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={gradientGeneratedCode} />
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
