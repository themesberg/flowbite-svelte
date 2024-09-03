<script lang="ts">
  import { Blockquote, blockquote, P, Rating, Label, Radio, Button, Input, CloseButton } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  import { QuoteSolid } from 'flowbite-svelte-icons';
  let { text = $bindable('Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!') } = $props();

  const styles = ['default', 'solid', 'icon', 'context', 'testimonial', 'review'];
  let selectedStyle = $state('default');

  const sizes = Object.keys(blockquote.variants.size);
  let selectedSize: Blockquote['size'] = $state('lg');

  const alignments = Object.keys(blockquote.variants.alignment);
  let selectedAlignment: Blockquote['alignment'] = $state('left');
  let border = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let italic = $state(false);
  const changeItalic = () => {
    italic = !italic;
  };
  let bg = $state(false);
  const changeBg = () => {
    bg = !bg;
  };
  let blockClass: Blockquote['class'] = $state('p-8');
  const changeClass = () => {
    blockClass = blockClass === 'p-8' ? 'p-4' : 'p-8';
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (bg) props.push(' bg');
      if (border) props.push(' border');
      if (italic) props.push(' italic');
      if (selectedAlignment !== 'left') props.push(` alignment="${selectedAlignment}"`);
      // blockClass
      if (blockClass) props.push(` class="${blockClass}"`);
      if (selectedSize !== 'lg') props.push(` size="${selectedSize}"`);
      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : ' ';

      return `<Blockquote${propsString}>
  ${text}
</Blockquote>`;
    })()
  );
  let markdown = $derived.by(()=>{
    if (selectedStyle === 'solid') {
      return 'solid-background.md'
    } else if (selectedStyle === 'icon') {
      return 'blockquote-icon.md'
    } else if (selectedStyle === 'context') {
      return 'paragraph-context.md'
    } else if (selectedStyle === 'testimonial') {
      return 'user-testimonial.md'
    } else if (selectedStyle === 'review') {
      return 'user-review.md'
    } else {
      return 'default-blockquote.md'
    }
  })
  
</script>

<H1>Blockquote</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Blockquote Bilder</H2>
<CodeWrapper>
  <Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-8 pr-12">
    {#snippet right()}
      <CloseButton onclick={() => (text = '')} />
    {/snippet}
  </Input>
  <div class="mb-4 h-[300px] overflow-y-auto md:h-[250px]">
    <Blockquote {border} {italic} size={selectedSize} {bg} alignment={selectedAlignment} class={blockClass}>{text}</Blockquote>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-16 my-1" name="block_size" bind:group={selectedSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each alignments as alignment}
      <Radio labelClass="w-16 my-1" name="block_alignment" bind:group={selectedAlignment} value={alignment}>{alignment}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap gap-2">
    <Button class="w-40" color="blue" onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
    <Button class="w-40" color="rose" onclick={changeItalic}>{italic ? 'Remove italic' : 'Add italic'}</Button>
    <Button class="w-40" color="indigo" onclick={changeBg}>{bg ? 'Remove bg' : 'Add bg'}</Button>
    <Button class="w-40" color="sky" onclick={changeClass}>{blockClass === 'p-8' ? 'class: p-4' : 'class: p-8'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Styles</H2>
<CodeWrapper>
  <div class="mb-4 h-[600px] sm:h-[500px] md:h-[400px] xl:h-[300px]">
    {#if selectedStyle === 'solid'}
      <P color="text-gray-500 dark:text-gray-400">Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.</P>
      <Blockquote border bg class="my-4 p-4">
        <P size="xl" height="relaxed">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</P>
      </Blockquote>
      <P color="text-gray-500 dark:text-gray-400">First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.</P>
    {:else if selectedStyle === 'icon'}
      <Blockquote size="xl">
        <QuoteSolid class="h-10 w-10 text-gray-400 dark:text-gray-600" />
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
      </Blockquote>
    {:else if selectedStyle === 'context'}
      <P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
        <Blockquote class="mb-3" size="xl">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</Blockquote>
      </div>
      <P class="mb-3" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    {:else if selectedStyle === 'testimonial'}
      <figure class="mx-auto max-w-screen-md text-center">
        <QuoteSolid class="mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-600" />
        <Blockquote alignment="center" size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
        <figcaption class="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">
          <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile" />
          <div class="flex items-center divide-x-2 divide-gray-500 rtl:divide-x-reverse dark:divide-gray-700">
            <cite class="pe-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
            <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
          </div>
        </figcaption>
      </figure>
    {:else if selectedStyle === 'review'}
      <figure class="max-w-screen-md">
        <div class="mb-4 flex items-center text-yellow-300">
          <Rating total={5} rating={4.66} size={24} />
        </div>
        <Blockquote italic={false} size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
        <figcaption class="mt-6 flex items-center space-x-3 rtl:space-x-reverse">
          <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile" />
          <div class="flex items-center divide-x-2 divide-gray-300 rtl:divide-x-reverse dark:divide-gray-700">
            <cite class="pe-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
            <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
          </div>
        </figcaption>
      </figure>
    {:else}
      <Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
    {/if}
  </div>
  <div class="mb-4 flex flex-wrap space-x-12">
    <Label class="mb-4 w-full font-bold">Style:</Label>
    {#each styles as style}
      <Radio labelClass="w-16 my-1" name="block_style" bind:group={selectedStyle} value={style}>{style}</Radio>
    {/each}
  </div>
  {#snippet codeblock()}
  <HighlightCompo code={modules[`./md/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>
