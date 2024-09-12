<script lang="ts">
  import { type Component } from 'svelte';
  import { ButtonGroup, buttonGroup, Button, button, GradientButton, Label, Radio, type ButtonGroupProps, uiHelpers } from '$lib';
  import { UserCircleSolid, AdjustmentsVerticalSolid, DownloadSolid } from 'flowbite-svelte-icons';
  const handleClick = () => {
    alert('Clicked');
  };
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'buttongroup';
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
    { name: 'Dualtone gradient', component: ExampleComponents.DualtoneGradient },
    { name: 'Dualtone gradient pill', component: ExampleComponents.DualtoneGradientPill },
    { name: 'Events', component: ExampleComponents.Events },
    { name: 'Gradient shadow', component: ExampleComponents.GradientShadow },
    { name: 'Outline buttons', component: ExampleComponents.OutlineButtons },
    { name: 'Pill buttons', component: ExampleComponents.PillButtons },
    { name: 'Standard buttons', component: ExampleComponents.StandardButtons },
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  // size, class
  const sizes = Object.keys(buttonGroup.variants.size);
  let size: ButtonGroupProps['size'] = $state('md');
  // button colors
  const colors = Object.keys(button.variants.color);
  let color: Button['color'] = $state('primary');
  let link: Button['href'] = $state('');
  const changeLink = () => {
    link = link === '' ? '/' : '';
  }
  let icon = $state(false);
  const changeIcon = () => {
    icon = !icon;
  };
  let outline = $state(false);
  const changeOutline = () => {
    outline = !outline;
  };

  let buttonGroupClass: ButtonGroupProps['class'] = $state('');
  const changeClass = () => {
    buttonGroupClass = buttonGroupClass === '' ? 'ml-4' : '';
  };
  let generatedCode = $derived(
    (() => {
      let props = [];
      let btnProps = [];
      let icon1 = icon ? '<UserCircleSolid class="me-2 h-4 w-4" />' : '';
      let icon2 = icon ? '<AdjustmentsVerticalSolid class="me-2 h-4 w-4" />' : '';
      let icon3 = icon ? '<DownloadSolid class="me-2 h-4 w-4" />' : '';
      if (size !== 'md') props.push(` size="${size}"`);
      if (buttonGroupClass !== '') props.push(` class="${buttonGroupClass}"`);
 
      if (link) btnProps.push(` href="${link}"`);
      if (color !== 'primary') btnProps.push(` color="${color}"`);
      if (outline) btnProps.push(' outline');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<ButtonGroup${propsString}>
  <Button${btnProps}>${icon1}Profile</Button>
  <Button${btnProps}>${icon2}Settings</Button>
  <Button${btnProps}>${icon3}Messages</Button>
</ButtonGroup>`;
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

<H1>Button group</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Button-group Builder</H2>
<CodeWrapper>
  <div class="h-16 flex items-center justify-center">
    <ButtonGroup {size} class={buttonGroupClass}>
      <Button {color} href={link} {outline}>{#if icon}<UserCircleSolid class="me-2 h-4 w-4" />{/if}Profile</Button>
      <Button {color} href={link} {outline}>{#if icon}<AdjustmentsVerticalSolid class="me-2 h-4 w-4" />{/if}Settings</Button>
      <Button {color} href={link} {outline}>{#if icon}<DownloadSolid class="me-2 h-4 w-4" />{/if}Messages</Button>
    </ButtonGroup>
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Current size: {size}</Label>
    {#each sizes as sizeOption}
      <Radio labelClass="w-24 my-1" name="size" bind:group={size} value={sizeOption}>{sizeOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-2 mb-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="color" bind:group={color} color={colorOption as Button['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
  <Button class="w-40" onclick={changeClass}>{buttonGroupClass ? 'Remove class' : 'Add class'}</Button>
  <Button class="w-40" color="secondary" onclick={changeLink}>{link === '' ? 'Add link' : 'Remove link'}</Button>
  <Button class="w-40" color="red" onclick={changeIcon}>{icon  ? 'Remove icon' : 'Add icon'}</Button>
  <Button class="w-40" color="violet" onclick={changeOutline}>{outline ? 'Remove outline' : 'Add outline'}</Button>
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
      <Radio labelClass="w-[230px] my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="h-12">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
