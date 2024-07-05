<script lang="ts">
  import { Heading, Button, P, A, Span, Mark, Breadcrumb, BreadcrumbItem, Badge, Secondary } from '$lib';
  import { ArrowRightOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Heading, Span & Mark</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default heading</H2>

<CodeWrapper>
  <div class="text-center">
    <Heading
      tag="h1"
      class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl"
      >We invest in the world’s potential</Heading
    >
    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >Here at Flowbite we focus on markets where technology, innovation, and
      capital can unlock long-term value and drive economic growth.</P
    >
    <Button href="/">
      Learn more
      <ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
    </Button>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-heading.md'] as string} />

<H2>Second-level heading</H2>

<CodeWrapper>
  <Heading tag="h2" class="text-4xl font-extrabold "
    >Payments tool for companies</Heading
  >
  <P class="my-4 text-gray-500"
    >Start developing with an open-source library of over 450+ UI components,
    sections, and pages built with the utility classes from Tailwind CSS and
    designed in Figma.</P
  >
  <P class="mb-4"
    >Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions. Accelerate critical development work, eliminate
    toil, and deploy changes with ease.</P
  >
  <A href="/">
    Read more
    <ChevronRightOutline class="ms-2 h-3.5 w-3.5" />
  </A>
</CodeWrapper>

<HighlightCompo code={modules['./md/second-level-heading.md'] as string} />

<H2>Highlighted heading</H2>

<CodeWrapper>
  <Heading tag="h1" class="mb-4"
    >Get back to growth with <Span highlight>the world's #1</Span> CRM.</Heading
  >
  <P
    >Here at Flowbite we focus on markets where technology, innovation, and
    capital can unlock long-term value and drive economic growth.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/highlighted-heading.md'] as string} />

<H2>Heading mark</H2>

<CodeWrapper>
  <Heading tag="h1" class="mb-4"
    >Regain <Mark>control</Mark> over your days</Heading
  >
  <P
    >Here at Flowbite we focus on markets where technology, innovation, and
    capital can unlock long-term value and drive economic growth.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/heading-mark.md'] as string} />

<H2>Heading gradient</H2>
<CodeWrapper>
  <Heading
    tag="h1"
    class="mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl"
  >
    <Span gradient>Better Data</Span> Scalable AI.
  </Heading>
  <P
    >Here at Flowbite we focus on markets where technology, innovation, and
    capital can unlock long-term value and drive economic growth.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/heading-gradient.md'] as string} />

<H2>Heading underline</H2>
<CodeWrapper>
  <Heading tag="h1" class="mb-4">
    We invest in the <Span underline decorationClass="decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential</Span>
  </Heading>
  <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>  
</CodeWrapper>

<H2>Breadcrumb context</H2>
<CodeWrapper>
  <Breadcrumb class="mb-4">
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Settings</BreadcrumbItem>
    <BreadcrumbItem>Team</BreadcrumbItem>
  </Breadcrumb>
  <Heading tag="h2" class="mb-4">Team management</Heading>
</CodeWrapper>

<H2>Badge context</H2>
<CodeWrapper>
  <Heading tag="h1" class="flex items-center" size="text-5xl">
    Flowbite <Badge class="text-2xl font-semibold ms-2">PRO</Badge>
  </Heading>
</CodeWrapper>

<H2>Secondary text</H2>
<CodeWrapper>
  <Heading tag="h1" customSize="text-5xl font-extrabold">
    Flowbite <Secondary class="ms-2">This is secondary text</Secondary>
  </Heading>
</CodeWrapper>

<H2>Sizes</H2>
<H3>Heading one (H1)</H3>
<CodeWrapper>
  <Heading tag="h1">Heading 1</Heading>
</CodeWrapper>

<H3>Heading two (H2)</H3>
<CodeWrapper>
  <Heading tag="h2">Heading 2</Heading>
</CodeWrapper>

<H3>Heading three (H3)</H3>
<CodeWrapper>
  <Heading tag="h3">Heading 3</Heading>
</CodeWrapper>


<H3>Heading four (H4)</H3>
<CodeWrapper>
  <Heading tag="h4">Heading 4</Heading>
</CodeWrapper>


<H3>Heading five (H5)</H3>
<CodeWrapper>
  <Heading tag="h5">Heading 5</Heading>
</CodeWrapper>


<H3>Heading six (H6)</H3>
<CodeWrapper>
  <Heading tag="h6">Heading 6</Heading>
</CodeWrapper>

