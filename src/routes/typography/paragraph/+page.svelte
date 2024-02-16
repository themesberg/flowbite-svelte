<script>
  import { P, Layout } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>Paragraph</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default paragraph</H2>

<CodeWrapper>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
  <P weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
    Accelerate critical development work, eliminate toil, and deploy changes with ease, with a
    complete audit trail for every change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/default-paragraph.md']} />

<H2>Leading paragraph</H2>

<CodeWrapper>
  <P pclass="mb-3 md:text-xl" weight="light" size="lg" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work and deploy.</P
  >
  <P weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/leading-paragraph.md']} />

<H2>First letter</H2>

<CodeWrapper>
  <P pclass="mb-3" color="text-gray-500 dark:text-gray-400" firstupper
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
  <P weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/first-letter.md']} />

<H2>Paragraph bold</H2>

<CodeWrapper>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <strong
      class="font-semibold text-gray-900 dark:text-white"
    >
      Link issues across Jira
    </strong>
    and ingest data from other software development tools, so your IT support and operations teams have
    richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph-bold.md']} />

<H2>Paragraph underline</H2>

<CodeWrapper>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <u class="underline">
      Link issues across Jira
    </u>
    and ingest data from other software development tools, so your IT support and operations teams have
    richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph-underline.md']} />

<H2>Paragraph italic</H2>

<CodeWrapper>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. <em
      class="font-italic"
    >
      Link issues across Jira
    </em>
    and ingest data from other software development tools, so your IT support and operations teams have
    richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>

  <P italic pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph-italic.md']} />

<H2>Layout</H2>

<H3>One column</H3>

<CodeWrapper>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/one-column.md']} />

<H3>Two columns even</H3>
<CodeWrapper>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
  <Layout divclass="gap-6">
    <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Track work across the enterprise through an open, collaborative platform. Link issues across
      Jira and ingest data from other software development tools, so your IT support and operations
      teams have richer contextual information to rapidly respond to requests, incidents, and
      changes.</P
    >
    <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of traditional ITSM
      solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
      with a complete audit trail for every change.</P
    >
  </Layout>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/two-columns-even.md']} />

<H3>Three columns even</H3>
<CodeWrapper>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
  <Layout divclass="gap-6" cols="grid-cols-1 sm:grid-cols-3">
    <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Track work across the enterprise through an open, collaborative platform. Link issues across
      Jira and ingest data from other software development tools, so your IT support and operations
      teams have richer contextual information to rapidly respond to requests, incidents, and
      changes.</P
    >
    <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of traditional ITSM
      solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
      with a complete audit trail for every change.</P
    >
    <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of traditional ITSM
      solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
      with a complete audit trail for every change.</P
    >
  </Layout>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/three-columns-even.md']} />

<H3>Two columns uneven</H3>

<CodeWrapper>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
  <Layout divclass="gap-6" cols="grid-cols-1 sm:grid-cols-3">
    <div class="col-span-2">
      <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
        >Track work across the enterprise through an open, collaborative platform. Link issues
        across Jira and ingest data from other software development tools, so your IT support and
        operations teams have richer contextual information to rapidly respond to requests,
        incidents, and changes.</P
      >
      <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
        >Deliver great service experiences fast - without the complexity of traditional ITSM
        solutions.Accelerate critical development work, eliminate toil, and deploy changes with
        ease, with a complete audit trail for every change.</P
      >
    </div>
    <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
      >Deliver great service experiences fast - without the complexity of traditional ITSM
      solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
      with a complete audit trail for every change.</P
    >
  </Layout>
  <P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
    >Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/three-columns-uneven.md']} />

<H2>Text alignment</H2>

<H3>Left</H3>

<CodeWrapper>
  <P align="left"
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/left.md']} />

<H3>Center</H3>

<CodeWrapper>
  <P align="center"
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/center.md']} />

<H3>Right</H3>

<CodeWrapper>
  <P align="right"
    >Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/right.md']} />
