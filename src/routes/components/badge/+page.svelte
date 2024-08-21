<script lang="ts">
  import { Badge, badge, Button, Indicator, Radio, Label, type BadgeProps } from '$lib';
  import { ClockSolid, EnvelopeSolid, CheckOutline, CheckCircleOutline } from 'flowbite-svelte-icons';
  import { blur, fly, slide, scale } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  import { capitalizeFirstLetter } from '../../utils/helpers';
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
  const colors = Object.keys(badge.variants.color);
  let color: BadgeProps['color'] = $state('primary');
  let badgeSize: BadgeProps['large'] = $state(false);
  const changeSize = () => {
    badgeSize = !badgeSize;
  };
  let badgeDismissable: BadgeProps['dismissable'] = $state(false);
  const changeDismissable = () => {
    badgeDismissable = !badgeDismissable;
  };
  let badgeClass: BadgeProps['class'] = $state('');
  const changeClass = () => {
    badgeClass = badgeClass === '' ? 'p-4' : '';
  };
  let badgeStatus2 = $state(true);
  const changeStatus = () => {
    badgeStatus2 = true;
  };
  let border: BadgeProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let rounded: BadgeProps['rounded'] = $state(false);
  const changeRounded = () => {
    rounded = !rounded;
  };

  // transition example
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
    color: Badge['color'];
  };

  const transitions: TransitionOption[] = [
    { name: 'fly', transition: fly, params: { duration: 1000, easing: linear, x: 150 }, color: 'blue' },
    { name: 'blur', transition: blur, params: { duration: 1000, easing: linear }, color: 'lime' },
    { name: 'slide', transition: slide, params: { duration: 1000, easing: linear, x: -150 }, color: 'violet' },
    { name: 'scale', transition: scale, params: { duration: 1000, easing: linear }, color: 'pink' }
  ];

  let selectedTransition = $state('fly');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  let transionStatus = $state(true);
  const changeTransitionStatus = () => {
    transionStatus = !transionStatus;
  };
</script>

<H1>Badge</H1>
<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md'] as string} />

<H2>Default badge</H2>
<CodeWrapper>
  <Badge>Default</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/default-badge.md'] as string} />

<H2>Reactive badge</H2>
<CodeWrapper class="space-y-4">
  <div class="h-12">
    {#if !badgeStatus2}
      <Button color="light" onclick={changeStatus}>Open badge</Button>
    {/if}
    <Badge {color} large={badgeSize} dismissable={badgeDismissable} class={badgeClass} bind:badgeStatus={badgeStatus2} {border} {rounded}>Default</Badge>
  </div>

  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="color" bind:group={color} color={colorOption as BadgeProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <Button class="w-40" color="blue" onclick={changeSize}>{badgeSize ? 'Small' : 'Large'}</Button>
  <Button class="w-40" color="green" onclick={changeDismissable}>{badgeDismissable ? 'Not dismissable' : 'Dismissable'}</Button>
  <Button class="w-40" color="purple" onclick={changeClass}>{badgeClass ? 'Remove class' : 'Add class'}</Button>
  <Button class="w-40" color="yellow" onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
  <Button class="w-40" color="dark" onclick={changeRounded}>{rounded ? 'Remove rounded' : 'Add rounded'}</Button>
</CodeWrapper>

<H2>Large badge</H2>
<HighlightCompo codeLang="ts" code={modules['./md/large-badge.md'] as string} />

<H2>Bordered badge</H2>
<HighlightCompo codeLang="ts" code={modules['./md/bordered-badge.md'] as string} />

<H2>Pills badge</H2>
<HighlightCompo codeLang="ts" code={modules['./md/pills-badge.md'] as string} />

<H2>Dismissable badge</H2>
<CodeWrapper class="h-20">
  <Badge dismissable large color="violet">Default</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/dismissable-badge.md'] as string} />

<H3>Transitions</H3>
<CodeWrapper class="h-56">
  <div class="h-16">
    <Badge color={currentTransition.color as Badge['color']} dismissable bind:badgeStatus={transionStatus} transition={currentTransition.transition} params={currentTransition.params}>
      <span class="font-medium">{capitalizeFirstLetter(selectedTransition)} transition</span>
    </Badge>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-24 my-1" name="icon_alert_color" bind:group={selectedTransition} value={transition.name}>{capitalizeFirstLetter(transition.name)}</Radio>
    {/each}
  </div>
  {#if !transionStatus}
    <Button class="w-36" color="green" onclick={changeTransitionStatus}>{transionStatus ? '' : 'Open'}</Button>
  {/if}
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/transition.md'] as string} />

<H3>Dismissing with icon</H3>
<CodeWrapper class="h-20">
  <Badge dismissable>
    Default
    {#snippet icon()}
      <CheckCircleOutline class="h-5 w-5" />
    {/snippet}
  </Badge>
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/dismissable-badge-2.md'] as string} />

<H3>Dismissing with events</H3>
<CodeWrapper class="h-20">
  <Badge dismissable large onclick={handleClose} bind:badgeStatus={eventStatus}>Default</Badge>
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/dismissable-badge-3.md'] as string} />


<H2>Badge as links</H2>
<CodeWrapper>
  <Badge href="/">Badge link</Badge>
  <Badge href="/" color="blue" large>Badge link</Badge>
  <Badge href="/" color="green" border>Badge link</Badge>
  <Badge href="/" color="yellow" rounded>Badge link</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/badge-as-links.md'] as string} />

<H2>Badge with icon</H2>
<CodeWrapper>
  <Badge color="gray" border>
    <ClockSolid class="me-1.5 h-2.5 w-2.5" />
    3 days ago
  </Badge>
  <Badge border>
    <ClockSolid class="me-1.5 h-2.5 w-2.5 text-primary-800 dark:text-primary-400" />
    2 minutes ago
  </Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/badge-with-icon.md'] as string} />

<H2>Notification badge</H2>
<CodeWrapper class="space-x-4">
  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold">18</Indicator>
  </Button>

  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator color="red" border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>
  </Button>

  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator color="sky" border size="xl" placement="bottom-right" class="text-xs font-bold">20</Indicator>
  </Button>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/notification-badge.md'] as string} />

<H2>Button with badge</H2>
<CodeWrapper>
  <Button>
    Messages
    <Badge rounded class="ms-2 h-4 w-4 bg-white p-0 font-semibold text-primary-800 dark:bg-white dark:text-primary-800">2</Badge>
  </Button>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/button-with-badge.md'] as string} />

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
<HighlightCompo codeLang="ts" code={modules['./md/badge-with-icon-only.md'] as string} />

<H2>Opening badge</H2>
<CodeWrapper class="h-20">
  <Button onclick={openBadge}>Open badge</Button>
  <Badge class="ml-4" color="blue" dismissable large bind:badgeStatus={openBadgeStatus}>Default</Badge>
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/opening-badge.md'] as string} />

