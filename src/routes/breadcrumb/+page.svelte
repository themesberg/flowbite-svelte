<script>
    import { Breadcrumb, BreadcrumbItem } from "$lib";
    import { HomeOutline, ChevronDoubleRightOutline } from 'flowbite-svelte-icons';
    import HighlightCompo from '../components/HighlightCompo.svelte';
    import CodeWrapper from '../components/CodeWrapper.svelte';

    const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true })
</script>

<h1>Breadcrumb</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Default Breadcrumb</h2>

<CodeWrapper>
<Breadcrumb>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultbreadcrumb.md']} />

<h2>Solid Breadcrumb</h2>

<CodeWrapper>
<Breadcrumb solid>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
</CodeWrapper>

<HighlightCompo code={modules['./md/solidbreadcrumb.md']} />

<h2>Icons</h2>

<CodeWrapper>
<Breadcrumb class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
    <BreadcrumbItem href="/" home>
      {#snippet icon()}
        <HomeOutline class="w-4 h-4 me-2" />
      {/snippet}Home
    </BreadcrumbItem>
    <BreadcrumbItem href="/">
      {#snippet icon()}
        <ChevronDoubleRightOutline class="w-3 h-3 mx-2 dark:text-white" />
      {/snippet}
      Projects
    </BreadcrumbItem>
    <BreadcrumbItem>
      {#snippet icon()}
        <ChevronDoubleRightOutline class="w-3 h-3 mx-2 dark:text-white" />
      {/snippet}
      Flowbite Svelte
    </BreadcrumbItem>
</Breadcrumb>
</CodeWrapper>

<HighlightCompo code={modules['./md/icons.md']} />