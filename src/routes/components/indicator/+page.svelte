<script>
  import { Indicator, Button } from '$lib';
  import { EnvelopeSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>Indicator</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default indicator</H2>

<CodeWrapper class="flex justify-center gap-4">
  <Indicator color="gray" />
  <Indicator color="dark" />
  <Indicator color="orange" />
  <Indicator color="blue" />
  <Indicator color="green" />
  <Indicator color="red" />
  <Indicator color="purple" />
  <Indicator color="indigo" />
  <Indicator color="yellow" />
  <Indicator color="teal" />
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultindicator.md']} />

<H2>Legend indicator</H2>

<CodeWrapper class="flex justify-center gap-4">
  <span class="flex items-center"
    ><Indicator size="sm" color="orange" divclass="me-1.5" />Visitors</span
  >
  <span class="flex items-center"
    ><Indicator size="sm" color="purple" divclass="me-1.5" />Sessions</span
  >
  <span class="flex items-center"
    ><Indicator size="sm" color="indigo" divclass="me-1.5" />Customers</span
  >
  <span class="flex items-center"
    ><Indicator size="sm" color="teal" divclass="me-1.5" />Revenue</span
  >
</CodeWrapper>

<H2>Indicator count</H2>

<CodeWrapper class="flex justify-center">
  <Button size="lg" btnclass="relative">
    <EnvelopeSolid class="me-2 h-4 w-4 text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    Messages
    <Indicator color="red" border size="xl" placement="top-right">
      <span class="text-xs font-bold text-white">8</span>
    </Indicator>
  </Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/indicator-count.md']} />

<H2>Indicator position</H2>

<CodeWrapper class="flex justify-center">
  <div
    class="borer relative h-56 w-56 rounded-lg border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
  >
    <Indicator placement="top-left" color="gray" />
    <Indicator placement="top-center" color="dark" />
    <Indicator placement="top-right" color="orange" />
    <Indicator placement="center-left" color="green" />
    <Indicator placement="center" color="red" />
    <Indicator placement="center-right" color="purple" />
    <Indicator placement="bottom-left" color="indigo" />
    <Indicator placement="bottom-center" color="yellow" />
    <Indicator placement="bottom-right" color="teal" />
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/position.md']} />
