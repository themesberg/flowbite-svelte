<script lang="ts">
  import { A, P, Button, Card, Toggle } from '$lib';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import Figma from '../../utils/icons/Figma.svelte';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let vCard = $state(false);
</script>

<H1>Links</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default link</H2>
<CodeWrapper>
  <A href="/" aClass="font-medium hover:underline">Read more</A>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-link.md'] as string} />

<H2>Button</H2>
<CodeWrapper>
  <Button href="/">Read more</Button>
</CodeWrapper>

<H2>Paragraph</H2>
<CodeWrapper>
  <P>
    The free updates that will be provided is based on the <A
      href="/"
      aClass="underline hover:no-underline">roadmap</A
    > that we have laid out for this project. It is also possible that we will provide
    extra updates outside of the roadmap as well.
  </P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph.md'] as string} />

<H2>Icon link</H2>
<CodeWrapper>
  <P>
    500,000 people have made over a million apps with Glide.
    <A
      href="/"
      aClass="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline"
    >
      Read their stories
      <ArrowRightOutline class="ms-2 h-6 w-6" />
    </A>
  </P>
</CodeWrapper>
<HighlightCompo code={modules['./md/icon-link.md'] as string} />

<H2>CTA link</H2>
<CodeWrapper>
  <A href="/" aClass="dark:hover:text-white inline-flex justify-center items-center p-5 text-base font-medium bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 hover:no-underline">
    <Figma />
    <span class="w-full ms-3">Get started with our Figma Design System</span>
    <ArrowRightOutline class="w-6 h-6 ms-2" />
  </A>
</CodeWrapper>

<H2>Card link</H2>
<CodeWrapper>
  <Card href="/">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </Card>
</CodeWrapper>

<H2>Card with image</H2>
<CodeWrapper class="flex justify-center">
  <div class="flex flex-col space-y-4">
    <Card
      img={{ src: '/images/image-1.webp', alt: 'my image' }}
      reverse={vCard}
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Noteworthy technology acquisitions
      </h5>
      <p
        class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400"
      >
        Here are the biggest enterprise technology acquisitions of so far, in
        reverse chronological order.
      </p>
      <Button>
        Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
      </Button>
    </Card>
    <Toggle bind:checked={vCard} spanClass="italic dark:text-gray-500"
      >Reverse: {vCard}</Toggle
    >
  </div>
</CodeWrapper>