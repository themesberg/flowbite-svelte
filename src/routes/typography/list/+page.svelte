<script lang="ts">
  import { List, Li, Heading, Span, DescriptionList, A, Label, Radio } from '$lib';
  import { CheckCircleSolid, CheckOutline } from 'flowbite-svelte-icons';
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

  const tags = ['ul', 'ol', 'dl'];
  let listTag: List['tag'] = $state('ul');
  const positions = ['inside', 'outside'];
  let listPosition: List['position'] = $state('inside');
</script>

<H1>List</H1>
<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>List position and tag</H2>
<CodeWrapper>
  <Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
  <List tag={listTag} position={listPosition} class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>

  <div class="mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Tag:</Label>
    {#each tags as tag}
      <Radio labelClass="w-24 my-1" name="list_tag" bind:group={listTag} value={tag}>{tag}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Position:</Label>
    {#each positions as position}
      <Radio labelClass="w-24 my-1" name="list_position" bind:group={listPosition} value={position}>{position}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/unordered-list.md'] as string} />

<H3>Icon</H3>
<CodeWrapper>
  <Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
  <List class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li icon>
      <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
      At least 10 characters (and up to 100 characters)
    </Li>
    <Li icon>
      <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
      At least one lowercase character
    </Li>
    <Li icon>
      <CheckCircleSolid class="me-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
      Inclusion of at least one special character, e.g., ! @ # ?
    </Li>
  </List>
</CodeWrapper>

<HighlightCompo code={modules['./md/icon.md'] as string} />

<H3>Nested</H3>
<CodeWrapper>
  <List class="space-y-4 text-gray-500 dark:text-gray-400">
    <Li>
      List item one
      <List tag="ol" ctxclass="mt-2 space-y-1 ps-5">
        <Li>You might feel like you are being really "organized" o</Li>
        <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
        <Li>Nesting tons of folders in your source code is also not helpful.</Li>
      </List>
    </Li>
    <Li>
      List item two
      <List tag="ol" ctxclass="mt-2 space-y-1 ps-5">
        <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
        <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
        <Li>If you nest four levels deep you belong in prison.</Li>
      </List>
    </Li>
    <Li>
      List item three
      <List tag="ol" ctxclass="mt-2 space-y-1 ps-5">
        <Li>Again please don't nest lists if you want</Li>
        <Li>Nobody wants to look at this.</Li>
        <Li>I'm upset that we even have to bother styling this.</Li>
      </List>
    </Li>
  </List>
</CodeWrapper>

<HighlightCompo code={modules['./md/nested.md'] as string} />

<H3>Unstyled</H3>

<CodeWrapper>
  <Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
  <List class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>
</CodeWrapper>

<HighlightCompo code={modules['./md/unstyled.md'] as string} />

<H2>Ordered list</H2>
<CodeWrapper>
  <Heading tag="h2" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">Top students:</Heading>
  <List tag="ol" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li><Span>Bonnie Green</Span> with <Span>70</Span> points</Li>
    <Li><Span>Jese Leos</Span> with <Span>63</Span> points</Li>
    <Li><Span>Leslie Livingston</Span> with <Span>57</Span> points</Li>
  </List>
</CodeWrapper>

<HighlightCompo code={modules['./md/ordered-list.md'] as string} />

<H2>Description list</H2>
<CodeWrapper>
  <List tag="dl" class="divide-y divide-gray-200 text-gray-900 dark:divide-gray-700  dark:text-white">
    <div class="flex flex-col pb-3">
      <DescriptionList tag="dt" dtClass="mb-1">Email address</DescriptionList>
      <DescriptionList tag="dd">yourname@flowbite.com</DescriptionList>
    </div>
    <div class="flex flex-col pb-3">
      <DescriptionList tag="dt" dtClass="mb-1">Home address</DescriptionList>
      <DescriptionList tag="dd">92 Miles Drive, Newark, NJ 07103, California, USA</DescriptionList>
    </div>
    <div class="flex flex-col pb-3">
      <DescriptionList tag="dt" dtClass="mb-1">Phone number</DescriptionList>
      <DescriptionList tag="dd">+00 123 456 789 / +12 345 678</DescriptionList>
    </div>
  </List>
</CodeWrapper>

<HighlightCompo code={modules['./md/description-list.md'] as string} />

<H2>List with icon</H2>

<CodeWrapper>
  <List tag="ul" class="mb-8 space-y-4 text-gray-500 dark:text-gray-400">
    <Li icon class="gap-3">
      <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
      Individual configuration
    </Li>
    <Li icon class="gap-3">
      <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
      No setup, or hidden fees
    </Li>
    <Li icon class="gap-3">
      <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
      <span>Team size: <Span>1 developer</Span></span>
    </Li>
    <Li icon class="gap-3">
      <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
      <span>Premium support: <Span>6 months</Span></span>
    </Li>
    <Li icon class="gap-3">
      <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
      <span>Free updates: <Span>6 months</Span></span>
    </Li>
  </List>
</CodeWrapper>

<HighlightCompo code={modules['./md/list-with-icon.md'] as string} />

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
</CodeWrapper>

<HighlightCompo code={modules['./md/advanced-layout.md'] as string} />

<H2>Horizontal list</H2>
<CodeWrapper>
  <List tag="ul" class="mb-6 flex flex-wrap items-center justify-center">
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
</CodeWrapper>

<HighlightCompo code={modules['./md/horizontal-list.md'] as string} />

<H2>ctxclass</H2>
<CodeWrapper>
  <List ctxclass="my-4">
    <Li>Example 1</Li>
    <Li>Example 2</Li>
    <Li>Example 3</Li>
    <Li>Example 4</Li>
  </List>
</CodeWrapper>

<HighlightCompo code={modules['./md/ctxclass.md'] as string} />
