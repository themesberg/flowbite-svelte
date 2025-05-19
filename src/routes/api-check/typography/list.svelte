<script>
  import { List, Li, DescriptionList, Heading, Span, A } from "$lib";
  import { CheckCircleSolid, CloseCircleSolid, CheckOutline } from "flowbite-svelte-icons";
</script>

<h1 class="my-4 text-3xl">List</h1>

<h2 class="my-4 text-2xl">Unordored list</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Heading tag="h2" class="mb-2 text-lg text-lg font-semibold font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>
</div>

<h3>Icons</h3>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Heading tag="h2" class="mb-2 text-lg text-lg font-semibold font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li icon>
      <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
      At least 10 characters (and up to 100 characters)
    </Li>
    <Li icon>
      <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
      At least one lowercase character
    </Li>
    <Li icon>
      <CloseCircleSolid class="me-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
      Inclusion of at least one special character, e.g., ! @ # ?
    </Li>
  </List>
</div>

<h3>Nested</h3>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <List tag="ul" class="space-y-4 text-gray-500 dark:text-gray-400">
    <Li>
      List item one
      <List tag="ol" class="mt-2 space-y-1 ps-5">
        <Li>You might feel like you are being really "organized" o</Li>
        <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
        <Li>Nesting tons of folders in your source code is also not helpful.</Li>
      </List>
    </Li>
    <Li>
      List item two
      <List tag="ol" class="mt-2 space-y-1 ps-5">
        <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
        <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
        <Li>If you nest four levels deep you belong in prison.</Li>
      </List>
    </Li>
    <Li>
      List item three
      <List tag="ol" class="mt-2 space-y-1 ps-5">
        <Li>Again please don't nest lists if you want</Li>
        <Li>Nobody wants to look at this.</Li>
        <Li>I'm upset that we even have to bother styling this.</Li>
      </List>
    </Li>
  </List>
</div>

<h3>Unstyled</h3>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Heading tag="h2" class="mb-2 text-lg text-lg font-semibold font-semibold  text-gray-900 dark:text-white">Password requirements</Heading>
  <List tag="dl" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>
</div>

<h2 class="my-4 text-2xl">Ordered list</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Heading tag="h2" class="mb-2 text-lg text-lg font-semibold font-semibold  text-gray-900 dark:text-white">Top students:</Heading>
  <List tag="ol" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li><Span>Bonnie Green</Span> with <Span>70</Span> points</Li>
    <Li><Span>Jese Leos</Span> with <Span>63</Span> points</Li>
    <Li><Span>Leslie Livingston</Span> with <Span>57</Span> points</Li>
  </List>
</div>

<h3>Nested</h3>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <List tag="ol" class="list-decimal text-gray-500 dark:text-gray-400">
    <Li>
      List item one
      <List tag="ul" class="mt-2 space-y-1 ps-5">
        <Li>You might feel like you are being really "organized" o</Li>
        <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
        <Li>Nesting tons of folders in your source code is also not helpful.</Li>
      </List>
    </Li>
    <Li>
      List item two
      <List tag="ul" class="mt-2 space-y-1 ps-5">
        <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
        <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
        <Li>If you nest four levels deep you belong in prison.</Li>
      </List>
    </Li>
    <Li>
      List item three
      <List tag="ul" class="mt-2 space-y-1 ps-5 text-gray-500 dark:text-gray-400">
        <Li>Again please don't nest lists if you want</Li>
        <Li>Nobody wants to look at this.</Li>
        <Li>I'm upset that we even have to bother styling this.</Li>
      </List>
    </Li>
  </List>
</div>

<h2 class="my-4 text-2xl">Description List</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
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
</div>

<h2 class="my-4 text-2xl">List with icon</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
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
</div>

<h2 class="my-4 text-2xl">Advanced layout</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <List tag="dl" class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
    <Li class="pb-3 sm:pb-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <div class="shrink-0">
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
        <div class="shrink-0">
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
        <div class="shrink-0">
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
        <div class="shrink-0">
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
        <div class="shrink-0">
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
</div>

<h2 class="my-4 text-2xl">Horizontal List</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <List tag="dl" class="mb-6 flex flex-wrap items-center justify-center">
    <Li>
      <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">About</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">Premium</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">Campaigns</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">Blog</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">Affiliate Program</A>
    </Li>
    <Li>
      <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">FAQs</A>
    </Li>
  </List>
</div>
