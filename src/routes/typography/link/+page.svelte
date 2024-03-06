<script lang="ts">
  import { A, P } from '$lib';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>Links</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default link</H2>

<CodeWrapper>
  <A href="/" aclass="font-medium hover:underline">Read more</A>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-link.md'] as string} />

<H2>Paragraph</H2>
<CodeWrapper>
  <P>
    The free updates that will be provided is based on the <A href="/" aclass="underline hover:no-underline">roadmap</A> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.
  </P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph.md'] as string} />

<H2>Icon link</H2>
<CodeWrapper>
  <P>
    500,000 people have made over a million apps with Glide.
    <A href="/" aclass="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium  hover:underline">
      Read their stories
      <ArrowRightOutline class="ms-2 h-4 w-4" />
    </A>
  </P>
</CodeWrapper>

<HighlightCompo code={modules['./md/icon-link.md'] as string} />
