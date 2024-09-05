<script lang="ts">
  import { A, P, Button, Card, Toggle, anchor, Label, Radio, Input, CloseButton } from '$lib';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import Figma from '../../utils/icons/Figma.svelte';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'typography/anchor';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let vCard = $state(false);
  const colors = Object.keys(anchor.variants.color);
  let anchorColor: A['color'] = $state('primary');
  let linkClass = $state('font-medium hover:underline');
  const changeLinkClass = () => {
    linkClass = linkClass === 'font-medium hover:underline' ? 'underline hover:no-underline italic font-semibold' : 'font-medium hover:underline';
  };
  let linkIcon = $state(false);
  const changeIcon = () => {
    linkIcon = !linkIcon;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      let iconSlot;
      props.push(` href="/"`);
      if (anchorColor !== 'primary') props.push(` color="${anchorColor}"`);
      if (linkClass) props.push(` class="${linkClass}"`);
      iconSlot = linkIcon ? `<ArrowRightOutline class="ms-2 h-6 w-6" />` : '';
      // if (imgAlignment !== 'left') props.push(` alignment="${imgAlignment}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<A${propsString}>
  Read more ${iconSlot}
</A>`;
    })()
  );

  let { text = $bindable('Read more') } = $props();
</script>

<H1>Links</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Link Builder</H2>
<CodeWrapper>
  <Label class="text-md mb-2">Edit link</Label>
  <Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-4 pr-12">
    {#snippet right()}
      <CloseButton onclick={() => (text = '')} />
    {/snippet}
  </Input>
  <div class="h-10">
  <A href="/" color={anchorColor} class={linkClass}>
    {text}
    {#if linkIcon}<ArrowRightOutline class="ms-2 h-6 w-6" />{/if}
  </A>
  </div>
  <div class="mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="anchor_color" bind:group={anchorColor} color={colorOption as A['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mt-12 flex flex-wrap gap-2">
    <Button class="w-48" color="blue" onclick={changeLinkClass}>{linkClass === 'font-medium hover:underline' ? 'Change class' : 'Remove class'}</Button>
    <Button class="w-48" color="pink" onclick={changeIcon}>{linkIcon ? 'Remove icon' : 'Add icon'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Button</H2>
<CodeWrapper>
  <Button href="/">Read more</Button>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/button-link.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>CTA link</H2>
<CodeWrapper>
  <A href="/" class="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium hover:bg-gray-100 hover:text-gray-900 hover:no-underline dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
    <Figma />
    <span class="ms-3 w-full">Get started with our Figma Design System</span>
    <ArrowRightOutline class="ms-2 h-6 w-6" />
  </A>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/cta-link.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card link</H2>
<CodeWrapper innerClass="flex justify-center">
  <Card href="/">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </Card>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/card-link.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Card with image</H2>
<CodeWrapper innerClass="flex justify-center">
  <div class="flex flex-col space-y-4">
    <Card img={{ src: '/images/image-1.webp', alt: 'my image' }} reverse={vCard}>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>
      <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>
      <Button>
        Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
      </Button>
    </Card>
    <Toggle bind:checked={vCard} spanClass="italic dark:text-gray-500">Reverse: {vCard}</Toggle>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/card-with-image.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
