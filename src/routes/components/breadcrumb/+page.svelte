<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Button } from '$lib';
  import { HomeOutline, ChevronDoubleRightOutline } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'breadcrumb';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let navClass: Breadcrumb['class'] = $state('');
  const changeNavClass = () => {
    navClass = navClass === '' ? 'border border-red-500 p-2' : '';
  };
  let olClass: Breadcrumb['olClass'] = $state('');
  const changeOlClass = () => {
    olClass = olClass === '' ? 'border border-blue-500 p-2' : '';
  };
</script>

<H1>Breadcrumb</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default Breadcrumb</H2>

<CodeWrapper innerClass="overflow-x-scroll p-2 sm:p-6">
  <div class="h-20">
    <Breadcrumb {navClass} {olClass}>
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
      <BreadcrumbItem href="/">Projects</BreadcrumbItem>
      <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
    </Breadcrumb>
  </div>
  <div class="flex flex-wrap gap-2 justify-center md:justify-start">
    <Button class="w-48" onclick={changeNavClass}>{navClass ? 'Remove navClass' : 'Add navClass'}</Button>
    <Button class="w-48" color="green" onclick={changeOlClass}>{olClass ? 'Remove olClass' : 'Add olClass'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/defaultbreadcrumb.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Solid Breadcrumb</H2>

<CodeWrapper innerClass="overflow-x-scroll p-2 sm:p-6">
  <Breadcrumb solid class="overflow-x-scroll">
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
  </Breadcrumb>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/solidbreadcrumb.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icons</H2>

<CodeWrapper innerClass="overflow-x-scroll p-2 sm:p-6">
  <Breadcrumb class="overflow-x-scroll bg-gray-50 px-5 py-3 dark:bg-gray-900">
    <BreadcrumbItem href="/" home>
      {#snippet icon()}
        <HomeOutline class="me-2 h-4 w-4" />
      {/snippet}Home
    </BreadcrumbItem>
    <BreadcrumbItem href="/">
      {#snippet icon()}
        <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />
      {/snippet}
      Projects
    </BreadcrumbItem>
    <BreadcrumbItem>
      {#snippet icon()}
        <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />
      {/snippet}
      Flowbite Svelte
    </BreadcrumbItem>
  </Breadcrumb>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/icons.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>