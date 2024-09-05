<script lang="ts">
  import { page } from '$app/stores';
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from '$lib';
  import { HomeSolid, WalletSolid, AdjustmentsVerticalSolid, UserCircleSolid } from 'flowbite-svelte-icons';
  let svgClass = 'mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500';
  let svgActiveClass = 'mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700';
  let activeUrl = $state('');

  $effect(() => {
    activeUrl = $page.url.pathname;
  });

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'bottom-navigation';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Bottom navigation</H1>

<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md'] as string} />

<H2>Default bottom navigation</H2>
<CodeWrapper innerClass="p-0">
  <div class="relative flex flex-col p-6">
    <Skeleton class="py-4" />
    <ImagePlaceholder class="pb-20" />

    <BottomNav position="absolute" innerClass="grid-cols-4">
      <BottomNavItem btnName="Home">
        <HomeSolid class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      </BottomNavItem>
      <BottomNavItem btnName="Wallet">
        <WalletSolid class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      </BottomNavItem>
      <BottomNavItem btnName="Settings">
        <AdjustmentsVerticalSolid class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      </BottomNavItem>
      <BottomNavItem btnName="Profile">
        <UserCircleSolid class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      </BottomNavItem>
    </BottomNav>
  </div>
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={modules['./md/default-bottom-navigation.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Links, target and active class</H2>
<CodeWrapper innerClass="p-0">
  <div class="relative flex flex-col p-6">
    <Skeleton class="py-4" />
    <ImagePlaceholder class="pb-20" />

    <BottomNav position="absolute" innerClass="grid-cols-4">
      <BottomNavItem btnName="Home" href="/">
        <HomeSolid />
      </BottomNavItem>
      <BottomNavItem btnName="Quickstart" href="/pages/about" target="_blank">
        <WalletSolid />
      </BottomNavItem>
      <BottomNavItem btnName="BottomNav" href="/components/bottom-navigation">
        <AdjustmentsVerticalSolid />
      </BottomNavItem>
      <BottomNavItem btnName="Accordion" href="/components/accordion">
        <UserCircleSolid />
      </BottomNavItem>
    </BottomNav>
  </div>
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={modules['./md/links-and-active-class.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Overwriting activeClass</H2>
<CodeWrapper innerClass="p-0">
  <div class="relative flex flex-col p-6">
    <Skeleton class="py-4" />
    <ImagePlaceholder class="pb-20" />

    <BottomNav position="absolute" innerClass="grid-cols-4" activeClass="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300">
      <BottomNavItem btnName="Home" href="/">
        <HomeSolid />
      </BottomNavItem>
      <BottomNavItem btnName="Quickstart" href="/pages/quickstart">
        <WalletSolid />
      </BottomNavItem>
      <BottomNavItem btnName="BottomNav" href="/components/bottom-navigation">
        <AdjustmentsVerticalSolid />
      </BottomNavItem>
      <BottomNavItem btnName="Accordion" href="/components/accordion">
        <UserCircleSolid />
      </BottomNavItem>
    </BottomNav>
  </div>
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={modules['./md/overwriting-activeclass.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon color</H2>
<CodeWrapper innerClass="p-0">
  <div class="relative flex flex-col p-6">
    <Skeleton class="py-4" />
    <ImagePlaceholder class="pb-20" />

    <BottomNav position="absolute" innerClass="grid-cols-4">
      <BottomNavItem btnName="Home" href="/">
        <HomeSolid class={activeUrl === '/' ? svgActiveClass : svgClass} />
      </BottomNavItem>
      <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
        <WalletSolid class={activeUrl === '/docs/pages/quickstart' ? svgActiveClass : svgClass} />
      </BottomNavItem>
      <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
        <AdjustmentsVerticalSolid class={activeUrl === '/docs/components/bottom-navigation' ? svgActiveClass : svgClass} />
      </BottomNavItem>
      <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
        <UserCircleSolid class={activeUrl === '/docs/components/accordion' ? svgActiveClass : svgClass} />
      </BottomNavItem>
    </BottomNav>
  </div>
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={modules['./md/icon-color.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Menu items with border</H2>
<CodeWrapper innerClass="p-0">
  <div class="relative flex flex-col p-6">
    <Skeleton class="py-4" />
    <ImagePlaceholder class="pb-20" />

    <BottomNav position="absolute" navType="border" innerClass="grid-cols-4">
      <BottomNavItem btnName="Home">
        <HomeSolid />
      </BottomNavItem>
      <BottomNavItem btnName="Wallet">
        <WalletSolid />
      </BottomNavItem>
      <BottomNavItem btnName="Settings">
        <AdjustmentsVerticalSolid />
      </BottomNavItem>
      <BottomNavItem btnName="Profile">
        <UserCircleSolid />
      </BottomNavItem>
    </BottomNav>
  </div>
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={modules['./md/menu-items-with-border.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Application bar example</H2>
<CodeWrapper>TBD</CodeWrapper>

<H2>Example with pagination</H2>
<CodeWrapper>TBD</CodeWrapper>

<H2>Button group bottom bar</H2>
<CodeWrapper>TBD</CodeWrapper>

<H2>Card with bottom bar</H2>
<CodeWrapper>TBD</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>