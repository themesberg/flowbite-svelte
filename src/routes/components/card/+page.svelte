<script lang="ts">
  import { type Component } from 'svelte';
  import { Card, card, Button, Toggle, Label, Radio, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'card';

  let reverse = $state(false);
  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Custom size', component: ExampleComponents.CustomSize },
    { name: 'Call to action card', component: ExampleComponents.CallToActionCard },
    { name: 'Card with action button', component: ExampleComponents.CardWithActionButton }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  const sizes = Object.keys(card.variants.size);
  let cardSize: Card['size'] = $state('sm');
  const colors = Object.keys(card.variants.color);
  let color: Card['color'] = $state('gray');
  const paddings = Object.keys(card.variants.padding);
  let cardPadding: Card['padding'] = $state('lg');
  const shadows = Object.keys(card.variants.shadow);
  let cardShadow: Card['shadow'] = $state('md');
  let horizontal = $state(false);
  const changeImgLayout = () => {
    horizontal = !horizontal;
  };
  let link = $state('');
  const changeLink = () => {
    link = link === '' ? '/' : '';
  };
  let cardClass: Card['class'] = $state('');
  const changeClass = () => {
    cardClass = cardClass === '' ? 'pl-10' : '';
  };
  let cardImage: Card['img'] = $state({});
  const changeImage = () => {
    cardImage = Object.keys(cardImage).length === 0 ? { src: '/images/image-1.webp', alt: 'my image' } : {};
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (cardSize !== 'sm') props.push(` size="${cardSize}"`);
      if (color !== 'gray') props.push(` color="${color}"`);
      if (cardShadow !== 'md') props.push(` shadow="${cardShadow}"`);
      if (cardClass) props.push(` class="${cardClass}"`);
      if (cardPadding !== 'lg') props.push(` padding="${cardPadding}"`);
      if (link) props.push(` href="${link}"`);
      if (horizontal) props.push(` horizontal`);
      if (reverse) props.push(` reverse`);
      if (Object.keys(cardImage).length > 0) {
        const imgString = Object.entries(cardImage)
          .map(([key, value]) => `${key}:"${value}"`)
          .join(',');
        props.push(` img={{${imgString}}}`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Card${propsString}>My Card</Card>`;
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

<H1>Cards</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Card Builder</H2>
<CodeWrapper>
  <div class="flex justify-center">
    <Card size={cardSize} {color} padding={cardPadding} shadow={cardShadow} href={link ? link : ''} class={cardClass} img={cardImage} {horizontal} {reverse}>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>
      <p class="font-normal leading-tight text-gray-700 dark:text-gray-300">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>
    </Card>
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-16 my-1" name="interactive_card_size" bind:group={cardSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="alert_reactive" bind:group={color} color={colorOption as Card['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Padding:</Label>
    {#each paddings as padding}
      <Radio labelClass="w-16 my-1" name="interactive_card_padding" bind:group={cardPadding} value={padding}>{padding}</Radio>
    {/each}
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Shadow:</Label>
    {#each shadows as shadow}
      <Radio labelClass="w-16 my-1" name="interactive_card_shadow" bind:group={cardShadow} value={shadow}>{shadow}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="sky" onclick={changeLink}>{link === '' ? 'Add link' : 'Remove link'}</Button>
    <Button class="w-40" color="green" onclick={changeClass}>{cardClass ? 'Remove class' : 'Add class'}</Button>
    <Button class="w-40" color="blue" onclick={changeImage}>{Object.keys(cardImage).length === 0 ? 'Add image' : 'Remove image'}</Button>
    <Button disabled={Object.keys(cardImage).length === 0} class="w-40" color="violet" onclick={changeImgLayout}>{horizontal ? 'Vertical' : 'Horizontal'}</Button>
    <Toggle bind:checked={reverse} labelClass="italic dark:text-gray-500 {Object.keys(cardImage).length === 0 ? 'opacity-50 cursor-not-allowed' : ''}" disabled={Object.keys(cardImage).length === 0}>Reverse: {reverse}</Toggle>
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
      <Radio labelClass="w-48 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <SelectedComponent />
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
