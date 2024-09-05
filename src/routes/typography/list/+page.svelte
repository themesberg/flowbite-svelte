<script lang="ts">
  import { List, Li, Heading, DescriptionList, A, Label, Radio, Button } from '$lib';
  import { CheckCircleSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'typography/list';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const tags = ['ul', 'ol', 'dl'];
  let listTag: List['tag'] = $state('ul');
  const positions = ['inside', 'outside'];
  let listPosition: List['position'] = $state('inside');
  let listIcon = $state(false);
  const changeListIcon = () => {
    listIcon = !listIcon;
    if (listIcon) {
      nested = false;
    }
  };
  let ctxClass = $state('');
  const changeCtxClass = () => {
    ctxClass = ctxClass === '' ? 'pl-8' : '';
  };
  let nested = $state(false);
  const changeNested = () => {
    nested = !nested;
    if (nested) {
      listIcon = false;
    }
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      let iconSlot;
      let liIcon;
      let nestedContent;

      if (listTag !== 'ul') props.push(` tag="${listTag}"`);
      if (listPosition !== 'inside') props.push(` position="${listPosition}"`);
      // if (linkClass) props.push(` class="${linkClass}"`);
      iconSlot = listIcon ? `<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />` : '';
      if (ctxClass) props.push(` ctxClass="${ctxClass}"`);
      liIcon = listIcon ? ` icon` : '';
      nestedContent = nested
        ? `<List tag="ol" ctxClass="mt-2 space-y-1 ps-5">
      <Li>item 1-1</Li>
      <Li>item 1-2</Li>
      <Li>item 1-3</Li>
    </List>
      `
        : '';

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<List${propsString}>
  <Li${liIcon}>${iconSlot}Item 1${nestedContent}</Li>
  <Li${liIcon}>${iconSlot}Item 2</Li>
  <Li${liIcon}>${iconSlot}Item 3</Li>
</List>`;
    })()
  );
</script>

<H1>List</H1>
<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive List Builder</H2>
<CodeWrapper>
  <Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">List title</Heading>
  <List tag={listTag} position={listPosition} class="space-y-1 text-gray-500 dark:text-gray-400" {ctxClass}>
    <Li icon={listIcon}>
      {#if listIcon}<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />{/if}At least 10 characters (and up to 100 characters)
      {#if nested}
        <List tag="ol" ctxClass="mt-2 space-y-1 ps-5">
          <Li>item 1-1</Li>
          <Li>item 1-2</Li>
          <Li>item 1-3</Li>
        </List>
      {/if}
    </Li>
    <Li icon={listIcon}>
      {#if listIcon}<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />{/if}At least one lowercase character
    </Li>
    <Li icon={listIcon}>
      {#if listIcon}<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />{/if}Inclusion of at least one special character, e.g., ! @ # ?
    </Li>
  </List>
  <div class="mb-4 mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Tag:</Label>
    {#each tags as tag}
      <Radio labelClass="w-24 my-1" name="list_tag" bind:group={listTag} value={tag}>{tag}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Position:</Label>
    {#each positions as position}
      <Radio labelClass="w-24 my-1" name="list_position" bind:group={listPosition} value={position}>{position}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-2">
    <Button class="w-48" color="blue" onclick={changeListIcon}>{listIcon ? 'Remove icon' : 'Add icon'}</Button>
    <Button class="w-48" color="rose" onclick={changeCtxClass}>{ctxClass !== '' ? 'Remove ctxClass' : 'Add ctxClass'}</Button>
    <Button class="w-48" color="teal" onclick={changeNested}>{nested ? 'Remove nested' : 'Add nested'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Description list</H2>
<CodeWrapper>
  <List tag="dl" class="divide-y divide-gray-200 text-gray-900 dark:divide-gray-700  dark:text-white">
    <div class="flex flex-col pb-3">
      <DescriptionList tag="dt" class="mb-1">Email address</DescriptionList>
      <DescriptionList tag="dd">yourname@flowbite.com</DescriptionList>
    </div>
    <div class="flex flex-col pb-3">
      <DescriptionList tag="dt" class="mb-1">Home address</DescriptionList>
      <DescriptionList tag="dd">92 Miles Drive, Newark, NJ 07103, California, USA</DescriptionList>
    </div>
    <div class="flex flex-col pb-3">
      <DescriptionList tag="dt" class="mb-1">Phone number</DescriptionList>
      <DescriptionList tag="dd">+00 123 456 789 / +12 345 678</DescriptionList>
    </div>
  </List>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/description-list.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Advanced layout</H2>
<CodeWrapper>
  <List tag="dl" class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
    <Li class="pb-3 sm:pb-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <div class="flex-shrink-0">
          <img class="h-8 w-8 rounded-full" src="/images/profile-picture-1.webp" alt="Neil profile" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
      </div>
    </Li>
    <Li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <div class="flex-shrink-0">
          <img class="h-8 w-8 rounded-full" src="/images/profile-picture-2.webp" alt="Bonnie profile" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>
      </div>
    </Li>
    <Li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <div class="flex-shrink-0">
          <img class="h-8 w-8 rounded-full" src="/images/profile-picture-3.webp" alt="Michael profile" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
      </div>
    </Li>
    <Li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <div class="flex-shrink-0">
          <img class="h-8 w-8 rounded-full" src="/images/profile-picture-4.webp" alt="Thomas profile" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomas Lean</p>
          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>
      </div>
    </Li>
    <Li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <div class="flex-shrink-0">
          <img class="h-8 w-8 rounded-full" src="/images/profile-picture-5.webp" alt="Lana profile" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
      </div>
    </Li>
  </List>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/advanced-layout.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Horizontal list</H2>
<CodeWrapper>
  <List tag="ul" class="flex flex-wrap items-center justify-center">
    <Li>
      <A href="/" class="me-4 text-red-700 hover:underline md:me-6 dark:text-red-200">About</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-blue-700 hover:underline md:me-6 dark:text-blue-200">Premium</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-green-700 hover:underline md:me-6 dark:text-green-200">Campaigns</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-yellow-700 hover:underline md:me-6 dark:text-yellow-200">Blog</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-gray-200">Affiliate Program</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-pink-700 hover:underline md:me-6 dark:text-pink-200">FAQs</A>
    </Li>
  </List>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/horizontal-list.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
