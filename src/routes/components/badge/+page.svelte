<script lang="ts">
  import { Badge, Button, Indicator, Radio, Label, type BadgeProps } from '$lib';
  import {
    ClockSolid,
    CloseCircleSolid,
    EnvelopeSolid,
    CheckOutline,
    CheckCircleOutline
  } from 'flowbite-svelte-icons';
  import { slide } from 'svelte/transition';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  import { quintOut } from 'svelte/easing';
  const slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut,
    axis: 'y'
  };
  let eventStatus = $state(true);
  function handleClose() {
    console.log('Badge dismissed');
    alert('Badge dismissed');
    eventStatus = false;
  }

  let openBadgeStatus = $state(false);
  function openBadge() {
    openBadgeStatus = true;
  }

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  // reactive example
  const colors = ['primary', 'gray', 'blue', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink', 'none']
  let color: BadgeProps['color'] = $state('primary')
  let badgeSize: BadgeProps['large'] = $state(false)
  const changeSize = () => {
    badgeSize = !badgeSize
  }
  let badgeDismissable: BadgeProps['dismissable'] = $state(false)
  const changeDismissable = () => {
    badgeDismissable = !badgeDismissable
  }
  let badgeClass: BadgeProps['class'] = $state('')
  const changeClass = () => {
    badgeClass = badgeClass === '' ? 'p-4' : ''
  }
  let badgeStatus2 = $state(true)
  const changeStatus = () => {
    badgeStatus2 = true
  }
  let border: BadgeProps['border'] = $state(false)
  const changeBorder = () => {
    border = !border
  }
  let rounded: BadgeProps['rounded'] = $state(false)
  const changeRounded = () => {
    rounded = !rounded
  }

</script>

<H1>Badge</H1>
<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md'] as string} />

<H2>Default badge</H2>
<CodeWrapper>
  <Badge>Default</Badge>
  <Badge color="gray">Gray</Badge>
  <Badge color="red">Red</Badge>
  <Badge color="green">Green</Badge>
  <Badge color="yellow">Yellow</Badge>
  <Badge color="indigo">Indigo</Badge>
  <Badge color="purple">Purple</Badge>
  <Badge color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/default-badge.md'] as string}
/>

<H2>Reactive badge</H2>
<CodeWrapper class="space-y-4">
  <div class="h-12">
  {#if !badgeStatus2}
    <Button color="light" onclick={changeStatus}>Open badge</Button>
  {/if}
  <Badge {color} large={badgeSize} dismissable={badgeDismissable} class={badgeClass} bind:badgeStatus={badgeStatus2} {border} {rounded} >Default</Badge>
</div>

  <div class="flex flex-wrap space-x-4">
    <Label class="w-full mb-4">Change color</Label>
    {#each colors as colorOption}
      <Radio name="color" bind:group={color} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <Button class="w-40" color="blue" onclick={changeSize}>{badgeSize? 'Small' : 'Large'}</Button>
  <Button class="w-40" color="green" onclick={changeDismissable}>{badgeDismissable? 'Not dismissable' : 'Dismissable'}</Button>
  <Button class="w-40" color="purple" onclick={changeClass}>{badgeClass? 'Remove class' : 'Add class'}</Button>
  <Button class="w-40" color="yellow" onclick={changeBorder}>{border? 'Remove border' : 'Add border'}</Button>
  <Button class="w-40" color="dark" onclick={changeRounded}>{rounded? 'Remove rounded' : 'Add rounded'}</Button>
</CodeWrapper>

<H2>Large badge</H2>
<CodeWrapper class="space-y-1">
  <Badge large>Default</Badge>
  <Badge large color="gray">Gray</Badge>
  <Badge large color="red">Red</Badge>
  <Badge large color="green">Green</Badge>
  <Badge large color="yellow">Yellow</Badge>
  <Badge large color="indigo">Indigo</Badge>
  <Badge large color="purple">Purple</Badge>
  <Badge large color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/large-badge.md'] as string} />

<H2>Bordered badge</H2>
<CodeWrapper>
  <Badge border>Default</Badge>
  <Badge border color="gray">Gray</Badge>
  <Badge border color="red">Red</Badge>
  <Badge border color="green">Green</Badge>
  <Badge border color="yellow">Yellow</Badge>
  <Badge border color="indigo">Indigo</Badge>
  <Badge border color="purple">Purple</Badge>
  <Badge border color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/bordered-badge.md'] as string}
/>

<H2>Pills badge</H2>
<CodeWrapper>
  <Badge rounded>Default</Badge>
  <Badge rounded color="gray">Gray</Badge>
  <Badge rounded color="red">Red</Badge>
  <Badge rounded color="green">Green</Badge>
  <Badge rounded color="yellow">Yellow</Badge>
  <Badge rounded color="indigo">Indigo</Badge>
  <Badge rounded color="purple">Purple</Badge>
  <Badge rounded color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/pills-badge.md'] as string} />

<H2>Badge as links</H2>
<CodeWrapper>
  <Badge href="/">Badge link</Badge>
  <Badge href="/" color="blue" large>Badge link</Badge>
  <Badge href="/" color="green" border>Badge link</Badge>
  <Badge href="/" color="yellow" rounded>Badge link</Badge>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/badge-as-links.md'] as string}
/>

<H2>Badge with icon</H2>
<CodeWrapper>
  <Badge color="gray" border>
    <ClockSolid class="me-1.5 h-2.5 w-2.5" />
    3 days ago
  </Badge>
  <Badge border>
    <ClockSolid
      class="me-1.5 h-2.5 w-2.5 text-primary-800 dark:text-primary-400"
    />
    2 minutes ago
  </Badge>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/badge-with-icon.md'] as string}
/>

<H2>Notification badge</H2>
<CodeWrapper class="space-x-4">
  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator
      color="blue"
      border
      size="xl"
      placement="top-right"
      class="text-xs font-bold">18</Indicator
    >
  </Button>

  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator
      color="red"
      border
      size="xl"
      placement="top-right"
      class="text-xs font-bold">20</Indicator
    >
  </Button>

  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator
      color="dark"
      border
      size="xl"
      placement="bottom-right"
      class="text-xs font-bold">20</Indicator
    >
  </Button>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/notification-badge.md'] as string}
/>

<H2>Button with badge</H2>
<CodeWrapper>
  <Button>
    Messages
    <Badge
      rounded
      class="ms-2 h-4 w-4 bg-white p-0 font-semibold text-primary-800 dark:bg-white dark:text-primary-800"
      >2</Badge
    >
  </Button>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/button-with-badge.md'] as string}
/>

<H2>Badge with icon only</H2>
<CodeWrapper>
  <Badge color="gray" rounded large class="!p-1 !font-semibold">
    <CheckOutline class="h-3 w-3" />
    <span class="sr-only">Icon description</span>
  </Badge>
  <Badge rounded large class="!p-1 !font-semibold">
    <CheckOutline class="h-3 w-3 text-primary-800 dark:text-primary-400" />
    <span class="sr-only">Icon description</span>
  </Badge>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/badge-with-icon-only.md'] as string}
/>

<H2>Dismissable badge</H2>
<CodeWrapper class="min-h-20 space-y-1">
  <Badge dismissable transition={slide} params={slideParams} large
    >Slide transition</Badge
  >
  <Badge dismissable large>Default</Badge>
  <Badge dismissable large color="gray">Gray</Badge>
  <Badge dismissable large color="red">Red</Badge>
  <Badge dismissable large color="green">Green</Badge>
  <Badge dismissable large color="yellow">Yellow</Badge>
  <Badge dismissable large color="indigo">Indigo</Badge>
  <Badge dismissable large color="purple">Purple</Badge>
  <Badge dismissable large color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/dismissable-badge.md'] as string}
/>

<H3>Dismissing with icon</H3>
<CodeWrapper class="h-20">
  <Badge dismissable>
    Default
    {#snippet icon()}
      <CheckCircleOutline class="h-5 w-5" />
    {/snippet}
  </Badge>
</CodeWrapper>

<HighlightCompo
  codeLang="ts"
  code={modules['./md/dismissable-badge-2.md'] as string}
/>
<H3>Dismissing with events</H3>
<CodeWrapper class="h-20">
  <Badge dismissable large onclick={handleClose} bind:badgeStatus={eventStatus}
    >Default</Badge
  >
</CodeWrapper>

<HighlightCompo
  codeLang="ts"
  code={modules['./md/dismissable-badge-3.md'] as string}
/>

<H2>Opening badge</H2>
<CodeWrapper class="h-20">
  <Button onclick={openBadge}>Open badge</Button>
  <Badge
    class="ml-4"
    color="blue"
    dismissable
    large
    bind:badgeStatus={openBadgeStatus}>Default</Badge
  >
</CodeWrapper>

<HighlightCompo
  codeLang="ts"
  code={modules['./md/opening-badge.md'] as string}
/>

