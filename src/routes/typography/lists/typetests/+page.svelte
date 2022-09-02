<script>
  import {
    Htwo,
    ExampleDiv,
    GitHubSource,
    CompoDescription,
    TableProp,
    TableDefaultRow
  } from '../../../utils';
  import {
    List,
    Li,
    Span,
    DescriptionList,
    A,
    P,
    Button,
    Card,
    Heading,
    Breadcrumb,
    BreadcrumbItem
  } from '$lib';
</script>

<ExampleDiv>
  <Heading
    tag="h2"
    customSize="text-lg font-semibold"
    class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
  <List tag="ul" class="space-y-1">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>
</ExampleDiv>

<ExampleDiv>
  <Heading
    tag="h2"
    customSize="text-lg font-semibold"
    class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
  <List tag="ul" class="space-y-1" list="none">
    <Li icon>
      <svg
        class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd" /></svg>
      At least 10 characters (and up to 100 characters)
    </Li>
    <Li icon>
      <svg
        class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd" /></svg>
      At least one lowercase character
    </Li>
    <Li icon>
      <svg
        class="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd" /></svg>
      Inclusion of at least one special character, e.g., ! @ # ?
    </Li>
  </List>
</ExampleDiv>

<ExampleDiv>
  <List tag="ul" class="space-y-4">
    <Li
      >List item one
      <List tag="ol" class="pl-5 mt-2 space-y-1">
        <Li>You might feel like you are being really "organized" o</Li>
        <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
        <Li>Nesting tons of folders in your source code is also not helpful.</Li>
      </List>
    </Li>
    <Li
      >List item two
      <List tag="ol" class="pl-5 mt-2 space-y-1">
        <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
        <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
        <Li>If you nest four levels deep you belong in prison.</Li>
      </List>
    </Li>
    <Li
      >List item three
      <List tag="ol" class="pl-5 mt-2 space-y-1">
        <Li>Again please don't nest lists if you want</Li>
        <Li>Nobody wants to look at this.</Li>
        <Li>I'm upset that we even have to bother styling this.</Li>
      </List>
    </Li>
  </List>
</ExampleDiv>

<Htwo label="Unstyled" />

<ExampleDiv>
  <Heading
    tag="h2"
    customSize="text-lg font-semibold"
    class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white"
    >Password requirements</Heading>
  <List tag="ul" class="space-y-1" list="none">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>
</ExampleDiv>

<ExampleDiv>
  <Heading
    tag="h2"
    customSize="text-lg font-semibold"
    class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">Top students:</Heading>
  <List tag="ul" class="space-y-1">
    <Li><Span>Bonnie Green</Span> with <Span>70</Span> points</Li>
    <Li><Span>Jese Leos</Span> with <Span>63</Span> points</Li>
    <Li><Span>Leslie Livingston</Span> with <Span>57</Span> points</Li>
  </List>
</ExampleDiv>

Nested

<ExampleDiv>
  <List tag="ol" list="decimal">
    <Li
      >List item one
      <List tag="ul" class="pl-5 mt-2 space-y-1">
        <Li>You might feel like you are being really "organized" o</Li>
        <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
        <Li>Nesting tons of folders in your source code is also not helpful.</Li>
      </List>
    </Li>
    <Li
      >List item two
      <List tag="ul" class="pl-5 mt-2 space-y-1">
        <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
        <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
        <Li>If you nest four levels deep you belong in prison.</Li>
      </List>
    </Li>
    <Li
      >List item three
      <List tag="ul" class="pl-5 mt-2 space-y-1">
        <Li>Again please don't nest lists if you want</Li>
        <Li>Nobody wants to look at this.</Li>
        <Li>I'm upset that we even have to bother styling this.</Li>
      </List>
    </Li>
  </List>
</ExampleDiv>

Description List

<ExampleDiv>
  <List tag="dl" color="text-gray-900 dark:text-white">
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
</ExampleDiv>

List with icon

<ExampleDiv>
  <List tag="ul" class="mb-8 space-y-4" list="none">
    <Li icon class="space-x-3">
      <svg
        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd" /></svg>
      Individual configuration
    </Li>
    <Li icon class="space-x-3">
      <svg
        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd" /></svg>
      No setup, or hidden fees
    </Li>
    <Li icon class="space-x-3">
      <svg
        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd" /></svg>
      Team size: <Span>1 developer</Span>
    </Li>
    <Li icon class="space-x-3">
      <svg
        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd" /></svg>
      Premium support: <Span>6 months</Span>
    </Li>
    <Li icon class="space-x-3">
      <svg
        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd" /></svg>
      Free updates: <Span>6 months</Span>
    </Li>
  </List>
</ExampleDiv>

Advanced layout

<ExampleDiv>
  <List tag="ul" class="divide-y divide-gray-200 dark:divide-gray-700">
    <Li class="pb-3 sm:pb-4" icon>
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src="/images/profile-picture-1.webp"
            alt="Neil profile" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          $320
        </div>
      </div>
    </Li>
    <Li class="py-3 sm:py-4" icon>
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src="/images/profile-picture-2.webp"
            alt="Bonnie profile" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Bonnie Green</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          $3467
        </div>
      </div>
    </Li>
    <Li class="py-3 sm:py-4" icon>
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src="/images/profile-picture-3.webp"
            alt="Michael profile" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Michael Gough</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          $67
        </div>
      </div>
    </Li>
    <Li class="py-3 sm:py-4" icon>
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src="/images/profile-picture-4.jpg"
            alt="Thomas profile" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Thomas Lean</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          $2367
        </div>
      </div>
    </Li>
    <Li class="py-3 sm:py-4" icon>
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src="/images/profile-picture-5.jpg"
            alt="Lana profile" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Lana Byrd</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          $367
        </div>
      </div>
    </Li>
  </List>
</ExampleDiv>

Horizontal List

<ExampleDiv>
  <List tag="ul" list="none" ulClass="flex flex-wrap justify-center items-center mb-6">
    <Li>
      <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
        >About</A>
    </Li>
    <Li>
      <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
        >Premium</A>
    </Li>
    <Li>
      <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
        >Campaigns</A>
    </Li>
    <Li>
      <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
        >Blog</A>
    </Li>
    <Li>
      <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
        >Affiliate Program</A>
    </Li>
    <Li>
      <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
        >FAQs</A>
    </Li>
  </List>
</ExampleDiv>
