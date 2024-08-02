<script lang="ts">
  import { ButtonGroup, Button, GradientButton, Label, Radio, type ButtonGroupProps } from '$lib';
  import {
    UserCircleSolid,
    AdjustmentsVerticalSolid,
    DownloadSolid
  } from 'flowbite-svelte-icons';
  const handleClick = () => {
    alert('Clicked');
  };
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  // size, class
  const sizes = ['sm', 'md', 'lg'];
  let size: ButtonGroupProps['size'] = $state('md');
  let buttonGroupClass: ButtonGroupProps['class'] = $state('')
  const changeClass = () => {
    buttonGroupClass = buttonGroupClass === '' ? 'my-4' : ''
  }
</script>

<H1>Button group</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default buttongroup</H2>
<CodeWrapper class="flex justify-center">
  <ButtonGroup>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-buttongroup.md'] as string} />

<H2>Reactive button group</H2>
<CodeWrapper>
  <div class="h-12">
  <ButtonGroup {size} class={buttonGroupClass}>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
  </div>
  <div class="mt-8 space-y-4">
    <div class="flex space-x-4">
      <Label>Current size: {size}</Label>
      {#each sizes as sizeOption}
        <Radio name="size" bind:group={size} value={sizeOption}>{sizeOption}</Radio>
      {/each}
    </div>
    <Button color="green" onclick={changeClass}>{buttonGroupClass? 'Remove class' : 'Add class'}</Button>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/reactive-buttongroup.md'] as string} />

<H2>Size</H2>
<CodeWrapper class="flex justify-center">
  <div>
  <div>Size: sm</div>
  <ButtonGroup size="sm">
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>

  <div class="my-4">Size: md(default)</div>
  <ButtonGroup>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>

  <div class="my-4">Size: lg</div>
  <ButtonGroup size="lg">
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/sizes.md'] as string} />

<H2>More examples</H2>

<CodeWrapper class="flex justify-center">
  <div class="text-gray-900 dark:text-gray-100">
    <div class="py-4">Pills</div>
    <ButtonGroup class="space-x-px">
      <Button pill color="purple">Profile</Button>
      <Button pill color="purple">Settings</Button>
      <Button pill color="purple">Messages</Button>
    </ButtonGroup>
    <div class="py-4">Standard buttons</div>
    <ButtonGroup>
      <Button color="red">Profile</Button>
      <Button color="green">Settings</Button>
      <Button color="yellow">Messages</Button>
    </ButtonGroup>
    <div class="py-4">Outline</div>
    <ButtonGroup>
      <Button outline color="red">Profile</Button>
      <Button outline color="green">Settings</Button>
      <Button outline color="yellow">Messages</Button>
    </ButtonGroup>
    <div class="py-4">Gradient with shadows</div>
    <ButtonGroup>
      <GradientButton shadow color="green">Profile</GradientButton>
      <GradientButton shadow color="pink">Settings</GradientButton>
      <GradientButton shadow color="teal">Messages</GradientButton>
    </ButtonGroup>
    <div class="py-4">Dualtone gradient</div>
    <ButtonGroup class="space-x-px">
      <GradientButton color="purpleToBlue">Profile</GradientButton>
      <GradientButton color="cyanToBlue">Settings</GradientButton>
      <GradientButton color="greenToBlue">Messages</GradientButton>
    </ButtonGroup>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/more-examples.md'] as string} />

<H2>Button group as links</H2>
<CodeWrapper class="flex justify-center">
  <ButtonGroup>
    <Button href="/">Profile</Button>
    <Button href="/">Settings</Button>
    <Button href="/">Messages</Button>
  </ButtonGroup>
</CodeWrapper>

<HighlightCompo code={modules['./md/button-group-as-links.md'] as string} />

<H2>Group button with icons</H2>
<CodeWrapper class="flex justify-center">
  <ButtonGroup>
    <Button>
      <UserCircleSolid class="me-2 h-3 w-3" />
      Profile
    </Button>
    <Button>
      <AdjustmentsVerticalSolid class="me-2 h-3 w-3" />
      Settings
    </Button>
    <Button>
      <DownloadSolid class="me-2 h-3 w-3" />
      Download
    </Button>
  </ButtonGroup>
</CodeWrapper>

<HighlightCompo code={modules['./md/group-button-with-icons.md'] as string} />

<H2>Outline</H2>
<CodeWrapper class="flex justify-center">
  <ButtonGroup>
    <Button outline color="dark">Profile</Button>
    <Button outline color="dark">Settings</Button>
    <Button outline color="dark">Messages</Button>
  </ButtonGroup>
</CodeWrapper>

<HighlightCompo code={modules['./md/outline.md'] as string} />

<H2>Outline with icon</H2>
<CodeWrapper class="flex justify-center">
  <ButtonGroup>
    <Button outline color="dark">
      <UserCircleSolid class="me-2 h-3 w-3" />
      Profile
    </Button>
    <Button outline color="dark">
      <AdjustmentsVerticalSolid class="me-2 h-3 w-3" />
      Settings
    </Button>
    <Button outline color="dark">
      <DownloadSolid class="me-2 h-3 w-3" />
      Download
    </Button>
  </ButtonGroup>
</CodeWrapper>

<HighlightCompo code={modules['./md/outline-with-icon.md'] as string} />

<H2>Events</H2>
<CodeWrapper class="flex justify-center">
  <ButtonGroup>
    <Button onclick={handleClick}>Click me</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</CodeWrapper>

<HighlightCompo code={modules['./md/events.md'] as string} />
