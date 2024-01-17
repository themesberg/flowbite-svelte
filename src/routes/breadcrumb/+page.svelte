<script>
    import { Breadcrumb, BreadcrumbItem } from "$lib";
    import { HomeOutline, ChevronDoubleRightOutline } from 'flowbite-svelte-icons';
    import HighlightCompo from '../components/HighlightCompo.svelte';
    import CodeWrapper from '../components/CodeWrapper.svelte';
    import setup from './md/setup.md?raw'
    import defaultbreadcrumb from './md/defaultbreadcrumb.md?raw'
    import icons from './md/icons.md?raw'
    import solidbreadcrum from './md/solidbreadcrumb.md?raw'
</script>

<h1>Breadcrumb</h1>

<h2>Setup</h2>

<HighlightCompo code={setup} />

<h2>Default Breadcrumb</h2>

<CodeWrapper>
<Breadcrumb>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
</CodeWrapper>

<HighlightCompo code={defaultbreadcrumb} />

<h2>Solid Breadcrumb</h2>

<CodeWrapper>
<Breadcrumb solid>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
</CodeWrapper>

<HighlightCompo code={solidbreadcrum} />

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

<HighlightCompo code={icons} />