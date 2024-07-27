<script lang="ts">
  import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownDivider,
    uiHelpers
  } from '$lib';

  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Avatar</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default avatar</H2>
<CodeWrapper class="flex justify-center gap-4 rtl:space-x-reverse">
  <Avatar src="/images/profile-picture-2.webp" />
  <Avatar src="/images/profile-picture-2.webp" rounded />
</CodeWrapper>

<HighlightCompo code={modules['./md/default-avatar.md'] as string} />

<H2>Bordered</H2>
<CodeWrapper class="flex justify-center gap-4">
  <Avatar src="/images/profile-picture-2.webp" border />
  <Avatar
    src="/images/profile-picture-2.webp"
    border
    class="ring-red-400 dark:ring-red-300"
  />
</CodeWrapper>

<HighlightCompo code={modules['./md/bordered.md'] as string} />

<H2>Placeholder</H2>
<CodeWrapper class="flex justify-center gap-4">
  <Avatar />
  <Avatar rounded />
  <Avatar border />
  <Avatar rounded border />
</CodeWrapper>

<HighlightCompo code={modules['./md/placeholder.md'] as string} />

<H2>Placeholder initials</H2>
<CodeWrapper class="flex justify-center">
  <Avatar>JL</Avatar>
</CodeWrapper>

<HighlightCompo code={modules['./md/placeholder-initials.md'] as string} />

<H2>Avatar tooltip</H2>
<CodeWrapper class="flex justify-center gap-4">NOT COMPLETED</CodeWrapper>

<H2>Dot indicator</H2>
<CodeWrapper class="flex justify-center gap-4">
  <Avatar src="/images/profile-picture-3.webp" dot={{ color: 'red' }} />
  <Avatar
    src="/images/profile-picture-3.webp"
    dot={{ placement: 'top-right', color: 'red' }}
    rounded
  />
  <Avatar
    src="/images/profile-picture-5.webp"
    dot={{ placement: 'bottom-right', color: 'green' }}
  />
  <Avatar
    src="/images/profile-picture-5.webp"
    dot={{ placement: 'bottom-right' }}
    rounded
  />
  <Avatar dot={{}} />
</CodeWrapper>

<HighlightCompo code={modules['./md/dot-indicator.md'] as string} />

<H2>Stacked</H2>
<CodeWrapper class="flex flex-col justify-center gap-4">
  <div class="mb-5 flex">
    <Avatar src="/images/profile-picture-1.webp" stacked />
    <Avatar src="/images/profile-picture-2.webp" stacked />
    <Avatar src="/images/profile-picture-3.webp" stacked />
    <Avatar stacked />
  </div>
  <div class="flex">
    <Avatar src="/images/profile-picture-1.webp" stacked />
    <Avatar src="/images/profile-picture-2.webp" stacked />
    <Avatar src="/images/profile-picture-3.webp" stacked />
    <Avatar
      stacked
      href="/"
      class="bg-gray-700 text-sm text-white hover:bg-gray-600">+99</Avatar
    >
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/stacked.md'] as string} />

<H2>Avatar text</H2>
<CodeWrapper class="flex justify-center">
  <div class="flex items-center space-x-4 rtl:space-x-reverse">
    <Avatar src="/images/profile-picture-1.webp" rounded />
    <div class="space-y-1 font-medium dark:text-white">
      <div>Jese Leos</div>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        Joined in August 2014
      </div>
    </div>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/avatar-text.md'] as string} />

<H2>User dropdown</H2>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Avatar
    onclick={dropdown.toggle}
    src="/images/profile-picture-3.webp"
    class="cursor-pointer"
    dot={{ color: 'green' }}
  />
  <div class="relative">
    <Dropdown
      {dropdownStatus}
      {closeDropdown}
      divClass="absolute top-[40px] -left-[100px]"
    >
      {#snippet header()}
        <div>Bonnie Green</div>
        <div class="truncate font-medium">name@flowbite.com</div>
      {/snippet}
      {#snippet children()}
        <DropdownItem href="/">Dashboard</DropdownItem>
        <DropdownItem href="/nav">Navbar</DropdownItem>
        <DropdownItem href="/footer">Footer</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/dropdown">Dropdown</DropdownItem>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/user-dropdown.md'] as string} />

<H2>Sizes</H2>
<CodeWrapper class="flex flex-col gap-4">
  <div
    class="flex flex-col flex-wrap justify-center gap-4 sm:flex-row rtl:space-x-reverse"
  >
    <Avatar src="/images/profile-picture-3.webp" rounded size="xs" />
    <Avatar src="/images/profile-picture-3.webp" rounded size="sm" />
    <Avatar src="/images/profile-picture-3.webp" rounded size="md" />
    <Avatar src="/images/profile-picture-3.webp" rounded size="lg" />
    <Avatar src="/images/profile-picture-3.webp" rounded size="xl" />
    <Avatar
      src="/images/profile-picture-3.webp"
      rounded
      size="none"
      class="h-28 w-28"
    />
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/sizes.md'] as string} />
