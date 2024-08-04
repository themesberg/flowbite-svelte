<script lang="ts">
  import { P, Layout, A, Label, Radio, Button } from '$lib';
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

  const sizes = [ 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ];
  let pSize: P['size'] = $state('base');
  const weights = [ 'thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black' ];
  let pWeight: P['weight'] = $state('normal');
  const spaces = [ 'tighter', 'tight', 'normal', 'loose', 'wider', 'widest' ];
  let pSpace: P['space'] = $state('normal');
  const heights = [ 'none', 'tight', 'snug', 'normal', 'relaxed', 'loose' , '3', '4', '5', '6', '7', '8', '9', '10'];
  let pHeight: P['height'] = $state('normal');
  const alignments = [ 'left', 'center', 'right' ];
  let pAlign: P['align'] = $state('left');
  const whitespaces = [ 'normal', 'nowrap', 'pre', 'preline', 'prewrap' ];
  let pWhitespace: P['whitespace'] = $state('normal');
  const styles = [ 'normal', 'italic' ];
  let pStyle: P['style'] = $state('normal');
  let pFirstupper: P['firstUpper'] = $state(false)
  let pJustify: P['justify'] = $state(false);
</script>

<H1>Paragraph</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default paragraph</H2>

<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open.</P
  >
  <P weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions. Accelerate critical development work, eliminate
    toil, and deploy changes with ease, with a complete audit trail for every
    change.</P
  >
</CodeWrapper>
<HighlightCompo code={modules['./md/default-paragraph.md'] as string} />

<H2>Size and weight</H2>
<CodeWrapper>
  <div class="h-[300px] overflow-scroll">
  <P 
    weight={pWeight}
    size={pSize}
    color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform.
    </P>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio
        labelClass="w-12 my-1"
        name="p_size"
        bind:group={pSize}
        value={size}>{size}</Radio
      >
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mt-4">
    <Label class="mb-4 w-full font-bold">Weight:</Label>
    {#each weights as weight}
      <Radio
        labelClass="w-20 my-1"
        name="p_weight"
        bind:group={pWeight}
        value={weight}>{weight}</Radio
      >
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/size-and-weight.md'] as string} />

<H2>Space and height</H2>
<CodeWrapper>
  <div class="h-[200px] overflow-scroll">
  <P 
    space={pSpace}
    height={pHeight}
    color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions.Accelerate critical development work, eliminate
    toil, and deploy changes with ease, with a complete audit trail for every
    change.
    </P>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Space:</Label>
    {#each spaces as space}
      <Radio
        labelClass="w-20 my-1"
        name="p_space"
        bind:group={pSpace}
        value={space}>{space}</Radio
      >
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mt-4">
    <Label class="mb-4 w-full font-bold">Height:</Label>
    {#each heights as height}
      <Radio
        labelClass="w-16 my-1"
        name="p_height"
        bind:group={pHeight}
        value={height}>{height}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/space-and-height.md'] as string} />

<H2>Alignment and whitespace</H2>
<CodeWrapper>
  <div class="h-[200px] overflow-scroll">
  <P 
    align={pAlign}
    whitespace={pWhitespace}
    color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions.Accelerate critical development work, eliminate
    toil, and deploy changes with ease.
    </P>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each alignments as align}
      <Radio
        labelClass="w-20 my-1"
        name="p_align"
        bind:group={pAlign}
        value={align}>{align}</Radio
      >
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mt-4">
    <Label class="mb-4 w-full font-bold">whitespace:</Label>
    {#each whitespaces as whitespace}
      <Radio
        labelClass="w-16 my-1"
        name="p_whitespace"
        bind:group={pWhitespace}
        value={whitespace}>{whitespace}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/alignment-and-whitespace.md'] as string} />

<H2>Style and First letter</H2>
<CodeWrapper>
  <div class="h-[200px] overflow-scroll">
    <P 
      style={pStyle}
      firstUpper={pFirstupper}
      color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of
      traditional ITSM solutions.Accelerate critical development work, eliminate
      toil, and deploy changes with ease, with a complete audit trail for every
      change.
      </P>
    </div>
    <div class="flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Alignment:</Label>
      {#each styles as style}
        <Radio
          labelClass="w-20 my-1"
          name="p_style"
          bind:group={pStyle}
          value={style}>{style}</Radio
        >
      {/each}
    </div>
    <Button class="mt-4" onclick={() => pFirstupper = !pFirstupper}>{pFirstupper ? 'Normal' : 'Upper'}</Button>
</CodeWrapper>
<HighlightCompo code={modules['./md/first-letter.md'] as string} />

<H2>Justify</H2>
<CodeWrapper>
  <div class="h-[200px] overflow-scroll">
    <P 
      justify={pJustify}
      color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of
      traditional ITSM solutions.Accelerate critical development work, eliminate
      toil, and deploy changes with ease, with a complete audit trail for every
      change.
      </P>
    </div>
    <Button class="mt-4" onclick={() => pJustify = !pJustify}>{pJustify ? 'Normal' : 'Justify'}</Button>
</CodeWrapper>
<HighlightCompo code={modules['./md/justify.md'] as string} />

<H2>Paragraph link</H2>
<CodeWrapper>
  <P weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <A
      href="/">Link issues across Jira</A
    > and ingest data from other software development tools, so your IT support and
    operations teams have richer contextual information to rapidly respond to requests,
    incidents, and changes.
  </P>
</CodeWrapper>
<HighlightCompo code={modules['./md/paragraph-link.md'] as string} />

<H2>Paragraph bold</H2>

<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <strong
      class="font-semibold text-gray-900 dark:text-white"
    >
      Link issues across Jira
    </strong>
    and ingest data from other software development tools, so your IT support and
    operations teams have richer contextual information to rapidly respond to requests,
    incidents, and changes.
  </P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph-bold.md'] as string} />

<H2>Paragraph underline</H2>

<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <u
      class="underline"
    >
      Link issues across Jira
    </u>
    and ingest data from other software development tools, so your IT support and
    operations teams have richer contextual information to rapidly respond to requests,
    incidents, and changes.
  </P>
</CodeWrapper>
<HighlightCompo code={modules['./md/paragraph-underline.md'] as string} />

<H2>Layout</H2>

<H3>One column</H3>

<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform.
    Link issues across Jira and ingest data from other software development
    tools, so your IT support and operations teams have richer contextual
    information to rapidly respond to requests, incidents, and changes.</P
  >
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions.Accelerate critical development work, eliminate
    toil, and deploy changes with ease, with a complete audit trail for every
    change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/one-column.md'] as string} />

<H3>Two columns even</H3>
<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform.
    Link issues across Jira and ingest data from other software development
    tools, so your IT support and operations teams have richer contextual
    information to rapidly respond to requests, incidents, and changes.</P
  >
  <Layout class="gap-6">
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Track work across the enterprise through an open, collaborative platform.
      Link issues across Jira and ingest data from other software development
      tools, so your IT support and operations teams have richer contextual
      information to rapidly respond to requests, incidents, and changes.</P
    >
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of
      traditional ITSM solutions.Accelerate critical development work, eliminate
      toil, and deploy changes with ease, with a complete audit trail for every
      change.</P
    >
  </Layout>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions.Accelerate critical development work, eliminate
    toil, and deploy changes with ease, with a complete audit trail for every
    change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/two-columns-even.md'] as string} />

<H3>Three columns even</H3>
<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform.
    Link issues across Jira and ingest data from other software development
    tools, so your IT support and operations teams have richer contextual
    information to rapidly respond to requests, incidents, and changes.</P
  >
  <Layout class="grid-cols-1 gap-6 sm:grid-cols-3">
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Track work across the enterprise through an open, collaborative platform.
      Link issues across Jira and ingest data from other software development
      tools, so your IT support and operations teams have richer contextual
      information to rapidly respond to requests, incidents, and changes.</P
    >
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of
      traditional ITSM solutions.Accelerate critical development work, eliminate
      toil, and deploy changes with ease, with a complete audit trail for every
      change.</P
    >
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of
      traditional ITSM solutions.Accelerate critical development work, eliminate
      toil, and deploy changes with ease, with a complete audit trail for every
      change.</P
    >
  </Layout>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions.Accelerate critical development work, eliminate
    toil, and deploy changes with ease, with a complete audit trail for every
    change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/three-columns-even.md'] as string} />

<H3>Two columns uneven</H3>

<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform.
    Link issues across Jira and ingest data from other software development
    tools, so your IT support and operations teams have richer contextual
    information to rapidly respond to requests, incidents, and changes.</P
  >
  <Layout class="grid-cols-1 gap-6 sm:grid-cols-3">
    <div class="col-span-2">
      <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
        >Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.</P
      >
      <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
        >Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease, with a complete audit
        trail for every change.</P
      >
    </div>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of
      traditional ITSM solutions.Accelerate critical development work, eliminate
      toil, and deploy changes with ease, with a complete audit trail for every
      change.</P
    >
  </Layout>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions.Accelerate critical development work, eliminate
    toil, and deploy changes with ease, with a complete audit trail for every
    change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/three-columns-uneven.md'] as string} />
