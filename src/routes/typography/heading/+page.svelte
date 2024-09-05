<script lang="ts">
  import { Heading, Button, P, A, Span, Mark, Breadcrumb, BreadcrumbItem, Badge, Secondary, Label, Radio, Input, CloseButton, uiHelpers } from '$lib';
  import { ArrowRightOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import HighlightCompo2 from '../../utils/HighlightCompo2.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isOverflow } from '../../utils/helpers';
  // import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  let headingTag: Heading['tag'] = $state('h1');
  let headingCls = $state('text-primary-700 dark:text-primary-500');
  const changeHeadingCls = () => {
    headingCls = headingCls === 'text-primary-700 dark:text-primary-500' ? 'text-blue-500 dark:text-blue-400 uppercase italic underline text-center font-semibold bg-gray-50 dark:bg-gray-700 p-4' : 'text-primary-700 dark:text-primary-500';
  }

  const styles = ['default', 'second-level', 'highlighted', 'mark', 'gradient', 'underline', 'breadcrumb', 'badge', 'secondary'];
  let selectedStyle = $state('default');
  let markdown = $derived.by(()=>{
    if (selectedStyle === 'second-level') {
      return 'second-level-heading.md'
    } else if (selectedStyle === 'highlighted') {
      return 'highlighted-heading.md'
    } else if (selectedStyle === 'mark') {
      return 'heading-mark.md'
    } else if (selectedStyle === 'gradient') {
      return 'heading-gradient.md'
    } else if (selectedStyle === 'underline') {
      return 'heading-underline.md'
    } else if (selectedStyle === 'breadcrumb') {
      return 'breadcrumb-context.md'
    } else if (selectedStyle === 'badge') {
      return 'badge-context.md'
    } else if (selectedStyle === 'secondary') {
      return 'secondary-text.md'
    } else {
      return 'default-heading.md'
    }
  })

  let { text = $bindable('My heading') } = $props();
  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (headingTag) props.push(` tag="${headingTag}"`);
      if (headingCls) props.push(` class="${headingCls}"`);
      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Heading${propsString}>
  ${text}
</Headin>`;
    })()
  );

  let codeBlock = uiHelpers();
  let expand = $state(false);

  // modules: ModuleObject, markdown: string
  // const countMarkdownLines = (markdown: string) => {
  //   // get the content from the file name
  //   const markdownLines = modules[`./md/${markdown}`] as string
  //   const lines = markdownLines.split('\n');
  //   return lines.length;
  // }
  
  // const isOverflow = (markdown: string) => {
  //   const markdownLines = modules[`./md/${markdown}`] as string
  //   const lines = markdownLines.split('\n');
  //   return lines.length > 7;
  // }
  // if isOverflow is true, showshowExpandButton is true
  let showExpandButton = $derived(isOverflow(markdown, modules));

  const handleExpandClick = () => {
    expand = !expand;
  }

  $effect(() => {
    isOverflow(markdown, modules)
    expand = codeBlock.isOpen;
  });

</script>

<H1>Heading & Mark</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Sizes</H2>
<CodeWrapper>
  <Label class="text-md mb-2">Edit heading</Label>
  <Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-8 pr-12">
    {#snippet right()}
      <CloseButton onclick={() => (text = '')} />
    {/snippet}
  </Input>
  <div class="h-24">
    <Heading tag={headingTag} class={headingCls}>{text}</Heading>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Rounded:</Label>
    {#each tags as tag}
      <Radio labelClass="w-12 my-1" name="tag" bind:group={headingTag} value={tag}>{tag}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap gap-2">
    <Button class="w-40" color="blue" onclick={changeHeadingCls}>{headingCls !== 'text-primary-700 dark:text-primary-500' ? 'Original class' : 'Change class'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Heading examples</H2>

<CodeWrapper>
  <div class="h-80 grid place-items-center">
    <div class="p-2">
  {#if selectedStyle === 'second-level'}
    <Heading tag="h2" class="text-4xl font-extrabold ">Payments tool for companies</Heading>
    <P class="my-4 text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</P>
    <P class="mb-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</P>
    <A href="/">
      Read more
      <ChevronRightOutline class="ms-2 h-5 w-5" />
    </A>
  {:else if selectedStyle === 'highlighted'}
    <Heading tag="h1" class="mb-4">Get back to growth with <Span highlight="blue">the world's #1</Span> CRM.</Heading>
    <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
  {:else if selectedStyle === 'mark'}
    <Heading tag="h1" class="mb-4">Regain <Mark>control</Mark> over your days</Heading>
    <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
  {:else if selectedStyle === 'gradient'}
    <Heading tag="h1" class="mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl">
      <Span gradient="amberToEmerald">Better Data</Span> Scalable AI.
    </Heading>
    <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
  {:else if selectedStyle === 'underline'}
    <Heading tag="h1" class="mb-4">
      We invest in the <Span underline class="decoration-blue-400 decoration-8 dark:decoration-blue-600">world’s potential</Span>
    </Heading>
    <P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
  {:else if selectedStyle === 'breadcrumb'}
    <Breadcrumb class="mb-4">
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
      <BreadcrumbItem href="/">Settings</BreadcrumbItem>
      <BreadcrumbItem>Team</BreadcrumbItem>
    </Breadcrumb>
    <Heading tag="h2" class="mb-4">Team management</Heading>
  {:else if selectedStyle === 'badge'}
    <Heading tag="h1" class="flex items-center text-5xl">
      Flowbite <Badge class="ms-2 text-2xl font-semibold">PRO</Badge>
    </Heading>
  {:else if selectedStyle === 'secondary'}
    <Heading tag="h1" class="text-5xl font-extrabold">
      Flowbite <Secondary class="ms-2">This is secondary text</Secondary>
    </Heading>
  {:else}
  <div class="text-center">
    <Heading tag="h1" class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">We invest in the world’s potential</Heading>
    <P class="mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
    <Button href="/">
      Learn more
      <ArrowRightOutline class="ms-2 h-5 w-5" />
    </Button>
  </div>
  {/if}
  </div>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Style:</Label>
    {#each styles as style}
      <Radio labelClass="w-28 my-1" name="block_style" bind:group={selectedStyle} value={style}>{style}</Radio>
    {/each}
  </div>
  {#snippet codeblock()}
  <HighlightCompo code={modules[`./md/${markdown}`] as string} />
  <HighlightCompo2
handleExpandClick={handleExpandClick}
{expand} {showExpandButton} code={modules[`./md/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>
