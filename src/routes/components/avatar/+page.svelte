<script lang="ts">
  import { Avatar, avatar, Label, Radio, Button, Dropdown, DropdownLi, DropdownUl, DropdownHeader, DropdownDivider, uiHelpers, type AvatarProps } from '$lib';

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
  import { copyToClipboard } from '../../utils/helpers';
  import GeneratedCode from '../../utils/GeneratedCode.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  // reactive example, rounded, border, stacked, size, className
  const sizes = Object.keys(avatar.variants.size);
  let avatarSize: Avatar['size'] = $state('md');
  let isRounded = $state(false);
  const toggleCornerStyle = () => {
    isRounded = !isRounded;
  };
  let border: AvatarProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let stacked: AvatarProps['stacked'] = $state(false);
  const changeStacked = () => {
    stacked = !stacked;
  };
  let avatarClass: AvatarProps['class'] = $state('');
  const changeClass = () => {
    avatarClass = avatarClass === '' ? 'mx-0.5' : '';
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (isRounded) props.push('cornerStyle="rounded"');
      if (avatarSize !== 'md') props.push(`size="${avatarSize}"`);
      if (border) props.push('border');
      if (stacked) props.push('stacked');
      if (avatarClass) props.push(`class="${avatarClass}"`);
      return `<Avatar ${props.join(' ')}>My Avatar</Avatar>`;
    })()
  );
  let copiedStatus = $state(false);

  function handleCopyClick() {
  copyToClipboard(generatedCode)
    .then(() => {
      copiedStatus = true;
      setTimeout(() => {
        copiedStatus = false;
      }, 1000);
    })
    .catch((err) => {
      console.error('Error in copying:', err);
      // Handle the error as needed
    });
  }
</script>

<H1>Avatar</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default avatar</H2>
<CodeWrapper class="flex justify-center gap-4 rtl:space-x-reverse">
  <Avatar src="/images/profile-picture-2.webp" />
  <Avatar src="/images/profile-picture-2.webp" cornerStyle="rounded" />
</CodeWrapper>
<HighlightCompo code={modules['./md/default-avatar.md'] as string} />

<H2>Interactive Avatar Bilder</H2>
<CodeWrapper class="space-y-4">
  <div class="mb-5 flex justify-center h-36">
    <Avatar src="/images/profile-picture-1.webp" cornerStyle={isRounded ? 'rounded' : undefined} {border} {stacked} class={avatarClass} size={avatarSize}/>
    <Avatar src="/images/profile-picture-2.webp" cornerStyle={isRounded ? 'rounded' : undefined} {border} {stacked} class={avatarClass} size={avatarSize}/>
    <Avatar src="/images/profile-picture-3.webp" cornerStyle={isRounded ? 'rounded' : undefined} {border} {stacked} class={avatarClass} size={avatarSize} />
  </div>
  <div class="mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-24 my-1" name="spinnersize" bind:group={avatarSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <Button class="w-40" color="blue" onclick={toggleCornerStyle}>{isRounded ? 'Default: circular' : 'Rounded'}</Button>
  <Button class="w-40" color="red" onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
  <Button class="w-40" color="green" onclick={changeStacked}>{stacked ? 'Remove stacked' : 'Add  stacked'}</Button>
  <Button class="w-40" color="purple" onclick={changeClass}>{avatarClass ? 'Remove class' : 'Add class'}</Button>
  <GeneratedCode 
    componentStatus={copiedStatus}
    {generatedCode}
    {handleCopyClick}
  />
</CodeWrapper>

<H2>Placeholder</H2>
<CodeWrapper class="flex justify-center gap-4">
  <Avatar />
  <Avatar cornerStyle="rounded" />
  <Avatar border />
  <Avatar cornerStyle="rounded" border />
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
  <Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} cornerStyle="rounded" />
  <Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} />
  <Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} cornerStyle="rounded" />
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
    <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600">+99</Avatar>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/stacked.md'] as string} />

<H2>Avatar text</H2>
<CodeWrapper class="flex justify-center">
  <div class="flex items-center space-x-4 rtl:space-x-reverse">
    <Avatar src="/images/profile-picture-1.webp" cornerStyle="rounded" />
    <div class="space-y-1 font-medium dark:text-white">
      <div>Jese Leos</div>
      <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/avatar-text.md'] as string} />

<H2>User dropdown</H2>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Avatar onclick={dropdown.toggle} src="/images/profile-picture-3.webp" class="cursor-pointer" dot={{ color: 'green' }} />
  <div class="relative">
    <Dropdown {dropdownStatus} {closeDropdown} class="absolute -left-[100px] top-[40px]">
      <DropdownHeader>
        <div>Bonnie Green</div>
        <div class="truncate font-medium">name@flowbite.com</div>
      </DropdownHeader>
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/nav">Navbar</DropdownLi>
        <DropdownLi href="/footer">Footer</DropdownLi>
        <DropdownDivider />
        <DropdownLi href="/dropdown">Dropdown</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/user-dropdown.md'] as string} />
