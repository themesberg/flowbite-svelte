<script lang="ts">
  import { Darkmode } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'darkmode';
  import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Darkmode</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default Darkmode</H2>

<CodeWrapper>
  <Darkmode />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/darkmode.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Initial theme</H2>

Add the following to `app.html`:

<HighlightCompo code={modules['./md/initialtheme.md'] as string} />

<H2>Switcher style</H2>

Use the btnClass prop to overwrite the default classes or just use class attribute to append classes to the default classes.

<H2>Mode icon</H2>

Use the lightIcon and darkIcon slots to change icons:

<CodeWrapper>
  <Darkmode class="text-lg">
    {#snippet lightIcon()}
      <ThumbsUpSolid color="red" />
    {/snippet}
    {#snippet darkIcon()}
      <ThumbsDownSolid color="green" />
    {/snippet}
  </Darkmode>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/modeicon.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
