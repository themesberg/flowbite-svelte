<script lang="ts">
  import { Card, card, Button, Toggle, Label, Radio } from '$lib';
  let reverse = $state(false);
  let vCard = $state(false);
  let hCard = $state(false);
  // $inspect('vCard: ', vCard, 'hCard: ', hCard);

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { copyToClipboard } from '../../utils/helpers';
  import GeneratedCode from '../../utils/GeneratedCode.svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

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
  }
  let cardClass: Card['class'] = $state('');
  const changeClass = () => {
    cardClass = cardClass === '' ? 'pl-10' : '';
  };
  let cardImage: Card['img'] = $state({});
  const changeImage = () => {
    cardImage = Object.keys(cardImage).length === 0 
      ? { src: '/images/image-1.webp', alt: 'my image' } 
      : {};
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
      return `<Card${props.join('')}>My Card</Card>`;
    })()
  );

  let copiedStatus = $state(false);

  function handleCopyClick(codeBlock: string) {
  copyToClipboard(codeBlock)
      .then(() => {
        copiedStatus = true;
        setTimeout(() => {
          copiedStatus = false;
        }, 1000);
      })
      .catch((err) => {
        console.error('Error in copying:', err);
        // Handle the error as needed
      });
  }
</script>

<H1>Cards</H1>

<H2>Setup</H2>
<GeneratedCode 
  componentStatus={copiedStatus}
  generatedCode={modules['./md/setup.md'] as string}
  handleCopyClick={()=>handleCopyClick(modules['./md/setup.md'] as string)}
/>

<H2>Default card</H2>
<CodeWrapper class="flex flex-col space-y-4">
  <div class="flex justify-center">
    <Card>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>
      <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>
    </Card>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-card.md'] as string} />

<H2>Interactive Card Builder</H2>
<CodeWrapper class="flex flex-col space-y-4">
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-16 my-1" name="interactive_card_size" bind:group={cardSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4">
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
  <div class="mt-4 flex flex-wrap gap-2">
  <Button class="w-40" color="sky" onclick={changeLink}> {link === '' ? 'Add link' : 'Remove link'}</Button>
  <Button class="w-40" color="green" onclick={changeClass}>{cardClass ? 'Remove class' : 'Add class'}</Button>
  <Button class="w-40" color="blue" onclick={changeImage}>{Object.keys(cardImage).length === 0 ? 'Add image' : 'Remove image'}</Button>
  <Button disabled={Object.keys(cardImage).length === 0} class="w-40" color="violet" onclick={changeImgLayout}>{horizontal  ? 'Vertical' : 'Horizontal'}</Button>
  <Toggle bind:checked={reverse} labelClass="italic dark:text-gray-500 {Object.keys(cardImage).length === 0 ? 'opacity-50 cursor-not-allowed' : ''}" disabled={Object.keys(cardImage).length === 0}>Reverse: {reverse} </Toggle>
  </div>
  <h3 class="text-xl font-semibold my-4">Generated Code:</h3>
  <GeneratedCode 
    componentStatus={copiedStatus}
    {generatedCode}
    handleCopyClick={()=>handleCopyClick(generatedCode)}
  />
  <div class="h-[700px]">
    <div class="flex justify-center">
      <Card size={cardSize} {color} padding={cardPadding} shadow={cardShadow} href={link ? link : ''} class={cardClass} img={cardImage} {horizontal} {reverse}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>
        <p class="font-normal leading-tight text-gray-700 dark:text-gray-300">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>
      </Card>
    </div>
  </div>
</CodeWrapper>

<H2>Custom size</H2>
<CodeWrapper class="flex justify-center">
  <Card class="max-w-[250px]">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technology acquisitions</h5>
    <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions.</p>
  </Card>
</CodeWrapper>
<HighlightCompo code={modules['./md/custom-size.md'] as string} />

<H2>Card with action button</H2>

<CodeWrapper class="flex justify-center">
  <Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>
    <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>
    <Button class="w-fit">
      Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
    </Button>
  </Card>
</CodeWrapper>

<HighlightCompo code={modules['./md/card-with-action-button.md'] as string} />

<H2>Call to action card</H2>
<CodeWrapper class="flex justify-center">
  <Card class="text-center" size="lg" padding="xl">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">
      <Button>Download it</Button>
      <Button>Get it on</Button>
    </div>
  </Card>
</CodeWrapper>

<HighlightCompo code={modules['./md/call-to-action-card.md'] as string} />
